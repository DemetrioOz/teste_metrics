const sql = require("mssql");
import { sqlConfig } from "./sqlconfig";

export class Database {
  public async exemploDatabaseFunction(tipo?: string) {
    try {
      await sql.connect(sqlConfig);
      const result = await sql.query(``);
      await sql.close();
      return result;
    } catch (error) {
      await sql.close();
      throw error;
    }
  }
}
