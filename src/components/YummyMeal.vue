<template>
  <p>
    <strong>{{ name }}</strong>

    <YummyMealPrice :price="price" :currencySymbol="currencySymbol" />

    <button @click="addToCart">Add to Card</button>
  </p>
</template>

<script>
import YummyMealPrice from "@/components/YummyMealPrice.vue";

export default {
  components: { YummyMealPrice },
  props: {
    name: String,
    price: Number,
    currencySymbol: String
  },
  setup(props, { emit }) {
    const addToCart = () => {
      emit('addToCart', props.name)
    }

    return { addToCart }
  }
}
</script>