<template>
  <h1>{{ name }}</h1>
  <input type="text" v-model="name">
  <button  @click="placeOrder">Place Order</button>

  <YummyMeal
      v-for="meal in meals"
      :name="meal.name"
      :price="meal.price"
      @addToCart="addItemToCart"
  />

</template>

<script>
import { ref, reactive, watch } from 'vue'
import YummyMeal from '@/components/YummyMeal.vue'

export default {
  components: { YummyMeal },
  setup() {
    const name = ref('The Snazzy tasty Burger')
    const cart = reactive([])
    const meal = reactive({
      name: 'Hamburger',
      price: 5
    })
    const meals = reactive([
      { name: 'Hamburger', price: 5 },
      { name: 'Cheeseburger', price: 6 },
      { name: 'Impossible Burger', price: 7 },
      { name: 'Frees', price: 2 }
    ])
    const placeOrder = () => alert('You\'re order has been placed!')
    const addItemToCart = (item) => cart.push(item)

    watch(() => [...cart],(newValue, oldValue) => console.log(newValue, oldValue), {})

    return { name, placeOrder, addItemToCart, meal, meals };
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
