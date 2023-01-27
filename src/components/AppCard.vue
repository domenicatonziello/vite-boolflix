<script>
export default {
    name: 'AppCard',
    data() {
        return {
            imageName: ['en', 'it'],
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
        hasFlag() {
            return this.imageName.includes(this.language);
        },
        flagSrc() {
            const url = new URL(`../assets/flags/${this.language}.png`, import.meta.url);
            return url.href;
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
            <li>
                <img v-if="hasFlag" :src="flagSrc" :alt="language">
                <div v-else>{{ language }}</div>
            </li>
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

        img {
            width: 25px;
        }
    }
}
</style>