<template>
    <q-page-container>
        <q-page padding class="row items-center justify-center">

            <q-card class="my-card" >
                <q-card-section>
                    <img 
                        class="logo"
                        :class="{'rotating_logo': !state.options.logo}"
                        :src="state.options.logo || 'https://cdn.maximemoreillon.com/logo/thick/logo.png'">
                </q-card-section>
                <q-card-section class="text-center">
                    <div class="text-h6">{{ state.options.title}}</div>
                    <AuthenticatingProgress v-if="state.authenticating" />
                    <LoginForm v-else-if="!state.user" />
                </q-card-section>
            </q-card>
        </q-page>
    </q-page-container>
    
</template>
<script setup>
import { state, actions } from './templateStore'

import LoginForm from './LoginForm.vue'
import AuthenticatingProgress from './AuthenticatingProgress.vue'

const { getUser } = actions

getUser()

</script>

<style scoped>
.main {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

<style scoped>
.logo{
    max-width: 30vmin;
    max-height: 30vmin;
    object-fit: contain;
}
@keyframes rotating_logo {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>