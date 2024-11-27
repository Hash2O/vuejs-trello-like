<template>
    <h1 class="text-2xl font-bold text-gray-700 mb-10">
      Vuejs 3 Trello Like 
        </h1>
  
    <div>
      <Draggable
          v-model="columns"
          group="columns"
          :animation="150"
          handle=".drag-handle"
          item-key="id"
          class="flex gap-4 overflow-x-auto items-start"
      >
        <template #item="{element: column}: {element: Column}">
          <div class="bg-gray-50 p-5 rounded shadow-lg min-w-[250px]">
            <header class="font-bold mb-4">
              <DragHandle icon="🖲️" />
  
              <input
                class="bg-transparent focus:bg-white rounded px-1 w-4/5"
                @keyup.enter="($event.target as HTMLInputElement).blur()"
                type="text"
                v-model="column.title"
              />
            </header>
  
            <Draggable
                v-model="column.tasks"
                group="tasks"
                :animation="150"
                handle=".drag-handle"
                item-key="id"
            >
              <template
                  #item="{element: task}: {element: Task}"
              >
                <MyTask
                    :task="task"
                />
              </template>
            </Draggable>
  
          </div>
        </template>
      </Draggable>
  
    </div>
  </template>

<script setup lang="ts">
import { ref } from 'vue'
import type {Column, Task} from "@/types";
import MyTask from "@/components/MyTask.vue";
import Draggable from 'vuedraggable';
import DragHandle from "@/components/DragHandle.vue";
import {useLocalStorage} from "@vueuse/core";

const options = {
  serializer: {
    read: (value) => {
      return JSON.parse(value).map((column: Column) => {
        if (column.tasks == null) {
          return column;
        }

        column.tasks = column.tasks.map((task: Task) => {
          task.created_at = new Date(task.created_at);
          return task;
        });
        return column;
      });
    },
    write: (value: string) => JSON.stringify(value),
  },
};

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
        id: 4,
        title: 'Doing',
        tasks: [
            {
                id: 1,
                title: 'Création Component Board',
                content: 'Lorem Ipsum'
            },
            {
                id: 2,
                title: 'Création Component Task',
                content: 'Lorem Ipsum'
            },
            {
                id: 3,
                title: 'Gestion du CSS',
                content: 'Utilisation de TailWindCSS'
            },
            {
                id: 4,
                title: 'Implémentation CORS',
                content: 'Lorem Ipsum'
            }
        ],
    },
    {
        id: 4,
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
