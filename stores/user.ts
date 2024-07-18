export const useUserStore = defineStore('user', () => {
    const username = ref("")
    function login() {
        username.value = "John"
    }
    function logout() {
        username.value = ""
    }

    return { username, login, logout }
})