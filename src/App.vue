<script>
import axios from 'axios';
import { apiKey, baseUri } from './data';
import { store } from './data/store.js';
import AppCard from './components/AppCard.vue';
import SearchBar from './components/SearchBar.vue';
export default {
  components: { SearchBar, AppCard },
  data() {
    return {
      store
    }
  },
  methods: {
    filterMovies(term) {
      store.query = term;
      axios.get(`${baseUri}?api_key=${apiKey}&query=${store.query}`)
        .then(res => {
          const movies = res.data.results;
          return store.movieList = movies;
        })
    }
  }
}
</script>

<template>
  <header>
    <div class="container">
      <h1> BOOLFLIX </h1>
      <search-bar @search-term="filterMovies"></search-bar>
    </div>
  </header>
  <main class="container">
    <h1> Movie </h1>
    <div class="row">
      <app-card v-if="store.movieList.length" v-for="movie in store.movieList" :key="movie.id" :title="movie.title"
        :subtitle="movie['original_title']" :language="movie['original_language']"
        :voto="movie['vote_average']"></app-card>
    </div>
  </main>
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>
