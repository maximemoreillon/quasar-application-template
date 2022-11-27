<template>
    <q-form @submit="login()" class="q-gutter-md">
        <q-card-section>
            <q-input v-model="credentials.username" label="Username"/>
            <q-input v-model="credentials.password" label="password" type="password" />
        </q-card-section>
        <q-card-actions align="center">
            <q-btn label="Login" icon="login" type="submit" color="primary" :loading="loading"/>
        </q-card-actions>
    </q-form>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { state, actions } from './templateStore'

import axios from 'axios'
import VueCookies from 'vue-cookies'


const credentials = reactive({
    identifier: '',
    password: '',
})

const snackbar = reactive({
    text: '',
    show: false,
    color: 'error'
})


const logging_in = ref(false)

const login = async () => {
    // Exchange credentials for JWT

    const { login_url } = state.options

    snackbar.show = false
    logging_in.value = true

    try {
        const { data } = await axios.post(login_url, credentials)
        const { jwt } = data

        // TODO: Store jwt in either cookies or localstorage according to options
        // TODO: secure, samesite, expires etc
        VueCookies.set('jwt', jwt)

        await actions.getUser()

    } catch (error) {

        snackbar.show = true
        snackbar.color = 'error'

        if (error.response) {
            snackbar.text = error.response.data
            console.error(error.response.data)
        }
        else {
            snackbar.text = `Error while logging in`
            console.error(error)
        }

    } finally {
        logging_in.value = false
    }


}

</script>