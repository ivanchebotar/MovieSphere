<template>
  <div class="search-bar">
    <input type="search" v-model="searchQuery" placeholder="What movie are you looking for?" />
  </div>
  <ul class="search-results" v-if="movies.length > 0">
    <li v-for="movie in movies" :key="movie.imdbID" class="movie-item">
      <img
        :src="movie.Poster !== 'N/A' ? movie.Poster : placeholderImage"
        :alt="movie.Title"
      />
      <div class="movie-info">
        <h3>{{ movie.Title }}</h3>
        <p>{{ movie.Year }}</p>
      </div>
    </li>
  </ul>
  <p v-else-if="searchQuery.trim() !== '' && !isLoading" class="no-results">No results found.</p>
  <p v-if="isLoading" class="loading">Loading...</p>
</template>

<script>

export default {
  data() {
    return {
      searchQuery: "",
      movies: [],
      isLoading: false,
      placeholderImage: "https://via.placeholder.com/56x75?text=No+Poster",
    };
  },
  watch: {
    searchQuery(newQuery) {
      if (newQuery.trim() === "") {
        this.movies = [];
      } else {
        this.fetchMovies(newQuery);
      }
    },
  },
  methods: {
    async fetchMovies(query) {
      const apiKey = "b19f6f41";
      const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`;
      this.isLoading = true;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === "True") {
          this.movies = data.Search;
        } else {
          this.movies = [];
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
        this.movies = [];
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.search-results {
  background-color: rgba($secondary, 0.1);
  margin: 20px 0 0;
  border-radius: 8px;
  max-height: 300px;
  overflow-y: auto;
  position: absolute;
  top: 150px;
  left: 0;
  right: 0;

  li {
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 5px;
    display: flex;
    flex-wrap: wrap;

    img {
      width: 56px;
      height: 75px;
      object-fit: cover;
      border-radius: 4px;
      margin-right: 10px;
    }
  }
}

.movie-info {
  width: 70%;
  text-align: left;

  h3 {
    margin: 0;
    font-size: 18px;
    color: $secondary;
  }
  
  p {
    margin: 0;
  }
}

.no-results,
.loading {
  color: $secondary;
  font-size: 16px;
  text-align: center;
  position: absolute;
  top: 150px;
  left: 0;
  right: 0;
}

</style>
