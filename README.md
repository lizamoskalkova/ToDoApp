import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Создание приложения

В этом руководстве мы будем создавать простой список задач **todo-app**, на примере которого будет показана работа с сервисом ICANDEV.

## Подготовка

Создадим основу приложения используя `create-react-app`:

```sh
npx create-react-app todo-app
```

## Установка iCanDev SDK

Установите iCanDev SDK с помощью вашего менеджера пакетов:


<Tabs>
<TabItem value="npm">


```sh
npm install icandev-js-sdk
```


</TabItem>
<TabItem value="yarn">

```sh
yarn add icandev-js-sdk
```

</TabItem>
</Tabs>