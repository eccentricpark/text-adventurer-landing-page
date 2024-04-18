<template>
  <div>
    <h1>문해력을 키우는데 아직도 문제집?</h1>
    <IntroduceComponentVue/>
    <IntroduceVideoComponentVue/>
  </div>
</template>

<script setup>
import IntroduceComponentVue from './IntroduceComponent.vue'
import IntroduceVideoComponentVue from './IntroduceVideoComponent.vue'
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