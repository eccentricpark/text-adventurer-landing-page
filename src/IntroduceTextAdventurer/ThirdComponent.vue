<template>
  <div class="inner">
    <div class="void-area"></div>
    <h2>제목을 입력하세요.</h2>
    <div>
        <img class="literacy-image" alt="literacy" src="../assets/literacy.png">
    </div>
    <div class="text-article">
      <p>
        내용을 입력하세요.
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

  p{
    font-size: 14pt;
  }
}

</style>