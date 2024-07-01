<script setup></script>

<template>
  <section class="order container-fluid">
    <div class="container">
      <h3 class="order__title">making <span class="order__title--accent">an order</span></h3>
      <span class="order__subtitle">Before filling out the form, check out our work scheme!</span>
      <OrderStepsComponent />
      <form class="order__form" enctype="multipart/form-data">
        <div class="order__inputs inputs">
          <SelectInputComponent />
          <TextInputComponent placeholder="Your email" type="email" />
          <TextInputComponent placeholder="Your name" />
          <RangeInputComponent class="inputs__range" />
          <AttachFileInputComponent />
        </div>
        <ButtonComponent size="large" type="submit">send</ButtonComponent>
      </form>
    </div>
  </section>
</template>

<style scoped>
.container {
  padding-inline: 0;
}
.order {
  padding-top: 121px;
  padding-bottom: 151px;
  text-align: center;
  background-image: url('../assets/images/order-bg.png');
}

.order__title {
  font-family: 'Roboto', sans-serif;
  font-size: 36;
  text-transform: uppercase;
  margin-bottom: 30px;
}

.order__title--accent {
  color: var(--accent);
}

.order__subtitle {
  font-size: 20px;
  color: #bbbbbb;
}

.order__inputs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 52px;
}

.inputs__range {
  grid-column: span 2;
}

@media (max-width: 768px) {
  .order__inputs {
    grid-template-columns: 1fr;
  }
  .inputs__range {
    grid-column: span 1;
  }

  .order__inputs + button {
    max-width: 100% !important;
  }
}
</style>
