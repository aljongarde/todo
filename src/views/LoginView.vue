<template>

<div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h1 class="mt-6 text-center text-6xl tracking-tight font-bold text-green-900"><i class="bi bi-calendar-check-fill"></i></h1>
      <h2 class="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">Sign in to your account</h2>
      
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form @submit.prevent="loginUser" class="space-y-6" action="#" method="POST">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700"> Email address </label>
            <div class="mt-1">
              <input v-model="user_email" id="email" name="email" type="email" autocomplete="email" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
            <div class="mt-1">
              <input v-model="user_password" id="password" name="password" type="password" autocomplete="current-password" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
              <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
            </div>

            <div class="text-sm">
              <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
            </div>
          </div>

          <div>
            <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign in</button>
          </div>
        </form>

        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300" />
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500"> ToDo ?? 2022 </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default{
  data() {
    return{
      user_email : '',
      user_password : '',
    }
  },
  methods: {
    loginUser(){
      alert(this.user_email + " " + this.user_password);

      var form_credential = {
        email : this.user_email,
        password : this.user_password
      }

      /*
      axios.post('http://localhost:3000/user/login', form_credential)
            .then((res)=>{
                console.log(res);

                if(res.status == 201){
                this.user_email = "";
                this.user_password = "";

                form_credential = "";
                alert('Login successful!');

                //this.$router.push('/login');

                }
            })
            */
    }

  }
}

</script>
