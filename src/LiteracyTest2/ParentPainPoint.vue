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
      <h2>당신의 잔소리 때문입니다.</h2>
      <br><br>
      <h2>아니라고요?</h2>
      <h2>자신 있게 말할 수 있습니까?</h2>
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