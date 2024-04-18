<template>
  <div class="inner">
    <div class="void-area"></div>
    <div>
        <img class="literacy-image" alt="literacy" src="../assets/prototype.png">
    </div>
    <div class="text-article">
      <h3>말글탐험대</h3>
      <p>아이들을 위한 단어 설명 프로그램</p>
      <p>
        이해하기 어려운 단어를 설명하고<br>
        적절한 쉬운 단어로 변환해줘요.
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
    height: 40px;
  }
  
  .text-article{
    margin: 10px;
  }

  .literacy-image{
    width: 300px;
    height: 200px;
  }

  h2{
    font-size: 30pt;
  }

  p{
    font-size: 14pt;
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
  
  h2{
    font-size: 30pt;
  }

  h3{
    font-size: 20pt;
  }

  p{
    font-size: 14pt;
  }
}

</style>