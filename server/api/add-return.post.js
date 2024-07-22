import { sql } from "@vercel/postgres";

export default defineEventHandler(async (request) => {
  try {
    const dataBody = await readBody(request);

    const dataBook = await sql`SELECT * FROM books WHERE id=${dataBody.idBook}`;
    if (dataBook.rowCount == 0) {
      return {
        success: false,
        message: "Book is not found",
      };
    }

    const data = await sql`INSERT INTO log_return(id_log_borrow, id_admin, return_date, sanction) VALUES(${dataBody.idLogBorrow}, ${dataBody.idAdmin}, ${dataBody.returnDate}, ${dataBody.sanction})`;
    console.log(data);

    const dataUpdate = await sql`UPDATE books SET amount = ${dataBook.rows[0].amount + 1} WHERE id=${dataBody.idBook}`;
    return {
      success: true,
      message: "Data has been inserted",
    };
  } catch (error) {
    console.log("error", error);
    return {
      success: false,
      message: error.message,
    };
  }
});
