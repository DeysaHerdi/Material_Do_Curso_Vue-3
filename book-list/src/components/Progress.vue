<script setup>

import { computed } from 'vue';

const props = defineProps(['courses'])
//const courses = props.courses 

const coursesDone = computed(() => {
    return props.courses.filter(course => course.done).length
})

</script>

<template>
    <div>
        {{ `${coursesDone} cursos completos de um total de ${courses.length}` }}
    </div>
</template>