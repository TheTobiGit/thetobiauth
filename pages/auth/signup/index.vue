<script setup>
import { ref } from "vue";

const supabase = useSupabaseClient();

let fName, lName, email, password;
const errorMessage = ref(null);

async function signUp() {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        First_Name: fName,
        Last_Name: lName,
      },
    },
  });

  if (error) {
    errorMessage.value = error.message;
    return;
  }

  navigateTo("/onboard");
}
</script>

<template>
  <div class="flex justify-center items-center min-h-screen">
    <form @submit.prevent="signUp" class="flex flex-col items-center gap-5">
      <h1 class="text-4xl">SIGNUP</h1>
      <div class="flex flex-col gap-5">
        <div class="flex gap-3 items-center">
          <label for="fName">First Name</label>
          <input
            type="text"
            name="fName"
            id="fName"
            class="border border-black w-40 p-2"
            v-model="fName"
          />
        </div>
        <div class="flex gap-3 items-center">
          <label for="lName">Last Name</label>
          <input
            type="text"
            name="lName"
            id="lName"
            class="border border-black w-40 p-2"
            v-model="lName"
          />
        </div>
      </div>
      <div class="flex gap-3 items-center">
        <label for="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          class="border border-black w-40 p-2"
          v-model="email"
        />
      </div>
      <div class="flex gap-3 items-center">
        <label for="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          class="border border-black w-40 p-2"
          v-model="password"
        />
      </div>
      <button type="submit" class="outline w-20 bg-black text-white">
        signup
      </button>
      <p>
        already have an account?
        <NuxtLink to="/auth/login" class="underline">login</NuxtLink>
      </p>
      <p class="text-red-600">{{ errorMessage }}</p>
    </form>
  </div>
</template>
