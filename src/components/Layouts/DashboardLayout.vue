<template>
  <div class="flex min-h-screen">
    <div class="w-64 bg-gray-50 border-r border-gray-200">
      <DashboardSidebar/>
    </div>

    <div class="flex-1">
      <DashboardNavbar/>

      <div class="min-h-full">
        <RouterView></RouterView>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">

import DashboardNavbar from "../Navbars/DashboardNavbar.vue";
import DashboardSidebar from "../Navbars/DashboardSidebar.vue";
import DashboardView from "../../views/DashboardView.vue";


</script>