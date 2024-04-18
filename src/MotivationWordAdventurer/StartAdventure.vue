<template>
  <div class="inner">
    <div class="void-area"></div>
    <h2>🚩 지금 탐험을 시작하세요!</h2>
    <div>
      <img class="literacy-image" alt="literacy" src="../assets/happy_child.png">
    </div>
    <div class="text-article">
      <p>
        아이의 문해력이라는 잃어버린 보물을 찾기 위한 대모험에 지금 바로 동참하세요. <br>
      </p>
      <h1><a href="https://chromewebstore.google.com/detail/%EB%A7%90%EA%B8%80%ED%83%90%ED%97%98%EB%8C%80/cpmppelifogbdfkijkfnkofmeibdmlia?hl=ko&authuser=0" target="_blank">[탐험대 가입하기]</a></h1>
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
    height: 400px;
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