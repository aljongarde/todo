<template>
  <div>
    
    <DashboardSidebar/>

    <div class="md:pl-64 flex flex-col flex-1">
      
      <DashboardNavbar/>

      <main class="p-5">
        
        <RouterView></RouterView>
        
      </main>

    </div>
  </div>
</template>

<script>
import DashboardNavbar from "../Navbars/DashboardNavbar.vue";
import DashboardSidebar from "../Navbars/DashboardSidebar.vue";

export default{
  components: {
    DashboardNavbar,
    DashboardSidebar
  }
}

</script>
