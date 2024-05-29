<template>
  <div class="main-body">
    <TabbarVue/>
    <LiteracyTestVue/>
    <!-- <TextAdventurerVue/> -->
  </div>
</template>

<script setup>
import LiteracyTestVue from "../LiteracyTest/MainPage.vue";
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
