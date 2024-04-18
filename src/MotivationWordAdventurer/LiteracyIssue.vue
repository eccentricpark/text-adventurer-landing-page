<template>
  <div class="inner">
    <div class="void-area"></div>
    <h2>
      당신의 자녀의 문해력, 정말 안전한가요?
    </h2>
    <div class="div-image">
      <div class="div-column">
        <img class="literacy-image" alt="literacy" src="https://img.youtube.com/vi/hLfwEP7ZyvQ/sddefault.jpg" width="600" height="300">
        <h3><a href="https://www.youtube.com/watch?v=hLfwEP7ZyvQ" target="_blank">유퀴즈 온 더 블럭(조병영 교수님 출연)</a></h3>
      </div>
      <div class="div-column">
        <img class="literacy-image" alt="literacy" src="https://img.youtube.com/vi/uZJGya0XBe8/sddefault.jpg" width="600" height="300">
        <h3><a href="https://www.youtube.com/watch?v=uZJGya0XBe8" target="_blank">EBS 당신의 문해력</a></h3>
      </div>
    </div>
    <div class="text-article">
      <p>
        최근 대한민국에서 문해력 논란이 발생하고 있는데요.<br>
        단어의 의미를 몰라 맥락을 파악 못하거나<br>
        글이 길어 제대로 읽지 않고 마음대로 해석하는 등 다양한 문제점들이 나오고 있어요.<br>
      </p>
    </div>
    <div class="void-area"></div>
  </div>
</template>

<script setup>
</script>

<style scoped>

@media (max-width:600px){
  .div-image{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .div-column{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

  h2{
    font-size: 20pt;
  }

  .text-article{
    margin: 10px;
  }

  p{
    font-size: 14pt;
  }
}

@media (min-width:600px){
  .div-image{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .div-column{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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