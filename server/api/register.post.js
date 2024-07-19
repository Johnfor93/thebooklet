import { sql } from "@vercel/postgres";

export default defineEventHandler(async (request) => {
  console.log(await readBody(request));
  try {
    const users = await sql`SELECT * FROM Users;`;
    const dataRows = users.rows;
    return { data: dataRows };
  } catch (error) {
    return { error };
  }
});
