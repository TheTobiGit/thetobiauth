<template>
  <div class="flex justify-center items-center min-h-screen">
    <form @submit.prevent="update" class="flex flex-col items-center gap-5">
      <h1 class="text-4xl">ONBOARD</h1>
      <div class="flex flex-col gap-3">
        <div class="flex gap-3 items-center">
          <label for="class">Class</label>
          <input
            type="text"
            name="class"
            id="class"
            class="border border-black w-30 p-1"
            v-model="klass"
            required
          />
        </div>
        <div class="flex gap-3 items-center">
          <label for="faculty">Faculty</label>
          <select
            class="border border-black w-30 p-1"
            name="faculty"
            id="faculty"
            required
          >
            <option selected disabled value="">choose</option>
            <option
              v-for="faculties in facultylist"
              :key="faculties"
              :value="faculties"
            >
              {{ faculties }}
            </option>
          </select>
        </div>
      </div>
      <button type="submit" class="outline w-20 text-white bg-black">
        Submit
      </button>
      <p class="text-red-600">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
export default {
  setup() {
    const supabase = useSupabaseClient();
    const user = useSupabaseUser();
    const errorMessage = ref(null);
    const facultylist = ["Nursing", "Business", "Engineering", "Software"];
    const klass = ref(null);

    async function update() {
      const { data, error } = await supabase.auth.updateUser({
        data: {
          class: klass.value,
          faculty: faculty.value,
        },
      });

      if (error) {
        errorMessage.value = error.message;
      }

      navigateTo("/");
    }

    return {
      facultylist,
      klass,
      supabase,
      update,
      errorMessage,
      user,
    };
  },
};
</script>
