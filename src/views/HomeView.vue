<template>
  <button v-on:click="toggleStatus">
    <p v-if="status">Hide missions</p>
    <p v-else>Show missions</p>
  </button>

  <table v-show="status">
    <thead>
      <tr>
        <th>ID</th>
        <th>Location</th>
        <th>Coordinates</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="mission in missions" :key="mission.id">
        <td>{{ mission.id }}</td>
        <td>{{ mission.location }}</td>
        <td>{{ mission.coor }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue';

export interface Mission {
  id: number;
  location: string;
  coor: string;
}

export const fetchMissions = async (): Promise<Mission[]> => {
  const response = await fetch('http://localhost:3000/missions');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data: Mission[] = await response.json();
  return data;
};

export default defineComponent({
  name: 'HomeView',
  setup() {
    // Show or hide BUTTON
    const status = ref<boolean>(true);

    const toggleStatus = () => {
      status.value = !status.value;
    };

    const missions = ref<Mission[]>([]);

    const loadMissions = async () => {
      try {
        missions.value = await fetchMissions();
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    onMounted(() => {
      loadMissions();
    });

    const statusMessage = computed(() => {
      return status.value ? 'Status is true' : 'Status is false';
    });

    return {
      status,
      toggleStatus,
      missions,
      statusMessage,
    };
  },
});
</script>
