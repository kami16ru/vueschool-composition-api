<template>
  <h1>{{ name }}</h1>
  <button  @click="placeOrder">Place Order</button>

  <YummyMeal name="Gamburger" :price="5" @addToCard="addItemToCard" />

</template>

<script>
import YummyMeal from '@/components/YummyMeal.vue'

export default {
  components: { YummyMeal },
  setup() {
    const name = 'The Snazzy Burger'
    const placeOrder = () => alert('You\'re order has been placed!')
    const addItemToCard = (item) => alert(`One ${item} added to card!`)

    return { name, placeOrder, addItemToCard };
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
