<script>
  import Navbrand from "./NavBrand.svelte";

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Service", href: "#service" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];
</script>

<nav>
  <div class="title">
    <Navbrand style="height: 30px; width: 160px" fill="inherit" />
  </div>
  <div class="nav__items__container">
    <button class="tr_btn menuBar">
      <svg class="icon" viewBox="0 0 32 32">
        <path d="M2 6h28v6h-28zM2 14h28v6h-28zM2 22h28v6h-28z" />
      </svg>
    </button>
    <ul class="nav__items">
      {#each navItems as navItem}
        <li>
          <a href={navItem.href} class="hover nav__link">
            {navItem.name}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</nav>

<style>
  nav {
    display: flex;
    max-width: 1100px;
    margin: 0 auto;
    padding: calc(2vw + 5px) 10px 1rem;
    flex: auto;
    backdrop-filter: blur(20px);
    background-color: #312a2a6b;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .title {
    flex: auto;
  }
  ul.nav__items {
    list-style: none;
    text-decoration: none;
    display: flex;
    gap: 3vw;
    transition: 0.5s ease;
  }
  .nav__items li {
    padding: 5px 10px;
    position: relative;
  }
  .nav__items__container {
    position: relative;
  }
  a {
    text-decoration: none;
    width: 100%;
    display: block;
    text-align: center;
  }
  .menuBar {
      display: none;
  }
  @media (max-width: 700px) {
    nav {
      backdrop-filter: none;
    }
    ul.nav__items {
      position: fixed;
      right: 0;
      top: 0;
      display: block;
      padding: 10px 0;
      height: 100vh;
      min-width: 200px;
      backdrop-filter: blur(10px);
      box-shadow: 0px 0px 5px 2px #d6cece70;
      background-color: #312a2a6b;
      transform: translateX(100%);
    }
    a {
      padding: 10px 0px;
    }
    .nav__items__container:focus-within ul.nav__items {
        transform: translateX(0%);
    }

  .menuBar {
      display: block;
  }
  }
  .hover::after {
      content: ' ';
      position: absolute;
      bottom: 0;
      left: 0;
      height: 4px;
      width: 0px;
      border-radius: 5px;
      background-color: var(--primary);
      transition: 0.5s ease;
      z-index: -1;
  }
  .hover:hover::after {
      width: 100%;
  }
</style>
