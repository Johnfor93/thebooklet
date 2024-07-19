import { sql } from "@vercel/postgres";

export default defineEventHandler(async (event) => {
  try {
    const dataBody = await readBody(event)

    const id = dataBody.id;

    const data = await sql`SELECT * FROM Books Where id=${id} LIMIT 1;`;
    console.log("data", data.rows);
    const dataRows = data.rows;
    return { data: dataRows[0] };
  } catch (error) {
    return { error };
  }
});
