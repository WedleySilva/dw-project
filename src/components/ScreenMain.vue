<script>
const list = document.querySelectorAll(".list");
function activelink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activelink));
</script>

<template>
  <header class="header">
    <div class="logo-hearder">LOGO</div>
    <div class="nav-header">
      <ul>
        <li class="list active">
          <a href="#">
            <span class="icon"></span>
            <span class="text">Home</span>
          </a>
        </li>
        <li class="list">
          <a href="#">
            <span class="icon"></span>
            <span class="text">Perfil</span>
          </a>
        </li>
        <li class="list">
          <a href="#">
            <span class="icon"></span>
            <span class="text">Mensagens</span>
          </a>
        </li>
        <li class="list">
          <a href="#">
            <span class="icon"></span>
            <span class="text">Categorias</span>
          </a>
        </li>
        <li class="list">
          <a href="#">
            <span class="icon"></span>
            <span class="text">Config</span>
          </a>
        </li>
        <div class="indicator"></div>
      </ul>
    </div>

    <div class="pesquisa-header">Pesquisa</div>
    <div class="login-header">Login</div>

    <!-- <div class="sidenav">
      <div class="sas">
        <ul>
          <li class="list active">
            <a href="#">
              <span class="icon"></span>
              <span class="text">Home</span>
            </a>
          </li>
          <li class="list">
            <a href="#">
              <span class="icon"></span>
              <span class="text">Perfil</span>
            </a>
          </li>
          <li class="list">
            <a href="#">
              <span class="icon"></span>
              <span class="text">Mensagens</span>
            </a>
          </li>
          <li class="list">
            <a href="#">
              <span class="icon"></span>
              <span class="text">Categorias</span>
            </a>
          </li>
          <li class="list">
            <a href="#">
              <span class="icon"></span>
              <span class="text">Config</span>
            </a>
          </li>
          <div class="indicator"></div>
        </ul>
      </div>
    </div> -->
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
  width: 99%;
  left: 99%;
}

.header {
  border: 2px solid #ad47ac;
  box-shadow: 3px 3px 3px 1px #ad47ac;
  background-color: #341933;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  margin-top: 30px;

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

.sidenav {
  width: 1520px;
  height: 150px;
  padding: 10px;
  border: 2px solid #ad47ac;
  box-shadow: 3px 3px 3px 1px #ad47ac;
  margin: 0px;
  position: relative;
  margin-left: 20px;
  margin-top: 30px;
  margin-right: auto;
  background-color: #341933;
  border-radius: 40px;
}
.sas {
  /* position: relative; */
  width: 400px;
  height: 60px;
  z-index: 2;
}

.sas ul li a .icon {
  position: relative;
  display: block;
  line-height: 65px;
  font-size: 1.5em;
  transition: 0.5s;
  color: #341933;
}

.sas ul li.active a .icon {
  transform: translateY(-32);
  color: #341933;
}

.sas ul li a .text {
  position: absolute;
  background-color: #ad47ac;
  color: #341933;
  border-radius: 2px 7px;
  border-radius: 12px;
  font-weight: 400;
  font-size: 0.75em;
  letter-spacing: 0.05em;
  transition: 0.5s;
  transform: translateY(15px);
  opacity: 0;
}

.sas ul li.active a .text {
  transform: translateY(-4px);
  opacity: 1;
}

.indicator {
  position: absolute;
  top: -35%;
  width: 70px;
  height: 70px;
  background-color: #ad47ac;
  border-radius: 50%;
  z-index: 1;
  transition: 0.5s;
}

.indicator::before {
  content: "";
  position: absolute;
  top: 5px;
  left: -28px;
  width: 30px;
  height: 30px;
  background: transparent;
  border-radius: 50%;
  box-shadow: 15px 18px #ad47ac;
}

.indicator::after {
  content: "";
  position: absolute;
  top: 5px;
  right: -28px;
  width: 30px;
  height: 30px;
  background: transparent;
  border-radius: 50%;
  box-shadow: -15px 18px #ad47ac;
}
</style>
