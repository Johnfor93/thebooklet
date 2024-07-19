import { sql } from "@vercel/postgres";

export default defineEventHandler(async () => {
  try {
    const users = await sql`
        SELECT 
            log_borrow.id,
            log_borrow.member_id,
            log_borrow.id_book,
            log_borrow.id_admin,
            TO_CHAR(log_borrow.due_date, 'yyyy/mm/dd') as due_date,
            TO_CHAR(log_borrow.borrow_date, 'yyyy/mm/dd') as borrow_date,
            books.title,
            member.name as memberName,
            admin.name as adminName 
        FROM log_borrow
        INNER JOIN books ON books.id = log_borrow.id_book
        INNER JOIN users as member ON member.id = log_borrow.member_id
        INNER JOIN users as admin ON admin.id = log_borrow.id_admin`;
    console.log("users", users.rows);
    const dataRows = users.rows;
    return { data: dataRows };
  } catch (error) {
    return { error };
  }
});
