<template>
    <div class="create">
        <form @submit.prevent="handleSubmit">
            <label for="title">Title</label>
            <input type="text" v-model="title" required>


            <label for="body">Body</label>
            <textarea required v-model="body"></textarea>

            <label for="tags">Tags</label>
            <input type="text" v-model="tag" @keydown.enter.prevent="handleKeyDown">
            <div v-for="tag in tags" :key="tag" class="pill">
                #{{ tag }}
            </div>

            <button class="submit">Submit</button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const title = ref('')
        const body = ref('')
        const tag = ref('')
        const tags = ref([])

        const handleKeyDown = () => {
            tag.value = tag.value.replace(/\s+/g, '')
            if (!tags.value.includes(tag)) {
                tags.value.push(tag.value)
            }
            tag.value = ''
        }
        
        const router = useRouter()

        const handleSubmit = async () => {
            const post = {
                title: title.value,
                body: body.value,
                tags: tags.value
            }

            await fetch('http://localhost:3000/posts/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(post)
            })
            
            router.push({name: 'home'})
        }

        return { title, body, tag, tags, handleKeyDown, handleSubmit }
    }
}
</script>

<style>
form {
    margin: 0 auto;
    text-align: left;
    width: 300px;
}

input,
textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #eee;
}

textarea {
    height: 160px;
}

label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: black;
    margin-bottom: 10px;
}

label::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #00bd7e;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1.5deg);
}

button {
    display: block;
    margin-top: 30px;
    background: #00bd7e;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px
}

.pill {
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
}
</style>
