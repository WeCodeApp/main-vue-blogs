<template>
  <h1>Homepage</h1>
  
  <div v-if="error">{{ error }}</div>
  <PostList :posts="posts"/>
</template>

<script>
import PostList from '../components/PostList.vue'
import getPosts from '../services/getPosts'

export default {
  components: { PostList },
  setup() {
    const { posts, error, load } = getPosts()

    load()

    return { posts, error }
  }
}
</script>
