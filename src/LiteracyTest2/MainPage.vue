<template>
  <div class="inner">
    <div class="inner">
      <div class="void-area"/>
      <h2><span class="text-red">우리 아이가 멍청해지고 있습니다.</span></h2>
      <h2>왜? 어째서? 뭐 때문에?</h2>
      <!-- <h1><span class="text-red">초등학교 저학년 학부모</span>님들!</h1> -->
      <div class="void-area"/>
      
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