<script setup></script>
<template>
  <section class="hero container-fluid">
    <div class="container">
      <h1 class="hero__title desktop">
        <span class="hero__title--accent">Lorem ipsum</span> dolor sit <br />
        amet consectetur
        <span class="hero__title--accent">adipiscing</span>
      </h1>
      <h1 class="hero__title mobile">
        <span class="hero__title--accent">Lorem ipsum</span> dolor sit amet <br />
        consectetur
        <span class="hero__title--accent">adipiscing</span>
      </h1>
      <div>
        <p class="hero__subtitle">At vero eos et accusamus et iusto odio dignissimos ducimus!</p>
        <ul class="hero__list">
          <li class="hero__list-item">Totam rem aperiam eaque ipsa</li>
          <li class="hero__list-item">Sit voluptatem accusantium doloremque laudantium</li>
          <li class="hero__list-item">Sed ut perspiciatis, unde omnis iste natus error</li>
        </ul>
      </div>
      <div class="hero__buttons">
        <ButtonComponent>Order</ButtonComponent>
        <ButtonComponent variant="secondary">More Info</ButtonComponent>
      </div>
    </div>
  </section>
</template>
<style scope>
.container {
  max-width: 1180px;
}
.hero {
  position: relative;
  padding: 203px 0;
  background-image: url('../assets/images/hero-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0% 100%;
}

.hero__title {
  text-transform: uppercase;
  max-width: 780px;
  color: var(--text-dark);
  font-weight: 700;
  margin-bottom: 80px;
  display: none;
}

.hero__title--accent {
  color: var(--accent);
}

.hero__subtitle {
  color: var(--text-dark);
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
}

.hero__list {
  list-style: none;
  padding-left: 6px;
  margin-bottom: 80px;
}

.hero__list-item {
  color: var(--text-dark);
  font-size: 20px;
}

.hero__list-item::before {
  content: '-';
  padding-right: 10px;
}

.hero__buttons {
  display: flex;
  gap: 30px;
}

@media (min-width: 769px) {
  .desktop {
    display: block;
  }
}

@media (max-width: 768px) {
  .hero {
    position: relative;
    padding: 200px 0 80px 0;
    background-image: url('../assets/images/hero-mobile-bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top 30px right 0px;
  }

  .hero__buttons {
    flex-direction: column;
  }

  .hero__buttons button {
    max-width: 100% !important;
  }

  .hero__title {
    max-width: 280px;
    margin-bottom: 24px;
  }
  .mobile {
    display: block;
  }
}
</style>
