<template>
  <div class="inner">
    <div class="void-area"></div>
    <div>
      <img class="literacy-image" alt="literacy" src="../assets/literacy_test/painpoint1.png">
    </div>
    <div>
      <img class="literacy-image" alt="literacy" src="../assets/literacy_test/painpoint2.png">
    </div>
    <div>
      <img class="literacy-image" alt="literacy" src="../assets/literacy_test/painpoint3.png">
    </div>
    <div class="text-article">
      <h2>혹시 <span class="text-red big">뜨.끔.</span>하셨나요?</h2>
      <br>
      <h2>왜 잔소리로 해결 안될까요?</h2>
      <br><br>
      <h2>당장 <span class="text-red big">이것</span>부터 해결해야 합니다</h2>
    </div>
    <div class="void-area"></div>
  </div>
</template>

<script setup>
</script>

<style scoped>

@media (max-width:600px){
  .div-row{
    display: flex;
    flex-direction: row;
  }

  .div-column{
    display: flex;
    flex-direction: column;
  }

  .inner{
    width:inherit;
  }

  .void-area{
    height: 75px;
  }
  
  .text-article{
    margin: 10px;
  }

  .literacy-image{
    width: 300px;
    height: 200px;
  }

}


/*PC */
@media (min-width:600px){
  .div-row{
    display: flex;
    flex-direction: row;
  }

  .div-column{
    display: flex;
    flex-direction: column;
  }

  .inner{
    width:inherit;
  }

  .void-area{
    height: 150px;
  }

  .text-article{
    margin: 10px;
  }

  .literacy-image{
    width: 1000px;
  }
}

</style>