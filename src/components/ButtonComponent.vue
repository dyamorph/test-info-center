<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'button',
    validator(value) {
      return ['button', 'submit'].includes(value)
    }
  },
  variant: {
    type: String,
    default: 'primary',
    validator(value) {
      return ['primary', 'secondary'].includes(value)
    }
  },
  size: {
    type: String,
    default: 'small',
    validator(value) {
      return ['small', 'large', 'full'].includes(value)
    }
  }
})

const buttonClasses = computed(() => ['button', props.size, props.variant])
</script>

<template>
  <button :type="props.type" :class="buttonClasses">
    <slot />
  </button>
</template>

<style scoped>
.button {
  padding: 15px 10px;
  outline: none;
  border: 1px solid transparent;
  border-radius: 6px;
  text-transform: uppercase;
  font-size: 13px;
  text-align: center;
  line-height: 14px;
}

.primary {
  background-color: var(--accent);
  color: var(--light);
  border: 1px solid var(--light);
}

.primary:hover {
  background-color: var(--accent-darken);
  transition: all 0.2s ease-in;
}

.secondary {
  background-color: var(--light);
  color: var(--text-dark);
  border: 1px solid var(--text-dark);
}

.secondary:hover {
  background-color: var(--gray);
  transition: all 0.2s ease-in;
}

.small {
  max-width: 183px;
  width: 100%;
}

.large {
  max-width: 370px;
  width: 100%;
}

.full {
  width: 100%;
}
</style>
