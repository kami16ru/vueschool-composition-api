<template>
  <div v-if="post && user">
    <h1 class="text-3xl">{{ post.title }}</h1>
    <div class="text-gray-500 mb-10">by {{ user.name }}</div>
    <div>{{ post.body }}</div>
  </div>
</template>
<script setup>
import usePost from '@/apps/blog/composables/usePost'

const { post, fetchOne } = usePost()
const user = {
  name: "Leanne Graham",
};

fetchOne(1)
</script>
