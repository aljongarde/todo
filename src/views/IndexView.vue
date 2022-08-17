<template>
    
      <div class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center">
        
        <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h1 class="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl sm:tracking-tight md:text-6xl md:tracking-tight lg:text-5xl lg:tracking-tight xl:text-6xl xl:tracking-tight">
            <span class="block xl:inline text-gray-600">Monitor your task</span>
            {{ ' ' }}
            <span class="block text-green-700 xl:inline">efficiently</span>
          </h1>
          <p class="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">Schedule your tasks anytime, anywhere.</p>
          
          <div class="mt-10 sm:flex sm:justify-center lg:justify-center">
            
            <div class="rounded-md shadow" @click="gotoDashboard">
              <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-400 md:py-4 md:text-lg md:px-10"> Get started </a>
            </div>
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"> Live demo </a>
            </div>
          </div>
        </div>
        
      </div>
      <div class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <img class="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />
      </div>
</template>

<script>

export default{

methods:{
  gotoDashboard(){
    this.$router.push('Home');
  }
}

}



</script>
