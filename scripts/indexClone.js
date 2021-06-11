const informations = {
    name: 'Pedro',
    age: 30
}

const header = document.querySelector('#header');
header.innerHTML = `
<img src="./images/logo.svg" alt="logo da aluraDev" />

<input type="text" placeholder="Busque por algo" />

<a href="#">
  <img src="./images/Photo.svg" alt="perfil do usuário" />
  <span>${informations.name}</span>
</a>
`

const menu = document.querySelector('.menu');
menu.innerHTML = `
    <!--menu de navegação parte esquerda-->
    <h2>M E N U</h2>

    <div class="navLinks">
      <a href="./index.html">
        <img src="./images/Icon.svg" alt="" />

        <p>Editor de código</p>
      </a>
    </div>

    <div class="navLinks">
      <a href="#">
        <img src="./images/comunity-icon.svg" alt="" />

        <p>comunidade</p>
      </a>
    `