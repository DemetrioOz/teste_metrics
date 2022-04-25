type sqlProps = {
  user: string;
  password: string;
  database: string;
  port: string;
  server: string;
  options: Object;
};

/***
 * arquivo para adicionar configs do database
 */

export const sqlConfig: sqlProps = {
  user: "",
  password: "",
  database: "",
  port: "",
  server: "",
  options: {
    trustServerCertificate: true,
  },
};
