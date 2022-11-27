<template>
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="drawer = !drawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <q-btn icon="logout" @click="logout()" />

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      bordered >

      <slot name="nav"></slot>

    </q-drawer>

    <q-page-container>
      <slot></slot>
    </q-page-container>
    
</template>

<script setup>
import { ref, useSlots, computed } from 'vue'
import { state, actions } from './templateStore'

const slots = useSlots()
const drawer = ref(false)
const { logout } = actions

const props = defineProps({
  options: { type: Object }
})

const navExists = computed(() => {
  return state.options.nav || slots.nav()[0].children.length
})

</script>

<style>
.header_logo {
  max-height: 2.5em;
  object-fit: scale-down;
}

.rotating_logo {
  animation-name: rotating_logo;
  animation-duration: 60s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
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