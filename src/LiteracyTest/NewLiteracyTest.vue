<template>
  <div class="inner">
    <div class="void-area"></div>
    <div>
      <img class="literacy-image" alt="literacy" src="../assets/literacy_test/literacy_test.png">
    </div>
    <div class="text-article">
      <h3>혹시 당신의 아이도 문해력 부족으로 </h3>
      <h3>심각한 상황에 놓이지 않을까 걱정되시죠?</h3><br>

      <h3>당신을 위해 자녀의 문해력 테스트를 준비했습니다.</h3><br><br>
      
    </div>
    <div class="void-area"></div>
    <div class="void-area"></div>
    <div>
      <img class="literacy-image" alt="literacy" src="../assets/literacy_test/odg_thumnail.png">
    </div>
    <div class="text-article">
      <h3>
        실제로 교원그룹에서<br>
        초등학생 5,6학년 아이들을 데려와
      </h3>
      <h3>문해력 테스트를 실시한 영상이 있는데요.</h3><br>

      <h3>저희는 다양한 문헌과 수많은 전문가들의 의견,</h3>
      <h3>
        이 테스트 영상을 기반으로 삼아 새롭게<br>
        문해력 테스트를 개발했습니다.
      </h3>
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
    border-radius: 0.7rem;
  }

  h3{
    font-size: 10pt;
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
    width: 800px;
    border-radius: 0.7rem;
  }
  
  p{
    font-size: 14pt;
  }
}

</style>