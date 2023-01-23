<script setup>
defineProps(['goal'])
</script>

<template>
  <section class="ActivityCurrentGoal">
    <h2>Objectif en cours</h2>
    
    <p>{{ $t(goal.titleKey) }}</p>
    
    <form>
      <textarea placeholder="Partage ton avancé..."></textarea>
      <button>Pics</button>
      <button>Envoyer</button>
    </form>
  </section>
</template>