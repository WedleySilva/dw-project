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
            <span class="icon">
              <img src="../assets/image/home.svg" height="25px" width="25px" /></span>
            <span class="text">Home</span>
          </a>
        </li>
        <li class="list active">
          <a href="#">
            <span class="icon">
              <img src="../assets/image/person.svg" height="25px" width="25px" /></span>
            <span class="text">Perfil</span>
          </a>
        </li>
        <li class="list active">
          <a href="#">
            <span class="icon"><img src="../assets/image/chatbubble.svg" height="25px" width="25px" /></span>
            <span class="text">Mensagens</span>
          </a>
        </li>
        <li class="list active">
          <a href="#">
            <span class="icon"><img src="../assets/image/layers.svg" height="25px" width="25px" /></span>
            <span class="text">Categorias</span>
          </a>
        </li>
        <li class="list active">
          <a href="#">
            <span class="icon"><img src="../assets/image/settings.svg" height="25px" width="25px" /></span>
            <span class="text">Config</span>
          </a>
        </li>
        <div class="indicator"></div>
      </ul>
    </div>

    <div class="pesquisa-header">Pesquisa</div>
    <div class="login-header">Login</div>

    <!-- <div class="sidenav">
      <div class="sas">-
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

  <div class="flex justify-center">
    <div class="rounded-lg shadow-lg bg-white max-w-sm">
      <a href="#!">
        <img class="rounded-t-lg" src="" alt="" />
      </a>
      <div class="p-6">
        <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
        <p class="text-gray-700 text-base mb-4">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button
          type="button"
          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Button
        </button>
      </div>
    </div>
  </div>
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
  height: 75px;
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
  z-index: 2;
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
  line-height: 65px;
  font-size: 1.5em;
  transition: 0.5s;
  color: #341933;
}

.nav-header ul li.active a .icon {
  transform: translateY(-32);
  color: #341933;
}

.nav-header ul li a .text {
  position: absolute;
  background-color: white;
  color: #ad47ac;
  border-radius: 2px 7px;
  border-radius: 12px;
  font-weight: 400;
  font-size: 0.75em;
  letter-spacing: 0.05em;
  transition: 0.5s;
  transform: translateY(15px);
  opacity: 0;
}

.nav-header ul li.active a .text {
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
