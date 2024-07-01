<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
const dropdown = ref(null)
const isActive = ref(false)
const selected = ref(null)
const options = [
  { label: 'Sed ut perspiciatis', value: '1' },
  { label: 'Nemo enim ipsam', value: '2' },
  { label: 'Et harum quidem', value: '3' },
  { label: 'Temporibus autem', value: '4' },
  { label: 'Itaque earum rerum', value: '5' },
  { label: 'Et harum quidem', value: '6' },
  { label: 'Nemo enim ipsam', value: '7' }
]

const toggleMenu = () => {
  isActive.value = !isActive.value
}

const selectedLabel = computed(() => {
  const selectedOption = options.find((option) => option.value === selected.value)
  return selectedOption ? selectedOption.label : 'Select the system type'
})

const selectOption = (option) => {
  selected.value = option.value
  isActive.value = false
}

const handleClickOutside = (event) => {
  if (dropdown.value && !dropdown.value.contains(event.target)) {
    isActive.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="select__menu" ref="dropdown">
    <div :class="{ active: isActive }" class="select__btn" @click="toggleMenu">
      <span class="select-text" ref="selectText">{{ selectedLabel }}</span>
      <i class="bx bx-chevron-down"></i>
    </div>
    <ul class="select__options" v-if="isActive">
      <li
        class="select__option"
        v-for="(option, index) in options"
        :key="index"
        @click="selectOption(option)"
      >
        <span class="option__text">{{ option.label }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.select__menu {
  background-color: rgba(255, 255, 255, 0.85);
  color: var(--text-dark);
  border-radius: 3px;
  position: relative;
}
.select__btn {
  border-radius: 3px;
  padding: 10px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border: 1px solid var(--light);
  height: 52.5px;
}

.select-text {
  font-size: 18px;
}
.select__btn.active {
  background-color: rgba(61, 64, 80, 0.85);
  color: var(--light);
  border: none;
}
.select__options {
  position: absolute;
  list-style: none;
  background-color: #272733;
  border: 1px solid #3d4050;
  padding-left: 10px;
  padding-top: 10px;
  gap: 10px;
  max-height: 150px;
  overflow: scroll;
  cursor: pointer;
  scrollbar-color: var(--accent) transparent;
  display: none;
  width: 100%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
}

.select__option {
  width: 100%;
  text-align: left;
}

.select__option:hover .option__text {
  color: var(--accent);
}

.option__text {
  color: var(--light);
}
</style>
