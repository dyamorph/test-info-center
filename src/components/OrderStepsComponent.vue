<script setup>
import SearchIcon from '/src/assets/icons/search-icon.svg'
import PercentIcon from '/src/assets/icons/percent-icon.svg'
import DocumentIcon from '/src/assets/icons/document-icon.svg'
import LetterIcon from '/src/assets/icons/letter-icon.svg'
import BanknoteIcon from '/src/assets/icons/banknote-icon.svg'

const steps = [
  { title: 'Lorem ipsum dolorsit amet', iconSrc: SearchIcon },
  { title: 'Consecteturadipiscing elit', iconSrc: PercentIcon },
  { title: 'Sed do eiusmod tempor', iconSrc: DocumentIcon },
  { title: 'Esse cillum dolore eu fugiat', iconSrc: LetterIcon },
  {
    title: 'Excepteur sint occaecat cupidatat non proident',
    iconSrc: BanknoteIcon
  }
]
</script>

<template>
  <ul class="steps__list d-flex align-items-stretch">
    <li class="steps__item h-100" v-for="(step, index) in steps" :key="index">
      <span class="steps__image-container">
        <img class="steps__image" :src="step.iconSrc" alt="Step Icon" />
      </span>
      <span class="steps__title">{{ step.title }}</span>
    </li>
  </ul>
</template>

<style scoped>
.steps__list {
  padding: 80px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url('/src/assets/images/dots.png');
  background-repeat: no-repeat;
  background-position: 50% 40%;
}

.steps__item {
  display: flex;
  width: 210px;
  align-items: center;
  flex-direction: column;
}

.steps__title {
  flex: 1 1 auto;
  font-size: 16px;
}

.steps__image-container {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid var(--dark-blue);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--accent);
  margin-bottom: 20px;
}

.steps__divider {
  width: 50px;
  flex-grow: 1;
  height: 4px;
  background-image: radial-gradient(#d1d5db 4px, transparent 1px);
  background-size: 20px 20px;
  background-repeat: repeat-x;
  margin: 0 20px;
}

@media (max-width: 768px) {
  .steps__list {
    flex-wrap: wrap;
    background-image: none;
    gap: 16px;
    margin: 0 auto;
  }
  .steps__item {
    width: 156px;
  }
}
</style>
