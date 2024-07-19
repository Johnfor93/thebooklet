export const useUserStore = defineStore("user", () => {
  const user = ref({});

  const userLoggedIn = computed(() => user.value);

  function login(myUser: Object) {
    user.value = myUser;
    console.log("user logged in", user.value);
  }
  function logout() {
    user.value = {};
  }

  return { user, userLoggedIn, login, logout };
});
