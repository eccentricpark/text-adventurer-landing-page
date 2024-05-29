<template>
  <div class="inner">
    <div class="void-area"></div>
    <div>
      <img class="literacy-image" alt="literacy" src="../assets/literacy_test/nadult.png">
    </div>
    <div class="text-article">
      <h2>유튜브 너덜트 사건을 아시나요?</h2>
      <h3><span class="text-blue">'모집인원 0명'</span></h3><br>
      <h3>사회적 이슈로 떠오르고 있는 이것</h3><br><br>
      <h3><span class="text-red big">문.해.력.</span>입니다</h3><br><br>

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

  .big{
    font-size: 18pt;
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
    width: 600px;
    height: 400px;
  }

  .big{
    font-size: 30pt;
  }
}

</style>