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
    <form @submit.prevent="$emit('search-term', term)">
        <input type="text" v-model="term">
        <button type="submit"> {{ label || 'Cerca' }} </button>
    </form>
</template>


<style scoped lang="scss">
button {
    padding: 10px;
    margin-left: 5px;
}

input {
    padding: 8px;
}
</style>