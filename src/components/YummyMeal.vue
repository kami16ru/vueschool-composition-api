<template>
  <p>
    <strong>{{ name }}</strong>
    {{ pricePretty }}
    <button @click="addToCard">Add to Card</button>
  </p>
</template>

<script>
import { computed } from 'vue'

export default {
  props: {
    name: String,
    price: Number
  },
  setup(props, { emit }) {
    const addToCard = () => emit('addToCard', props.name)
    const pricePretty = computed(() => `$${props.price.toFixed(2)}`)

    return { addToCard, pricePretty }
  }
}
</script>