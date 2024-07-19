import { sql } from "@vercel/postgres";

export default defineEventHandler(async (request) => {
  try {
    const dataBody = await readBody(request);
    const users = await sql`
        SELECT 
            log_borrow.id,
            log_borrow.member_id,
            log_borrow.id_book,
            log_borrow.id_admin,
            TO_CHAR(log_return.return_date, 'yyyy/mm/dd') as return_date,
            TO_CHAR(log_borrow.borrow_date, 'yyyy/mm/dd') as borrow_date,
            sanction,
            books.title,
            member.name as memberName,
            admin.name as adminName,
            adminreturn.name as adminReturnName 
        FROM log_return
        INNER JOIN log_borrow on log_borrow.id = log_return.id_log_borrow
        INNER JOIN books ON books.id = log_borrow.id_book
        INNER JOIN users as member ON member.id = log_borrow.member_id
        INNER JOIN users as admin ON admin.id = log_borrow.id_admin
        INNER JOIN users as adminreturn on adminreturn.id = log_return.id_admin
        WHERE
            member.id = ${dataBody.userId}`;
    console.log("users", users.rows);
    const dataRows = users.rows;
    return { data: dataRows };
  } catch (error) {
    return { error };
  }
});
