import { sql } from "@vercel/postgres";

export default defineEventHandler(async (request) => {
  try {
    const dataBody = await readBody(request);

    const data = await sql`INSERT INTO log_borrow(id_book, id_admin, member_id, borrow_date, due_date) VALUES(${dataBody.idBook}, ${dataBody.idAdmin}, ${dataBody.idMember}, ${dataBody.borrowDate}, ${dataBody.dueDate})`;
    console.log(data);
  } catch (error) {
    console.log("error", error);
    return {
      success: false,
      message: error.message,
    };
  }
});
