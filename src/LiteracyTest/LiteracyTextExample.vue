<template>
  <div class="inner">
    <div class="void-area"></div>
    <h2>문해력을 측정할 수 있을까?</h2>
    <div class="image-area">
      <img class="literacy-image" alt="literacy" src="../assets/literacy_test/literacy_test_example1.png">
      <img class="literacy-image" alt="literacy" src="../assets/literacy_test/literacy_test_example2.png">
    </div>
    <div class="text-article">
      <p>
        밀리의서재, EBS 당신의 문해력처럼<br>
        문해력 테스트를 제공해주는 곳이 존재합니다.<br><br>

        그러나, 이 테스트들은 <span class="text-red">실질 문해력 측정이 불가능</span>합니다.<br>
        고정된 문제와 족보로 인해, 아이들의 실질 문해력 파악이 어렵습니다.
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
    height: 75px;
  }
  
  .text-article{
    margin: 10px;
  }

  .literacy-image{
    width: 300px;
    height: 200px;
    margin: 5px;
  }

  .image-area{
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2{
    font-size: 20pt;
  }

  p{
    font-size: 12pt;
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
    margin: 5px;
  }

  .image-area{
    margin: 10px;
    align-items: center;
  }

  p{
    font-size: 14pt;
  }
}

</style>