<script setup>
defineProps({
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String
  }
})
</script>
<template>
  <input class="input" :type="type" :placeholder="placeholder" />
</template>

<style scoped>
.input {
  padding: 12px 10px;
  border-radius: 3px;
  border: 1px solid var(--light);
  background-color: rgba(255, 255, 255, 0.85);
  font-size: 18px;
}

.input::placeholder {
  color: #272733;
  font-size: 18px;
}
</style>
