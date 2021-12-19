<template>
  <span>
    {{ pricePretty }}
  </span>
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    price: Number,
    currencySymbol: String
  },
  setup(props) {
    const pricePretty = computed(
        () => props.currencySymbol + props.price.toFixed(2)
    )

    return { pricePretty }
  }
}
</script>

<style scoped>

</style>