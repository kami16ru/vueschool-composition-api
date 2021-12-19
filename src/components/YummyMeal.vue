<template>
  <p>
    <strong>{{ name }}</strong>
    {{ pricePrettySentence }}
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
    const pricePrettySentence = computed(
        () => `The price of this item is ${pricePretty.value}`)

    return { addToCard, pricePretty, pricePrettySentence }
  }
}
</script>