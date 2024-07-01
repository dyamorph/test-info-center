<script setup>
import { ref } from 'vue'

const year = ref(new Date().getFullYear())
</script>

<template>
  <footer class="container-fluid footer">
    <div class="container">
      <p class="footer__copyright">
        ©
        <span>{{ year }}</span>
        «LOREMIPSUM» All rights reserved.
      </p>
      <img
        class="footer__devider"
        src="/src/assets/icons/footer-devider-icon.svg"
        alt="Devider Icon"
      />
      <ul class="footer__pay-methods">
        <li>
          <a class="pay-methods__link" href="#">
            <img src="/src/assets/icons/qiwi-icon.svg" alt="QIWI Icon" />
            <span>QIWI wallet</span>
          </a>
        </li>
        <li>
          <a class="pay-methods__link" href="#">
            <img src="/src/assets/icons/yandex-money-icon.svg" alt="Yandex Money Icon" />
            <span>Yandex Money</span>
          </a>
        </li>
        <li>
          <a class="pay-methods__link" href="#">
            <img src="/src/assets/icons/web-money-icon.svg" alt="Web Money Icon" />
            <span>Web Money</span>
          </a>
        </li>
      </ul>
      <img
        class="footer__devider"
        src="/src/assets/icons/footer-devider-icon.svg"
        alt="Devider Icon"
      />

      <ul class="footer__contacts">
        <li>
          <a href="mailto:info@ipsum.com">
            <img src="/src/assets/icons/mail-icon.svg" alt="Mail Icon" />
            <span>info@ipsum.com</span>
          </a>
        </li>
        <li>
          <a href="vk.com">
            <img src="/src/assets/icons/vk-icon.svg" alt="VK Icon" />
            <span>Мы в контакте</span>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #3d4050;
  font-size: 13px;
}

.footer__copyright {
  margin: 0;
  margin-right: 85px;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}

.footer__pay-methods {
  display: flex;
  column-gap: 44px;
}

.pay-methods__link {
  color: var(--gray);
  display: flex;
  align-items: center;
  column-gap: 4px;
  transition: 0.2s ease;
}

.pay-methods__link:hover {
  color: var(--accent);
}

.footer__contacts {
  display: flex;
  column-gap: 65px;
}

.footer__contacts a {
  color: var(--light);
  display: flex;
  align-items: center;
  column-gap: 4px;
  transition: 0.2s ease;
}
.footer__contacts a:hover {
  color: var(--accent);
}

@media (max-width: 768px) {
  .footer__devider {
    display: none;
  }
  .footer__copyright {
    margin-right: 0;
    order: 3;
  }
  .container {
    flex-direction: column;
    height: 140px;
    padding: 24px 0;
    gap: 16px;
    justify-content: start;
    align-items: center;
  }
  .footer__pay-methods {
    column-gap: 16px;
  }
}
</style>
