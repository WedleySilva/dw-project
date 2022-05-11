<script>
</script>

<template>
  <header class="header">
    <div class="logo-hearder">LOGO</div>
    <div class="nav-header box">
      <ul>
        <li class="list">
          <a href="#">
            <span class="icon">
              <img src="../assets/image/home.svg" height="25px" width="25px"
            /></span>
            <span class="text">Principal</span>
          </a>
        </li>
        <li class="list">
          <a href="#">
            <span class="icon">
              <img src="../assets/image/person.svg" height="25px" width="25px"
            /></span>
            <span class="text">Perfil</span>
          </a>
        </li>
        <li class="list">
          <a href="#">
            <span class="icon"
              ><img
                src="../assets/image/chatbubble.svg"
                height="25px"
                width="25px"
            /></span>
            <span class="text">Mensagens</span>
          </a>
        </li>
        <li class="list">
          <a href="#">
            <span class="icon"
              ><img src="../assets/image/layers.svg" height="25px" width="25px"
            /></span>
            <span class="text">Categorias</span>
          </a>
        </li>
        <li class="list">
          <a href="#">
            <span class="icon">
              <img
                src="../assets/image/settings.svg"
                height="25px"
                width="25px"
            /></span>
            <span class="text">Configurações</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="pesquisa-header">Pesquisa</div>
    <div class="login-header">Login</div>
  </header>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900");

body {
  background-color: black;
  margin: 0;
  color: white;
  width: 100%;
}

header {
  margin-bottom: 60px;
}

.header {
  border: 1px sod #ad47ac;
  box-shadow: 3px 3px 3px 1px #ad47ac;
  height: 125px;
  background-color: #341933;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 12px;
  color: white;
}

.nav-header {
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 50%;
}

.nav-header ul {
  display: flex;
}

.nav-header li {
  list-style-type: none;
  position: relative;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  font-weight: 500;
}

.nav-header ul li a .icon {
  position: relative;
  display: block;
  line-height: 40px;
  color: #341933;
}

.nav-header ul li a .text {
  color: white;
}

.box {
  background-color: #ad47ac;
  box-shadow: 3px 3px 3px 1px white;
}

a{
  text-decoration: none;
}
</style>
