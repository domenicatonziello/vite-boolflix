<script>
export default {
    name: 'AppCard',
    data() {
        return {
            imageName: ['en.png', 'it.png'],
        }
    },
    props: {
        title: String,
        subtitle: String,
        language: String,
        voto: Number
    },
    computed: {
        roundedVote() {
            const roundedVote = Math.ceil(this.voto);
            return roundedVote;
        },
        languageFlag() {
            return `${this.language}.png`;
        }
    },
    methods: {
        buildImagePath(img) {
            const url = new URL(`../assets/flags/${img}`, import.meta.url);
            return console.log(url.href);
        }
    }
}
</script>

<template>
    <div class="card">
        <ul>
            <li>
                <h3>{{ title }}</h3>
            </li>
            <li v-if="title !== subtitle"> {{ subtitle }} </li>
            <li> <img :src="buildImagePath(languageFlag)" :alt="language"> </li>
            <li> {{ roundedVote }}</li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.card {
    min-height: 100px;
    flex-basis: calc(100% / 4 - 90px);
    margin: 10px;
    background-color: dodgerblue;

    ul {
        list-style-type: none;
    }
}
</style>