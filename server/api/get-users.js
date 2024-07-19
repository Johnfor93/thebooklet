import { sql } from "@vercel/postgres";

export default defineEventHandler(async () => {
  try {
    const users = await sql`SELECT * FROM Users;`;
    console.log("users", users.rows);
    const dataRows = users.rows;
    return { data: dataRows };
  } catch (error) {
    return { error };
  }
});
