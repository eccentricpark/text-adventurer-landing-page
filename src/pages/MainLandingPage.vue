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
import LiteracyIssueVue from "../components/LiteracyIssue.vue";
import SafeLiteracyVue from "../components/SafeLiteracy.vue";
import ChallengeJoinVue from "../components/ChallengeJoin.vue";
import TextGeneratorVue from "../components/TextGenerator.vue";
import StartAdventureVue from "../components/StartAdventure.vue";
</script>

<style scoped>
h1{
  font-size: 36pt;
}

.inner{
  width:inherit;
}

</style>