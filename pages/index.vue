<script setup>
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const userfName = user.value.user_metadata.First_Name;
const userlName = user.value.user_metadata.Last_Name;
const userFullName = userfName + " " + userlName;
const userClass = user.value.user_metadata.class;
const userFaculty = user.value.user_metadata.faculty;
const userID = user.value.id;

const avatarURL = supabase.storage
  .from("avatar")
  .getPublicUrl(`${userID}/avatar1.png`).data.publicUrl;

console.log(avatarURL);

async function signOut() {
  const { error } = await supabase.auth.signOut();

  navigateTo("/auth/login");
}
</script>

<template>
  <div class="min-h-screen flex gap-3 flex-col justify-center items-center">
    <NuxtLink to="../account"
      ><div class="h-10 w-10 bg-pink-500 ring-black ring-2 rounded-full">
        <img :src="avatarURL" class="h-full w-full" alt="" /></div
    ></NuxtLink>
    <div class="flex flex-col gap-5 items-center">
      <p>Hi, my name is {{ userFullName }}</p>
      <br />
      <p>I am in {{ userClass }} class and {{ userFaculty }} faculty</p>
      <button @click="signOut" class="text-red-400 underline">signout</button>
    </div>
  </div>
</template>
