import { sql } from "@vercel/postgres";
import * as bcrypt from "bcrypt";

export default defineEventHandler(async (request) => {
  try {
    const dataBody = await readBody(request)

    const data = await sql`SELECT * FROM Users WHERE email=${dataBody.email} LIMIT 1;`;
    if(data.rowCount){
        const user = data.rows[0];

        const response = bcrypt.compare(dataBody.password, user.password).then(
            // result == false
            result => {
                if(!result){
                    return {
                        success: false,
                        message: "User and password doesn't match with any data"
                    }
                }
                let redirectLink = "";
                if(user.role == "admin")redirectLink="/admin/book"
                else if(user.role == "member")redirectLink="/member/book"
                else if(user.role == "head")redirectLink="/head/borrow-report"
                return {
                    success: true,
                    message: "Login successful",
                    redirect: redirectLink
                }
            },
            error => {
                return {
                        success: false,
                        message: "User and password doesn't match with any data"
                    }
            }
        );

        return response;

    } else {
        throw new Error("User and password doesn't match with any data");
    }
  } catch (error) {
    console.log("error", error)
    return { 
        success: false,
        message: error.message
    };
  }
});
