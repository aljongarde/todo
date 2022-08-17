<template>
  <div class="flex h-screen">

    <div class="flex-1 flex flex-col overflow-hidden">
      <IndexNavbar/>

      <main class="flex-1 overflow-x-hidden overflow-y-auto lg:relative">

          <RouterView></RouterView>
          <slot />    

      </main>

    </div>

  </div>
</template>

<script setup lang="ts">

import IndexNavbar from "../Navbars/IndexNavbar.vue";


</script>