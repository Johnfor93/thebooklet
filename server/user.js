import { fetchUser } from "~/data/user";

export async function fetchUserAPI(){
    return await fetchUser();
}