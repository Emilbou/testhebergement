<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
    <header id="header">
        <div>
            <div>
                <div>
                    <a>
                        <img src="#" alt="Logo">
                    </a>
                </div>
                <div>
                    <ul>
                        <li>
                            <RouterLink to="/">Home</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/web3">Web3</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/web5">Web5</RouterLink>
                        </li>
                    </ul>
            </div>
        </div>
    </div>
</header>
</template>