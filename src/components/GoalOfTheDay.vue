<script setup>
defineProps({
  goal: {
    type: Object,
    required: true,
  },
  isSkippable: Boolean
})


const emit = defineEmits(['join', 'skip'])
</script>

<template>
  <div class="GoalOfTheDay">
    <h1>Objectif du jour</h1>

    <div class="goal">
      {{ $t(goal.titleKey) }}
    </div>

    <div class="options">
      <button @click="$emit('join')">Participer</button>
      <button
        v-if="isSkippable"
        @click="$emit('skip')"
      >
        Passer
      </button>
    </div>
  </div>
</template>
