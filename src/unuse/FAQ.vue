<template>
  <div class="inner">
    <div class="void-area"></div>
    <h2>자주 묻는 질문</h2>
    <div>
      <p>
        제품과 서비스에 대한 일반적인 질문과<br>
        답변을 제공하여 사용자의 궁금증을 해소합니다.
      </p>
    </div>
    <div class="void-area"></div>
  </div>
</template>

<script setup>
</script>

<style scoped>

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

h2{
  font-size: 30pt;
}

p{
  font-size: 14pt;
}
</style>