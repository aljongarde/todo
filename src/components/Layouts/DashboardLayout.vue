<template>
  <div class="flex min-h-screen">
    <div class="w-64 bg-gray-50 border-r border-gray-200">
      <DashboardSidebar/>
    </div>

    <div class="flex-1">
      <DashboardNavbar/>

      <p>main content</p>
    </div>
  </div>
</template>

<script setup lang="ts">

import DashboardNavbar from "../Navbars/DashboardNavbar.vue";
import DashboardSidebar from "../Navbars/DashboardSidebar.vue";


</script>