<template>

<div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
<form @submit.prevent="handleSubmit" class="space-y-8 divide-y divide-gray-200">
    <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
      <div>
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">Profile</h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">This information will be displayed publicly so be careful what you share.</p>
        </div>

        <div class="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="user_email" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Email address </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input v-model="user_email" id="user_email" name="user_email" type="email" autocomplete="email" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="user_password" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Password </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input v-model="user_password" type="password" name="user_password" id="user_password" autocomplete="user-password" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="user_pic" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Profile picture </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input @change="onPicChange" id="user_pic" name="user_pic" type="file" autocomplete="email" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

        </div>
      </div>

      <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">Use a permanent address where you can receive mail.</p>
        </div>
        <div class="space-y-6 sm:space-y-5">
          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="user_fname" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> First name </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input v-model="user_fname" type="text" name="user_fname" id="user_fname" autocomplete="given-name" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="user_mname" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Middle name </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input v-model="user_mname" type="text" name="user_mname" id="user_mname" autocomplete="family-name" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="user_lname" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Last name </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input v-model="user_lname" type="text" name="user_lname" id="user_lname" autocomplete="family-name" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="user_bday" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Birthdate </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input v-model="user_bday" type="date" name="user_bday" id="user_mname" autocomplete="family-name" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="last-name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Gender </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2 flex align-middle">

                <input @change="onGenderChange('MALE')" id="user_gender" name="user_gender" type="radio" value="MALE" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" checked/>
                <label for="user_gender" class="ml-3 block text-sm font-medium text-gray-700 mr-5"> Male </label>

                <input @change="onGenderChange('FEMALE')" id="user_gender" name="user_gender" type="radio" value="FEMALE" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                <label for="user_gender" class="ml-3 block text-sm font-medium text-gray-700"> Female </label>
              

            </div>
          </div>

          

        </div>
      </div>

    </div>

    <div class="pt-5">
      <div class="flex justify-end">
        <button type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Clear fields</button>
        <button type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
      </div>
    </div>
  </form>
  </div>

</template>

<script>

import axios from 'axios'

export default{
  name: 'RegisterView',
  data() {
    return{
      user_pic: '',
      user_email: '',
      user_password: '',
      user_fname: '',
      user_mname: '',
      user_lname: '',
      user_bday: '',
      user_gender: 'MALE'
    }
  },
  methods: {
    handleSubmit(){
      const today = new Date();
      const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date +' '+ time;

      /*
      const data = {
        first_name : this.user_fname,
        middle_name : this.user_mname,
        last_name : this.user_lname,
        bday : this.user_bday,
        gender : this.user_gender,
        email : this.user_email,
        password : this.user_password,
        profile_pic : this.user_pic,
        datetime_added : dateTime        
      };
      */

      var form_data = {
        fname : this.user_fname,
        mname : this.user_mname,
        lname : this.user_lname,
        bday : this.user_bday,
        gender : this.user_gender,
        email : this.user_email,
        password : this.user_password,
        profile_pic : this.user_pic,
        datetime_added : dateTime      
      };

      axios.post('http://localhost:3000/user/register', form_data)
            .then((res)=>{
                console.log(res);

                if(res.status == 201){
                this.first_name = "";
                this.middle_name = "";
                this.last_name = "";
                this.bday = "";
                this.gender = "";
                this.email = "";
                this.password = "";
                this.pic_file = "";

                form_data = "";
                alert('Registration successful!');

                }
            })
        

      /*
      axios.post('http://localhost:3000/api/user/register', data)
      .then(
        res => {
          console.log(res)
        }
      ).catch(
        err => {
          console.log(err)
        }
      )
      */

    },
    onPicChange(e){
      //alert(e.target.files[0].name)
      this.user_pic = e.target.files[0].name;
    },
    onGenderChange(gender){
      this.user_gender = gender;
    }
  }
}

</script>