<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        <img class="w-8 h-8 mr-2" src="/images/logo.webp" alt="logo" />
        The Bookself
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Sign in to your account</h1>
          <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert" v-show="loginFailed">
            <span class="font-medium">{{ loginFailed }}</span>
          </div>
          <div class="space-y-4 md:space-y-6">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input
                type="email"
                name="email"
                id="email"
                v-model="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required
              />
              <small class="red-500" v-show="emailInvalid">{{ emailInvalidMsg }}</small>
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                v-model="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
              <small class="red-500" v-show="passwordInvalid">{{ passwordInvalidMsg }}</small>
            </div>
            <div class="flex items-center justify-between">
              <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
            </div>
            <button
              type="submit"
              class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              @click="actToLogin"
            >
              Sign in
            </button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?
              <a href="/account/register" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
useHead({
  title: `Login | The Booklet`,
  meta: [{ name: "description", content: "Login to The Booklet" }],
});

const password = ref("");
const email = ref("");
const passwordInvalid = ref(false);
const emailInvalid = ref(false);
const passwordInvalidMsg = ref("");
const emailInvalidMsg = ref("");
const loginFailed = ref("");

async function actToLogin() {
  passwordInvalid.value = false;
  emailInvalid.value = false;

  console.log(email.value, password.value, passwordInvalid.value, emailInvalid.value);

  if (email.value.length == 0) {
    emailInvalid.value = true;
    emailInvalidMsg.value = "Email required";
  }
  if (password.value == 0) {
    passwordInvalid.value = true;
    passwordInvalidMsg.value = "Password required";
  }

  console.log(email.value, password.value, passwordInvalid.value, emailInvalid.value);

  if (passwordInvalid.value || emailInvalid.value) return;
  console.log("masuk sini");

  const data = await $fetch("/api/login", {
    method: "POST",
    body: {
      email: email.value,
      password: password.value,
    },
  });

  console.log(data);

  if (data.success) {
    localStorage.setItem("user", JSON.stringify(data.user));
    return navigateTo(data.redirect);
  } else {
    loginFailed.value = data.message;
  }
}
</script>
