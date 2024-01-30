<script setup lang="ts">
import {allCommand} from '@/backend';
const donneesrecues = await allCommand();
console.log(donneesrecues);
</script>


<template>
<ul v-for="lesdonnees in donneesrecues" :key="lesdonnees.id" >
<li>
{{lesdonnees.text}}
</li>
</ul>
</template>