<template>
  <div class="inner">
    <div class="void-area"></div>
    <div>
        <img class="literacy-image" alt="literacy" src="../assets/Negative_child.png">
    </div>
    <div class="text-article">
      <h3>저도 대학 입학 전까지 공부를 많이 싫어했습니다.</h3>
      <h3>공부가 싫었고 책이 싫어 스마트폰만 보다보니</h3>
      <h3>지방대에 입학하였는데요.</h3><br>

      <h3>이후, AI에 관심이 생겨 공부하기 시작했습니다.</h3>
      <h3>그러나, 단어나 문장이 이해되지 않아</h3>
      <h3>너무 어렵고 힘들었습니다.</h3><br>

      <h3>AI만큼은 포기하고 싶지 않았던 저는</h3>
      <h3>아이들이 볼만한 만화로 시작하여,</h3>
      <h3>모르는 단어나 문장을 찾아</h3>
      <h3>
        나 자신의 수준에서 이해하기 쉽도록<br>
        학습해 나갔습니다.
      </h3><br>

      <h3>그러자, 관심사 외 다른 과목에서도 </h3>
      <h3>이해력과 활용력이 올라가니</h3>
      <h3>
        전액 장학금을 받을 수 있을 정도로<br>
        학습 능력이 대폭 증가했습니다.
      </h3><br>

      <h3>많은 전문가들도 문해력을 강조합니다</h3>
      <h3>때문에, 문해력이 향상되면 </h3>
      <h3>
        아이들은 학습의 즐거움을 찾고<br>
        성적도 자연스럽게 올라갑니다.
      </h3>
      <br><br>
      <h2>아이가 멍청해지길 원치 않는다면</h2>
      <h2><span class="text-red big">문해력</span>부터 해결해야 합니다</h2>
    </div>
    <div class="void-area"></div>
  </div>
</template>

<script setup>
</script>

<style scoped>

@media (max-width:600px){
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

  h3{
    font-size: 11pt;
  }
}


/*PC */
@media (min-width:600px){
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
}

</style>