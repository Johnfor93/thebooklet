import { sql } from "@vercel/postgres";

export default defineEventHandler(async (request) => {
  try {
    const dataBody = await readBody(request);

    const data = await sql`INSERT INTO log_return(id_log_borrow, id_admin, return_date, sanction) VALUES(${dataBody.idLogBorrow}, ${dataBody.idAdmin}, ${dataBody.returnDate}, ${dataBody.sanction})`;
    console.log(data);
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
