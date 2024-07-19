import { sql } from '@vercel/postgres';

export async function fetchUser(){
    try{
        const id = '410544b2-4001-4271-9855-fec4b6a6442a';
        
        const data = await sql`
          SELECT * FROM users WHERE id = ${id};`;

        return data.rows;
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch user")
    }

}