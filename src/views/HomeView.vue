<template>
  <h1>Homepage</h1>
  <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
  <button @click="handleClick">Click Me</button>
  <input type="text" v-model="name">
  <button @click="age++">Add 1 to age</button>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    console.log('setup')

    const name = ref('mario')
    const age = ref(30)

    const p =  ref(null)

    const handleClick = () => {
      name.value = 'luigi'
      age.value = 40
    }

    return { name, age, handleClick, p }
  },
}
</script>
