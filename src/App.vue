<template>
  <h1>{{ name }}</h1>
  <button  @click="placeOrder">Place Order</button>

  <YummyMeal :name="meal.name" :price="meal.price" @addToCard="addItemToCard" />

</template>

<script>
import { ref, reactive } from 'vue'
import YummyMeal from '@/components/YummyMeal.vue'

export default {
  components: { YummyMeal },
  setup() {
    const name = ref('The Snazzy tasty Burger')
    const meal = reactive({
      name: 'Hamburger',
      price: 5
    })
    console.log(meal.name)
    const placeOrder = () => alert('You\'re order has been placed!')
    const addItemToCard = (item) => alert(`One ${item} added to card!`)

    return { name, placeOrder, addItemToCard, meal };
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
