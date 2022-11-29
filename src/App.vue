<template>
  <AppTemplate :options="options">
    <router-view />
  </AppTemplate>
</template>

<script>
import AppTemplate from '../appTemplate/AppTemplate.vue'
export default {
  name: 'App',
  components: {
    AppTemplate
  },
  data(){
    return {
      options: {
        title: 'My application',
        author: 'Maxime Moreillon',
        login_url: 'https://api.users.maximemoreillon.com/v2/auth/login',
        identification_url: 'https://api.users.maximemoreillon.com/v2/users/self',
        // logo: 'sampleApp/assets/logo.png' 
      }
    }
  },
  methods: {
    userChangedCallback({user,jwt}) {
      // Set Axios headers
      // This seems to interfere with the template's axios
      this.axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`
      // Store user info in Pinia
      
    }
  }
}

</script>
