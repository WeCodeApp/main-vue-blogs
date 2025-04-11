<template>
    <header>
      <h1>The Bloggerist</h1>
      <nav>
        <RouterLink :to="{ name: 'home' }"> Home </RouterLink>
        <RouterLink :to="{ name: 'create' }"> Create Post </RouterLink>
      </nav>
      <div v-if="state.isAuthenticated" class="profile">
        <div>Welcome, {{ state.user?.name }}!</div>
        <button @click="handleLogout">Log Out</button>
      </div>
    </header>
  </template>
  
  <script setup>
  import { state } from '../config/msalConfig'
  import { msalService } from '../config/useAuth'
  
  const { logout } = msalService()
  const handleLogout = () => {
    logout()
  }
  </script>
  
  <style>
  header h1 {
    width: 100%;
  }
  header .profile {
    width: 400px;
  }
  
  .profile button {
    margin: 0;
  }
  </style>
  