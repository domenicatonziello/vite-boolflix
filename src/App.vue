<script>
import axios from 'axios';
import { apiKey, baseUri } from './data';
import { store } from './data/store.js';
import ProductionCard from './components/production/ProductionCard.vue';
import SearchBar from './components/SearchBar.vue';
export default {
  components: { SearchBar, ProductionCard },
  data() {
    return {
      store,
      query: '',
    }
  },
  methods: {
    fetchApi(endpoint, collection) {
      const axiosUrl = {
        params: {
          api_key: apiKey,
          query: this.query,
        }
      }
      axios.get(`${baseUri}/${endpoint}`, axiosUrl)
        .then(res => {
          return store[collection] = res.data.results;
        })
    },
    searchProduction(term) {
      this.query = term;
      this.fetchApi('search/movie/', 'movieList');
      this.fetchApi('search/tv/', 'serieList');
    }
  }
}
</script>

<template>
  <header>
    <div class="container">
      <h1> BOOLFLIX </h1>
      <search-bar @search-term="searchProduction"></search-bar>
    </div>
  </header>
  <main class="container">
    <!-- movie -->
    <h1 v-if="store.movieList.length"> Movie </h1>
    <div class="row">
      <production-card v-for="movie in store.movieList" :key="movie.id" :title="movie.title"
        :subtitle="movie['original_title']" :language="movie['original_language']" :voto="movie['vote_average']"
        :image="movie['poster_path']"></production-card>
    </div>
    <!-- serie -->
    <h1 v-if="store.serieList.length"> Serie TV </h1>
    <div class="row">
      <production-card v-for="serie in store.serieList" :key="serie.id" :title="serie.name"
        :subtitle="serie['original_name']" :language="serie['original_language']" :voto="serie['vote_average']"
        :image="serie['poster_path']">
      </production-card>
    </div>
  </main>
</template>
      
<style lang ="scss">
@use './assets/scss/style.scss';
</style>
