<template>
  <div class="main-body">
    <div class="div-logo">
      <img alt="Vue logo" src="./assets/logo.png" width="110" height="100">
    </div>
    
    <TextAdventurerVue/>
  </div>
</template>

<script setup>
import TextAdventurerVue from "./IntroduceTextAdventurer/MainPage.vue";
</script>

<style scope>
#app {
  text-align: center;
  line-height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

body{
  background-color: #dff7e5;
}

/* Mobile */
@media (max-width:400px){
  .main-body{
    width: 360px;
  }
}

/* PC */
@media (min-width:600px){
  .main-body{
    width: 1300px;
  }
  .div-logo{
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
  }
}

</style>
