export default defineNuxtRouteMiddleware(async (to, from) => {
  const data = await localStorage.getItem("user");
  const user = await JSON.parse(data);

  if (!user) {
    return navigateTo("/account/login");
  }
  if (user.role != "member") {
    return navigateTo("/account/login");
  }
  // In a real app you would probably not redirect every route to `/`
  // however it is important to check `to.path` before redirecting or you
  // might get an infinite redirect loop
  return navigateTo(to.path);
});
