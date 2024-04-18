<template>
  <div class="inner">
    <h1>🌟 말글탐험대와 함께하는 대모험! 🌟</h1>
    <LiteracyIssueVue/>
    <SafeLiteracyVue/>
    <TextGeneratorVue/>
    <ChallengeJoinVue/>
    <StartAdventureVue/>
  </div>
</template>

<script setup>
import LiteracyIssueVue from "../LiteracyIssue.vue";
import SafeLiteracyVue from "../SafeLiteracy.vue";
import ChallengeJoinVue from "../ChallengeJoin.vue";
import TextGeneratorVue from "../TextGenerator.vue";
import StartAdventureVue from "../StartAdventure.vue";
</script>

<style scoped>

@media (max-width:600px){
  h1{
    font-size: 14pt;
  }

  .inner{
    width:inherit;
  }

}

@media (min-width:600px){
  h1{
    font-size: 36pt;
  }

  .inner{
    width:inherit;
  }

}

</style>