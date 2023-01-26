<script>
export default {
    name: 'SearchBar',
    data() {
        return {
            term: '',
        }
    },
    props: {
        label: String
    },
    emits: ['search-term']
}
</script>

<template>
    <div>
        <input type="text" v-model="term">
        <button type="button" @click="$emit('search-term', term)"> {{ label || 'Cerca' }} </button>
    </div>
</template>


<style scoped lang="scss">

</style>