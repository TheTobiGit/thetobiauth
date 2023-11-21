<script setup>
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const userfName = user.value.user_metadata.First_Name;
const userlName = user.value.user_metadata.Last_Name;
const userFullName = userfName + " " + userlName;

console.log(user.value.user_metadata.First_Name);

async function signOut() {
  const { error } = await supabase.auth.signOut();

  navigateTo("/auth/login");
}
</script>

<template>
  <div class="min-h-screen flex justify-center items-center">
    <div class="flex flex-col gap-5">
      <p>Hi, my name is {{ userFullName }}</p>
      <button @click="signOut" class="text-red-400 underline">signout</button>
    </div>
  </div>
</template>
