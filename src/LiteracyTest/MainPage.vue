<template>
  <div class="inner">
    <div class="inner">
      <div class="void-area"/>
      <h1><span class="text-red">초등학교 저학년 학부모</span>님들!</h1>
      <div class="void-area"/>
      <h2>혹시 아래처럼 아이에게 잔소리 하십니까?</h2>
      <div class="void-area"/>
      <div class="void-area"/>
    </div>

    <ParentPainPointVue/>
    <NadultContentionVue/>
    <LiteracyDescriptionVue/>
    <LiteracyReasonVue/>
    <LiteracyExperienceVue/>
    <NewLiteracyTestVue/>
    <ChallengeNowVue/>
    
  </div>
</template>

<script setup>
import ParentPainPointVue from './ParentPainPoint';
import NadultContentionVue from './NadultContention.vue';
import LiteracyDescriptionVue from './LiteracyDescription.vue';
import LiteracyReasonVue from './LiteracyReason.vue';
import LiteracyExperienceVue from './LiteracyExperience.vue'
import NewLiteracyTestVue from './NewLiteracyTest.vue';
import ChallengeNowVue from './ChallengeNow.vue';

</script>

<style scoped>
@media (max-width:600px){
  .void-area{
    height: 75px;
  }

  .inner{
    width:inherit;
  }
}

@media (min-width:600px){
  .void-area{
    height: 150px;
  }

  .inner{
    width:inherit;
  }

  .weight-bold{
    font-weight: 900;
  }
}

</style>