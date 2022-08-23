<template>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" @click="closeModal()">
  <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  -->
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div class="fixed z-10 inset-0 overflow-y-auto">
    <div class="flex items-end sm:items-center justify-center min-h-full p-4 sm:p-0">
      <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
      <form action="#" method="POST" @click.stop>
      <div class="shadow sm:rounded-md sm:overflow-hidden">
        <div class="bg-white py-6 px-4 space-y-6 sm:p-6">
          <div>
            <h3 class="text-lg leading-6 font-medium text-green-700">Add New Task</h3>
          </div>

          <div class="grid grid-cols-6 gap-6">

            <div class="col-span-6">
              <label for="task_name" class="block text-sm font-medium text-gray-700">Task name</label>
              <input v-model="task_name" type="text" name="task_name" id="task_name" autocomplete="task_name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            </div>

            <div class="col-span-6">
              <h5 class="text-lg leading-6 font-medium text-gray-900">Deadline of task</h5>
            </div>

            <div class="col-span-6 sm:col-span-6 lg:col-span-2">
              <label for="task_deadline_date" class="block text-sm font-medium text-gray-700">Date</label>
              <input v-model="task_deadline_date" type="date" name="task_deadline_date" id="task_deadline_date" autocomplete="task_deadline_date" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            </div>

            <div class="col-span-6 sm:col-span-3 lg:col-span-2">
              <label for="task_deadline_time" class="block text-sm font-medium text-gray-700">Time</label>
              <input v-model="task_deadline_time" type="time" name="task_deadline_time" id="task_deadline_time" autocomplete="task_deadline_time" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            </div>

          </div>
        </div>
        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button type="submit" class="bg-green-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Add</button>
        </div>
      </div>
    </form>

    </div>
  </div>
</div>
</template>

<script>
import { ref } from 'vue'

const open = ref(true)

export default{
  data(){
    return{
      task_name: '',
      task_deadline_time: '',
      task_deadline_date: ''
    }
  },
  methods: {
    closeModal: function(){
      this.$emit('close-modal');
      this.task_name = '';
      this.task_deadline_time = '';
      this.task_deadline_date = '';
    }
  }
}
</script>