import { sql } from "@vercel/postgres";

export default defineEventHandler(async () => {
  try {
    const data = await sql`SELECT * FROM Books;`;
    console.log("data", data.rows);
    const dataRows = data.rows;
    return { data: dataRows };
  } catch (error) {
    return { error };
  }
});
