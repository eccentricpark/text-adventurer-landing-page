<template>
  <div class="div-row inner">
    <div class="tab-bar-logo">
      <router-link to="/">
        <img class="logo" alt="Vue logo" src="../assets/logo.png">
      </router-link>
    </div>
    <div class="tab-bar-navigation">
      <!-- <div class="tab-bar-item">
        <router-link to="/"><button class="tab-bar-button">문해력?</button></router-link>
      </div>
      <div class="tab-bar-item">
        <router-link to="/2"><button class="tab-bar-button">서비스 소개</button></router-link>
      </div> -->
    </div>
    
  </div>
</template>

<script setup>
</script>

<style scoped>
.router-link-span {
  cursor: pointer; /* 마우스 커서 모양 변경 */
  text-decoration: none; /* 텍스트 밑줄 제거 */
  color: inherit; /* 부모 요소의 색상 상속 */
}


/* 모바일 */
@media(max-width:600px){
  .logo{
    width:50px;
  }
}

/* PC */
@media(min-width:600px){
  .logo{
    width:110px;
  }
  .inner{
    width: inherit;
    justify-content: space-between;
    align-items: center;
  }

  .tab-bar-navigation{
    width: 500px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .tab-bar-logo{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .tab-bar-item{
    width: auto;
    height: auto;
  }

  .tab-bar-button{
    background-color: #dff7e5;
    border:none;
    font-size: 13pt;
    cursor: pointer;
    height: 60px;
  }

  router-link{
    cursor:pointer;
  }

  router-link:hover{
    cursor:crosshair;
  }
}
</style>