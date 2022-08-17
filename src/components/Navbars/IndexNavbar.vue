<template>
    <div class="bg-green-500 text-gray-100 py-3.5 px-6 shadow md:flex justify-between items-center">

        <div class="flex items-center cursor-pointer">
            <span class="text-green-300 text-xl mr-1">
                <i class="bi bi-calendar-check-fill"></i>
            </span>

            <h1 class="text-xl">ToDo</h1>
        </div>

        <span @click="MenuOpen()" class="absolute md:hidden right-6 top-1.5 cursor-pointer text-4xl">
            <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"></i>
        </span>

        <ul class="md:flex md:items-center md:px-0 px-10 md:pb-0 pb-10 md:static absolute md:w-auto w-full top-14 duration-500 ease-in" :class="[open ? 'left-0' : 'left-[-100%]']">
            <router-link to="/Index">
            <li class="md:mx-4 md:my-0 my-6">
                <a href="#" class="font-sm hover:text-green-900">Home</a>
            </li>
            </router-link>

            <router-link to="/Register">
            <li class="md:mx-4 md:my-0 my-6">
                <a href="#" class="font-sm hover:text-green-900">Sign up</a>
            </li>
            </router-link>

            <router-link to="/Login">
                <button class="bg-green-700 hover:bg-green-400 duration-300 font-sm text-white rounded py-1.5 px-4">
                Login
                </button>
            </router-link>
            
        </ul>



    </div>
</template>

<script>

import { ref } from '@vue/reactivity';

export default{
    
    setup(){
        let open = ref(false)

        function MenuOpen(){
            open.value = !open.value
        }

        return{open,MenuOpen}
    }

    

}
</script>
