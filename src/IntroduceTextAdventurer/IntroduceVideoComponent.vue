<template>
  <div class="inner">
    <div class="void-area"></div>
    <div>
      <video class="product-video" controls>
        <source src="../assets/video.mp4" type="video/mp4"/>
      </video>
    </div>
    <div class="text-article">
      <p>
        모르는 단어도 쉽게 이해할 수 있어요.<br>
      </p>
      <p>
        검색하기 귀찮죠?<br>
        클릭해서 빠르게 설치하세요!
      </p>
      <a href="https://chromewebstore.google.com/detail/%EB%A7%90%EA%B8%80%ED%83%90%ED%97%98%EB%8C%80/cpmppelifogbdfkijkfnkofmeibdmlia?hl=ko"><h3>말글탐험대 설치하러 가기</h3></a>
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

  .product-video{
    width: 300px;
  }

  .void-area{
    height: 150px;
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

  .product-video{
    width: 1000px;
  }
  
  .void-area{
    height: 150px;
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

  h3{
    font-size: 20pt;
  }

  p{
    font-size: 14pt;
  }
}

</style>