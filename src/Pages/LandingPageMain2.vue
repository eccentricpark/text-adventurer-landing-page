<template>
  <div class="main-body">
    <TabbarVue/>
    <LiteracyTest2Vue/>
    <!-- <TextAdventurerVue/> -->
  </div>
</template>

<script setup>
import LiteracyTest2Vue from "../LiteracyTest2/MainPage.vue";
import TabbarVue from "../Tabbar/TabbarMainpage.vue";
</script>


<style>
.div-row{
  display: flex;
  flex-direction: row;
}

.div-column{
  display: flex;
  flex-direction: column;
}
</style>

<style scope>
/* Mobile */
@media (max-width:400px){
}

/* PC */
@media (min-width:600px){
}

</style>
