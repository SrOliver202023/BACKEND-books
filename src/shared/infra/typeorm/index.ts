import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async (host = "localhost"): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  const connection = await createConnection(
    Object.assign(defaultOptions, {
      host: process.env.HOST || host,
      database: process.env.DB ? process.env.DB : defaultOptions.database,
    })
  );

  return connection;
};
