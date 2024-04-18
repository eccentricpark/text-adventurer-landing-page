<template>
  <div class="inner">
    <div class="void-area"></div>
    <h2>🚀 마주한 도전, 함께 넘어서다</h2>
    <div>
      <img class="literacy-image" alt="literacy" src="../assets/family.png">
    </div>
    <div class="text-article">
      <p>
        말글탐험대는 정보의 바다에서 아이들이 스스로 문제를 인지하고, <br>
        스스로 다양한 난관들을 용감히 넘어설 수 있도록 돕습니다. <br><br>
        함께라면 어떠한 도전도 극복할 수 있습니다.
      </p>
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
    height: 150px;
  }

  .literacy-image{
    width: 300px;
    height: 200px;
  }

  .text-article{
    margin: 10px;
  }

  h2{
    font-size: 20pt;
  }

  p{
    font-size: 14pt;
  }
}

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

  .literacy-image{
    width: 600px;
    height: 500px;
  }

  .text-article{
    margin: 10px;
  }

  h2{
    font-size: 30pt;
  }

  p{
    font-size: 14pt;
  }
}


</style>