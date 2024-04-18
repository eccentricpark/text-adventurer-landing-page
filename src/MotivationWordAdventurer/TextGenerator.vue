<template>
  <div class="inner">
    <div class="void-area"></div>
    <h2>🧭 혁신적인 나침반, 언어 생성기</h2>
    <div>
      <img class="literacy-image" alt="literacy" src="../assets/prototype.png">
    </div>
    <div class="text-article">
      <p>
        언어 생성기, 말글탐험대의 비밀 무기를 소개합니다.<br>
        아이들이 이해하기 어려운 단어와 문장을 쉽고 재미있게 해석해줍니다.<br>
        어휘와 숙어의 이해를 통해 문해력의 보물을 찾아가는 여정이 훨씬 더 쉬워집니다.<br>
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