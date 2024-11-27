<template>

    <div class="flex items-start space-x-4 mt-10">
        <div v-for="column in columns" class="bg-gray-50 rounded shadow min-w-[250px] p-5">
            <header class="font-bold mt-2 mb-2">{{ column.title }}</header>
            <div v-for="task in column.tasks" class="bg-white rounded shadow min-w-[250px] p-2 mb-2" :title="task.content">
                {{ task.title }}
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import {ref} from 'vue';

import type {Column} from "./types";


const columns = ref<Array<Column>>([
    {
        id: 1,
        title: 'Upcoming',
        tasks: [
            {
                id: 1,
                title: 'Créer une application front-end',
                content: 'Développer une application avec Vue 3 et API Composition'
            },
            {
                id: 2,
                title: 'Créer une application back-end',
                content: 'Développer une application avec Nestjs et Express API'
            }
        ],
    },
    {
        id: 2,
        title: 'To Do',
        tasks: [
            {
                id: 1,
                title: 'Setup du projet',
                content: 'Ajout des librairies'
            },
            {
                id: 2,
                title: 'Clean app de base',
                content: 'Supprimer les composants par défaut'
            }
        ],
    },
    {
        id: 3,
        title: 'Done',
        tasks: [
            {
                id: 1,
                title: 'Idéation',
                content: 'Définition des objectifs'
            },
            {
                id: 2,
                title: 'Fonctionnalités',
                content: 'Liste et définitions'
            }
        ],
    }
])

</script>
