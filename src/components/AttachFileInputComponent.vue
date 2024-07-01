<script setup>
import { ref } from 'vue'

const fileInput = ref(null)
const fileName = ref('')

function handleFileChange() {
  const file = fileInput.value?.files[0]
  fileName.value = file.name
}
</script>

<template>
  <label class="input" for="file">
    <img src="../assets/icons/attach-icon.svg" alt="Attach icon" />
    <span v-if="fileName">{{ fileName }}</span>
    <span v-else>Attach a file</span>
    <input ref="fileInput" type="file" @change="handleFileChange" id="file" style="display: none" />
  </label>
</template>

<style scoped>
.input {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 10px;
  padding: 12px 10px;
  border-radius: 3px;
  border: 2px solid var(--accent);
  background-color: rgba(255, 255, 255, 0.85);
  color: var(--text-dark);
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 18px;
  transition: 0.2s ease;
}
.input:hover {
  background-color: rgba(161, 250, 238, 0.85);
}
</style>
