# Создание приложения

В этом руководстве мы будем создавать простой список задач **todo-app**, на примере которого будет показана работа с сервисом ICANDEV.

## Подготовка

Создадим основу приложения используя `create-react-app`:

```sh
npx create-react-app todo-app
```

## Установка iCanDev SDK

Установите iCanDev SDK с помощью вашего менеджера пакетов:

npm:

```sh
npm install icandev-js-sdk
```

yarn:

```sh
yarn add icandev-js-sdk
```
## Инициализация приложения

Для взаимодействия с iCanDev необходимо создать объект приложения, сконфигурировав его с помощью полученного ранее API key.

Пример инициализации приложения в начале файла `App.jsx`:

```jsx title="src/App.tsx"
import ICanDevApp from "icandev-js-sdk";

// Создаём сконфигурированный объект приложения
const app = new ICanDevApp({
  apiKey: "YOUR_API_KEY_HERE", // Получить свой API Key можно на главной странице проекта
});

// ...
```

## Взаимодействие с базой данных

Добавим загрузку состояния из базы данных при инициализации приложения

   ```tsx title="src/App.tsx"
     // Получить записи из бд
     async function dbGetTasks() {

     //Создаём кастомный тип, который будет использоваться для получения данных из таблицы
     type TaskTable = {
      id: string, 
      title: string | undefined, 
      isDone: boolean,
     }
     // Создаёт итератор по строкам таблицы, который будет запрашивать по 256 строк за раз
     const rowIterator = app.db.table<TaskTable>("tasks").getRowIterator(256);

     const tasks: TaskTable[] = [];

     // Преобразовываем строки в задачи и собираем в массив
     for await (const row of rowIterator) {
       tasks.push({
         id: row.id,
         title: row.title,
         isDone: row.isDone,
       });
     }
     return tasks;
   }

   function App() {
     // ...

     // Выгружаем все задачи из базы данных при инициализации приложения
     useEffect(() => {
       dbGetTasks().then((tasks) => setTasks(tasks));
     }, []);

     // ...
   }
   ```


Сихронизируем действия в приложении с базой данных

   - Добавление/обновление задачи
 
   ```tsx title="src/App.tsx"
       // Сохранить или обновить задачу в бд
       async function dbSaveTask(task) {
 
       // Задаём нужный тип для переменной tasks
       const [tasks, setTasks] = useState<{id: string, title: string | undefined; isDone: boolean}[]>([]);
       
       // Задаём значения колонок
       const data = {
         title: task.title,
         isDone: task.isDone,
       };

       // Если задаче присвоен id в таблице, обновляем её
       if (task.id) return app.db.table("tasks").updateRow(task.id, data);

       // Иначе, создаём такую задачу и присваиваем ей id
       task.id = await app.db.table("tasks").addRow(data);
     }

     function App() {
       // ...

       const addTask = () => {
         // Сохраняем задачу
         dbSaveTask(currentTask);

         setTasks((tasks) => [...tasks, currentTask]);
         setCurrentTask(EMPTY_TASK);
       };

       const markTask = (event, index) => {
         const updatedTasks = tasks.map((task, i) => {
           if (i === index) return { ...task, isDone: !task.isDone };
           return task;
         });

         // Обновляем задачу
         dbSaveTask(updatedTasks[index]);
         setTasks(updatedTasks);
       };

       // ...
     }
   ```

   - Удаление задачи

   ```tsx title="src/App.tsx"
       // Удаляет задачу из бд
     async function dbDeleteTask(task) {
       // Если задаче не присвоен id в таблице - нечего удалять
       if (!task.id) return;

       // Удаляем задачу
       await app.db.table("tasks").deleteRow(task.id);
     }

     function App() {
       // ...

       const deleteTask = (index) => {
         // Удаляем задачу
         dbDeleteTask(tasks[index]);

         setTasks((tasks) => tasks.filter((task, i) => i !== index));
       };

       // ...
     }
   ```
