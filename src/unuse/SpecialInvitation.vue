<template>
  <div class="inner">
    <div class="void-area"></div>
    <h2>⏳ 한정된 시간, 특별한 초대</h2>
    <div>
        <img alt="literacy" src="../assets/literacy.png" width="600" height="400">
    </div>
    <div>
      <p>
        지금이 바로 그 문해력을 찾을 수 있는 기회입니다!<br>
        말글탐험대의 문은 잠시 동안만 열려 있습니다.<br>
        기회를 놓치지 마세요.<br>
        지금 바로 탐험대에 가입하고, 아이가 문해력이라는<br>
        중요한 보물을 찾을 수 있도록 도와주세요<br>
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