<template>
    <header>
        <h1>The blogs</h1>
        <nav>
            <RouterLink :to="{name: 'home'}">
                Home
            </RouterLink>
            <RouterLink :to="{name: 'create'}">
                Create
            </RouterLink>
        </nav>
    </header>
</template>
