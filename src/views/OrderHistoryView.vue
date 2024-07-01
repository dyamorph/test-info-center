<script setup></script>

<template>
  <div class="wrapper">
    <HeaderComponent />
    <OrderHistoryComponent class="order-history" />
    <FooterComponent class="footer" />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.order-history {
  padding-top: 100px;
  flex: 1;
}
</style>
