<template>
  <div class="inner">
    <div class="void-area"></div>
    <h1>문해력이 왜 중요할까요?</h1>
    <br>
    <div class="text-article">
      <h2>문해력을 키우면</h2><br>
      <h2>정보의 바다 속에서,</h2>
      <h2>옳고 그름을 판별할 수 있고</h2><br>
      <h2>거짓 정보에 쉽게 현혹되지 않으며,</h2><br>
      <h2>어떤 분야든 학습을 수월하게</h2>
      <h2>진행할 수 있습니다.</h2>
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
    width: 600px;
    height: 400px;
  }
  
}

</style>