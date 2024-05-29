<template>
  <div>
    <router-view/>
  </div>
</template>

<script setup>
</script>
<style>
#app {
  text-align: center;
  line-height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

body{
  background-color: #dff7e5;
}

.text-red{
  color: #f00;
}

.text-blue{
  color: #00f;
}

.text-bold{
  font-weight: 900;
}


/* Mobile */
@media (max-width:400px){
  h1{
    font-size: 18pt;
  }

  h2{
    font-size: 12pt;
  }
  .main-body{
    width: 360px;
  }

  .big{
    font-size: 14pt;
  }
}

/* PC */
@media (min-width:600px){
  h1{
    font-size: 36pt;
  }

  h2{
    font-size: 25pt;
  }
  .main-body{
    width: 1300px;
  }

  h3{
    font-size: 18pt;
  }

  .big{
    font-size: 40pt;
  }
}

</style>
