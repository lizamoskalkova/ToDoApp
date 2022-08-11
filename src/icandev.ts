import ICanDevClient from "icandev-js-sdk";

const apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJrZXlfdmVyc2lvbiI6MSwicHJvamVjdF9pZCI6IjJmZjRkYjg3LWU4MzAtNGRlNi04MzVjLTVmZDU0NWQzZTVjYiIsIm93bmVyX2lkIjoiYjVmYzdmZDEtMjFkYi00M2UyLWExODEtMWY5NGEwNTUxNjIxIiwiaXNzIjoiZGV2X3VtIn0.h1hPRXlcEuVdAEUTWHdnevR8cU-38_CdroTN39KZfto";


export const client = new ICanDevClient({ apiKey });
export const database = client.db;
