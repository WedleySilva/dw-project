<script></script>
<template>
  <h1>componente</h1>
</template>
<style>
.article {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
}

.container {
  width: 1150px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.container .card {
  position: relative;
  padding: 10px;
  width: 300px;
  background: linear-gradient(90deg, #993399, #341933);
  margin: 20px;
  border: 1 solid #993399;
  border-radius: 20px;
  overflow: hidden;
  transition: 0.5s;
  text-align: center;
}

.container .card .img {
  transition: 0.5s;
}

.container .card .tittle {
  font-size: 2rem;
}

.container .card .content {
  padding: 20px;
  text-align: center;
}

.container .card .content .conteudo {
  color: #666;
  transition: 0.5s;
}

.container .card .content .button {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  background: linear-gradient(90deg, #755bea, #ff72c0);
  color: #fff;
  border-radius: 40px;
  text-decoration: none;
  transition: 0.5s;
  outline: none;
  margin-top: 20px;
}

.container .card:hover {
  background: linear-gradient(90deg, #341933, #993399);
  color: #fff;
  margin-top: -30px;
  box-shadow: 2px 20px 25px #ff72c0;
}
</style>
