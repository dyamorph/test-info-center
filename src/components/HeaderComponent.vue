<script></script>

<template>
  <header class="header fluid-container">
    <div class="container">
      <a class="header__logo" href="/">
        <img src="../assets/icons/logo.svg" alt="" />
      </a>
      <nav class="">
        <ul class="header__menu">
          <li class="header__menu-item">
            <a class="header__menu-link" href="/">Product</a>
          </li>
          <li class="header__menu-item">
            <a class="header__menu-link" href="/">Community</a>
          </li>
          <li class="header__menu-item">
            <a class="header__menu-link" href="/">Price</a>
          </li>
          <li class="header__menu-item">
            <a class="header__menu-link" href="/">Blog</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script></script>

<style scoped>
.header {
  position: absolute;
  width: 100%;
  top: 0;
  height: 100px;
  background-color: var(--dark);
  opacity: 0.9;
  z-index: 10;
  display: flex;
  align-items: center;
}

.container {
  max-width: 1180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__menu {
  display: flex;
  list-style: none;
  column-gap: 60px;
  text-transform: uppercase;
}

.header__menu-link {
  padding: 5px;
  color: var(--light);
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  font-weight: 500;
}

.header__menu-link:hover {
  color: var(--accent);
}

@media (max-width: 768px) {
  .header {
    height: 120px;
    opacity: 1;
  }
  .container {
    flex-direction: column;
    align-items: start;
    row-gap: 10px;
    padding-top: 10px;
  }
  .header__menu {
    column-gap: 16px;
  }
  .header__menu-link {
    padding: 0;
  }
}
</style>
