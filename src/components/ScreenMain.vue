<script></script>

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
            <span class="text perfil">Perfil</span>
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

    <div class="search-box">
      <input type="text" class="search-txt" placeholder="Pesquisar" />
      <a href="#" class="search-btn"
        ><i class="fas fa-search"
          ><img
            src="../assets/image/settings.svg"
            height="25px"
            width="25px" /></i
        ></a>
    </div>
    <div class="login-header">
      <a href="#">Login</a>
    </div>
  </header>

  <article><h1>Article</h1></article>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900");

body {
  background-color: black;
  margin: 0;
  color: white;
  width: 100%;
  text-transform: uppercase;
  font-family: "Yeseva One";
}

a {
  text-decoration: none;
}

header {
  margin-bottom: 60px;
}

.header {
  border: 1px sod #ad47ac;
  box-shadow: 3px 3px 3px 1px #ad47ac;
  height: 125px;
  background: linear-gradient(90deg, #993399, #341933);
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

.list:active {
  transform: translateY(4px) translateX(4px);
  box-shadow: #993399 0px 0px 0px;
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
}

.nav-header ul li a .text {
  color: white;
}

.box {
  position: relative;
  overflow: hidden;
}

.login-header {
  position: relative;
  display: inline-block;
  padding: 12px 36px;
  margin: 12px 0;
  margin-right: 12px;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 18px;
  letter-spacing: 2px;
  border-radius: 40px;
  background: linear-gradient(90deg, #755bea, #ff72c0);
  overflow: hidden;
  transition: transform 200ms, box shadow 200ms;
}

button {
  transition: transform 200ms, box shadow 200ms;
}

.login-header:active {
  transform: translateY(4px) translateX(4px);
  box-shadow: #993399 0px 0px 0px;
}

.search-box {
  position: absolute;
  left: 82%;
  bottom: 84%;
  transform: translate(-50%, -50%);
  background: linear-gradient(90deg, #755bea, #ff72c0);
  height: 40px;
  border-radius: 40px;
  padding: 10px;
}

.search-btn {
  float: right;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ad47ac;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 2s;
}
.search-txt {
  border: none;
  background: none;
  outline: none;
  padding: 0;
  float: left;
  color: white;
  font-size: 16px;
  transition: 0.4s;
  line-height: 40px;
  width: 0px;
  
}

.search-box:hover > .search-txt {
  width: 240px;
  padding: 0px;
}

.search-box:hover > .search-btn {
  background:#755bea;
}
.search-txt::placeholder{
  color: #341933;
}
</style>
