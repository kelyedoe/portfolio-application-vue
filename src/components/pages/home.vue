<template>
    <nav class="navigation">
        <div class="navigation--logo">Portfolio.</div>
        <div class="navigation--menu">
            <ul class="navigation--menu__list">
                <li class="nav--link">
                  <font-awesome-icon icon="fa-brands fa-home" /> 
                  <a href="" class="navigation--menu__link">Home</a>
                </li>
                <li class="nav--link"><a href="" class="navigation--menu__link">Projets</a></li>
                <li class="nav--link"><a href="" class="navigation--menu__link">Outils</a></li>  
            </ul>
        </div>
    </nav>      
</template>

<style>

.navigation{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  top: 0;
  position: relative;
  z-index: 100;
}
.navigation--logo{
  font-size: 3rem;
  font-weight: 600;
  color: #00B0FF;
  cursor: pointer;
}
.navigation--menu{
  font-size: 2rem;
}

.navigation--menu__list{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 7rem;
  color: #fff;
}
.navigation--menu__link{
  text-decoration: none;
  color: #fff;

}
.nav--link{
  list-style: none;
}
li a:active, 
li a:hover{
  background: linear-gradient(29deg, rgba(0,176,255,1) 0%, rgba(252,70,107,1) 100%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  font-weight: 700;
}

</style>