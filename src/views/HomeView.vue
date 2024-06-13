<template>
  <button v-on:click="toggleStatus">
    <p v-if="purchased">Undo</p>
    <p v-else>Purchase</p>
  </button>
  <p>{{ message }}</p>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue';

export const purchase = () => {};

export default defineComponent({
  name: 'HomeView',
  setup() {
    const purchased = ref<boolean>(false);
    const message = ref<string>('Nothing happened yet');
    const toggleStatus = () => {
      if (!purchased.value) {
        const businessHours = [9, 18];
        const currentHour = new Date().getHours();
        const [open, close] = businessHours;
        const openBusiness = currentHour > open && currentHour < close;

        message.value = 'Purchase: ';
        message.value += openBusiness ? 'Success' : 'Error';
      } else {
        message.value = '';
      }
      purchased.value = !purchased.value;
    };

    return {
      purchased,
      message,
      toggleStatus,
    };
  },
});
</script>
