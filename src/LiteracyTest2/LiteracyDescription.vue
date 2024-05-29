<template>
  <div class="inner">
    <div class="void-area"></div>
    <div class="text-article">
      <h2>
        문해력이란 글을 읽고 이해하여<br>
        활용하는 능력인데요
      </h2><br><br>

      <h2>왜, 아이가 <span class="text-blue">휴대폰</span>을 좋아할까요?</h2>
      <h2>왜, 아이가 <span class="text-blue">게임</span>을 좋아할까요?</h2>
      <h2>왜, 아이가 <span class="text-red big">독서</span>와 <span class="text-red big">공부</span>는 싫어할까요?</h2><br>

      <h2>아이가 멍청해지는 이유</h2><br><br>
      <h2>바로 '<span class="text-red big">문해력</span>' 이 부족하여</h2>
      <h2>나타나는 문제입니다</h2><br>
      
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

  .big{
    font-size: 30pt;
  }
}

</style>