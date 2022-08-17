<template>

<div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
<form class="space-y-8 divide-y divide-gray-200">
    <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
      <div>
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">Profile</h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">This information will be displayed publicly so be careful what you share.</p>
        </div>

        <div class="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="email" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Email address </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input id="email" name="email" type="email" autocomplete="email" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="user-password" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Password </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input type="password" name="user-password" id="user-password" autocomplete="user-password" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="photo" class="block text-sm font-medium text-gray-700"> Photo </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <div class="flex items-center">
                <span class="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                  <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
                <button type="button" class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Change</button>
              </div>
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
            <label for="first-name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> First name </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="middle-name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Middle name </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input type="text" name="middle-name" id="middle-name" autocomplete="family-name" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="last-name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Last name </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="last-name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Gender </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2 flex align-middle">

                <input id="gender" name="gender" type="radio" value="MALE" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" checked/>
                <label for="gender" class="ml-3 block text-sm font-medium text-gray-700 mr-5"> Male </label>

                <input id="gender" name="gender" type="radio" value="FEMALE" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                <label for="gender" class="ml-3 block text-sm font-medium text-gray-700"> Female </label>
              

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