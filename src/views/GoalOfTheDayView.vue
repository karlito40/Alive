<script setup>
import router from '../router'
import { goalOfTheDay } from '../fixtures';
import GoalOfTheDay from '../components/GoalOfTheDay.vue';


const goToNextPage = () => router.push({ name: 'activity' })
const skip = goToNextPage

function join () {
  // await backend...
  goToNextPage();
}
</script>

<template>
  <div class="GoalOfTheDayView">
    <GoalOfTheDay 
      :goal="goalOfTheDay"
      is-skippable
      @join="join"
      @skip="skip"
    />
  </div>
</template>
