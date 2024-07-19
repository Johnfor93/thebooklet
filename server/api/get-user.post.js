import { sql } from "@vercel/postgres";

export default defineEventHandler(async () => {
  try {
    const dataBody = await readBody(request);
    const users = await sql`SELECT * FROM Users WHERE name=${dataBody.filter} or email=${dataBody.filter};`;
    console.log("users", users.rows);
    const dataRows = users.rows;
    return { data: dataRows };
  } catch (error) {
    return { error };
  }
});
