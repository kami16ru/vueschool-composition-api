<template>
  <p>
    <strong>{{ name }}</strong>
    {{ price }}
    <button @click="addToCard">Add to Card</button>
  </p>
</template>

<script>
export default {
  props: {
    name: String,
    price: Number
  },
  setup(props, { emit }) {
    const addToCard = () => emit('addToCard', props.name)

    return { addToCard }
  }
}
</script>