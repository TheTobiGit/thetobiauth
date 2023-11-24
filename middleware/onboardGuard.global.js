export default defineNuxtRouteMiddleware((to, _from) => {
  const user = useSupabaseUser()
  const userClass = user.value?.user_metadata?.class;

    console.log(userClass);

  if (to.path === '/onboard' && userClass) {
    return navigateTo('/')
  }
})
