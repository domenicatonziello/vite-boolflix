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
        },
    },
    methods: {
        setStarClass(n) {
            return n <= this.roundedVote ? "favourite" : '';
        }
    }
}
</script>

<template>
    <div class="card">
        <img :src="imageUrl" :alt="title">
        <ul>
            <li>
                <h3>{{ title }}</h3>
            </li>
            <li v-if="title !== subtitle"> {{ subtitle }} </li>
            <li>
                <img v-if="hasFlag" :src="flagSrc" :alt="language">
                <div v-else>{{ language }}</div>
            </li>
            <li>
                <font-awesome-icon v-for="n in 5" icon="fa-star fa-solid" :class="setStarClass(n)" />
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.card {
    height: 450px;
    width: calc(100% / 4);
    padding: 5px;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    ul {
        display: none;
        list-style-type: none;

        position: absolute;
        top: 5px;
        bottom: 5px;
        left: 5px;
        right: 5px;
        background-color: rgba($color: #4b4b4b81, $alpha: .5);
        padding: 0 10px;
        padding-top: 100px;

        li {
            margin: 10px 0;
        }

        img {
            width: 25px;
        }

        .fa-star {
            color: lightgrey;
        }

        .favourite {
            color: yellow;
        }

    }
}

.card:hover ul {
    display: block;
    border: 2px solid black;
}
</style>