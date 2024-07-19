import { sql } from "@vercel/postgres";

export default defineEventHandler(async (request) => {
  try {
    const dataBody = await readBody(request);
    const users = await sql`
        SELECT 
            log_borrow.*,
            books.title,
            member.name as memberName,
            admin.name as adminName 
        FROM log_borrow
        INNER JOIN books ON books.id = log_borrow.id_book
        INNER JOIN users as member ON member.id = log_borrow.member_id
        INNER JOIN users as admin ON admin.id = log_borrow.id_admin
        WHERE
            member.id = ${dataBody.userId}`;
    console.log("users", users.rows);
    const dataRows = users.rows;
    return { data: dataRows };
  } catch (error) {
    return { error };
  }
});
