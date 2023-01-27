<script>
import { baseImg } from '../../data';
export default {
    name: 'ProductionCard',
    data() {
        return {
            imageName: ['en', 'it'],
            active: false,
        }
    },
    props: {
        title: String,
        subtitle: String,
        language: String,
        voto: Number,
        image: String
    },
    computed: {
        roundedVote() {
            const roundedVote = Math.ceil(this.voto / 2);
            return roundedVote;
        },
        hasFlag() {
            return this.imageName.includes(this.language);
        },
        flagSrc() {
            const url = new URL(`../../assets/flags/${this.language}.png`, import.meta.url);
            return url.href;
        },
        imageUrl() {
            return `${baseImg}w342${this.image}`;
        }
    },
    methods: {
        getChangeActive() {
            this.active = !this.active;
        }
    }
}
</script>

<template>
    <div class="card">
        <img @mouseover="getChangeActive" @mouseleave="getChangeActive" :src="imageUrl" :alt="title">
        <ul v-show="active">
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

    position: relative;

    ul {
        list-style-type: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba($color: #4b4b4b81, $alpha: .5);

        img {
            width: 25px;
        }
    }
}
</style>