<script setup>
const supabase = useSupabaseClient();
let email, password;
const errorMessage = ref(null);

async function signInWithEmail() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    errorMessage.value = error.message;
  }

  navigateTo("/");
}
</script>

<template>
  <div class="flex justify-center items-center min-h-screen">
    <form
      @submit.prevent="signInWithEmail"
      class="flex flex-col items-center gap-5"
    >
      <h1 class="text-4xl">LOGIN</h1>
      <div class="flex gap-3 items-center">
        <label for="email">EMAIL:</label>
        <input
          type="email"
          name="email"
          id="email"
          class="border border-black w-40 p-2"
          v-model="email"
        />
      </div>
      <div class="flex gap-3 items-center">
        <label for="password">PASSWORD:</label>
        <input
          type="password"
          name="password"
          id="password"
          class="border border-black w-40 p-2"
          v-model="password"
        />
      </div>
      <button type="submit" class="outline w-20 bg-black text-white">
        login
      </button>
      <p>
        dont have an account?
        <NuxtLink to="/auth/signup" class="underline">signup</NuxtLink>
      </p>
      <p class="text-red-500">{{ errorMessage }}</p>
    </form>
  </div>
</template>
