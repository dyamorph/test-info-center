<script setup>
import { ref } from 'vue'

const rangeValue = ref(0)
</script>
<template>
  <div class="range">
    <p class="range__details">
      <span class="range__text">Sed ut perspiciatis, unde omnis iste natus</span>
      <span class="range__value">{{ rangeValue }} %</span>
    </p>
    <input
      class="range__input"
      type="range"
      name="range"
      id="range"
      v-model="rangeValue"
      min="0"
      max="100"
    />
  </div>
</template>
<style scoped>
.range {
  display: flex;
  flex-direction: column;
}
.range__details {
  display: flex;
  justify-content: space-between;
}
.range__text {
  font-size: 18px;
  text-align: left;
}

.range__value {
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  font-style: italic;
  font-weight: 100;
  color: rgba(255, 255, 255, 0.85);
}

.range__input {
  background-color: rgba(255, 255, 255, 0.7);
  border: 1px solid var(--light);
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  height: 6px;
  border-radius: 5px;
}

.range__input::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  background-color: var(--accent);
  border: 3px solid var(--dark-blue);
  border-radius: 50%;
  cursor: pointer;
}

.range__input::-moz-range-thumb {
  appearance: none;
  width: 20px;
  height: 20px;
  background-color: var(--accent);
  border: 3px solid var(--dark-blue);
  border-radius: 50%;
  cursor: pointer;
}
</style>
