<template>
  <div class="inner">
    <div class="void-area"></div>
    <div class="text-article">
      <h2>당신의 아이는 계속 위험해지고 있지만</h2>
      <h2>그렇다고 서두를 필요 없습니다.</h2>
      <h2>
        <a href="https://9nn6yrf3ch9.typeform.com/to/ogczGiz5">
          <button class="button-start-test">
           <span class="text-red">아이 문해력 테스트 시작하기</span>
          </button>
        </a>
      </h2>
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

  .button-start-test{
    width: 280px;
    height: 70px;
    border: 3px solid #000;
    border-radius: 0.45rem;
    background-color: #dff7e5;
    font-size: 15pt;
    font-weight: 700;
    
  }

  .button-start-test:active{
    background-color: #000;
    color: #fff;
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

  .button-start-test{
    width: 500px;
    height: 100px;
    border: 4px solid #000;
    border-radius: 0.65rem;
    background-color: #dff7e5;
    font-size: 25pt;
    font-weight: 700;
    
  }

  .button-start-test:active{
    background-color: #000;
    color: #fff;
  }

  .big{
    font-size: 35pt;
  }
  
  p{
    font-size: 14pt;
  }
}

</style>