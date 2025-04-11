<template>
    <div v-if="post" class="post-details">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
    </div>
    <button @click="handleClick">Go to home</button>
</template>

<script>
import { handleError } from 'vue'
import getPost from '../services/getPost'
import { useRouter } from 'vue-router'
export default {
    props: ['id'],
    setup(props) {
        const { post, error, load } = getPost(props.id)

        load()
        const router = useRouter()

        const handleClick = () => {
            console.log(router)
            router.push({name: 'home'})
        }

        return { post, error, handleClick }
    }
}
</script>