<template>
  <div class="min-h-screen flex flex-col justify-center gap-6 items-center">
    <h1>ACCOUNT PAGE</h1>
    <div class="flex flex-col gap-4">
      <label for="avatar">choose an avatar</label>
      <input
        type="file"
        accept="image/*"
        name="avatar"
        id="avatar"
        @change="handleAvatarSelect"
        required
      />
      <button
        @click="updateAvatar"
        class="outline w-20 bg-black text-white"
        type="submit"
      >
        submit
      </button>
    </div>
    <NuxtLink to="./"> <p class="underline">go back</p></NuxtLink>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();
const user = useSupabaseUser();
let selectedFile;
const userID = user.value.id;

function handleAvatarSelect(event) {
  const files = event.target.files;
  selectedFile = files[0];
}

async function updateAvatar() {
  const { data, error } = await supabase.storage
    .from("avatar")
    .upload(`${userID}/avatar1.png`, selectedFile, {
      cacheControl: "3600",
      upsert: false,
    });
}
</script>
