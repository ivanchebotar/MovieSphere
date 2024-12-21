<template>
  <section class="movie-section">
    <div class="container">
      <router-link class="btn btn--back" to="/">← Back to Search</router-link>
      <div class="movie" v-if="movie">
        <div class="movie-card">
          <img class="movie-card__img" :src="movie.Poster !== 'N/A' ? movie.Poster : placeholderImage" :alt="movie.Title" />
          <div class="movie-card__description">
            <h2 class="movie-card__title">{{ movie.Title }}</h2>
            <div class="movide-card__descriprion-ratings">
              <p>
                <img src="@/assets/images/icon-01.svg" alt="IMDB"> 
                {{ movie.imdbRating }}
              </p>
              <p>
                <img src="@/assets/images/icon-02.svg" alt="Rotten Tomatoes">
                {{ movie.Ratings[1]?.Value }}</p>
            </div>
            <ul class="movide-card__descriprion-list">
              <li><p><strong>Year:</strong> {{ movie.Year }}</p></li>
              <li><p><strong>Genre:</strong> {{ movie.Genre }}</p></li>
              <li><p><strong>Director:</strong> {{ movie.Director }}</p></li>
              <li><p><strong>Actors:</strong> {{ movie.Actors }}</p></li>
              <li><p><strong>Runtime:</strong> {{ movie.Runtime }}</p></li>
              <li><p><strong>Language:</strong> {{ movie.Language }}</p></li>
              <li><p><strong>Country:</strong> {{ movie.Country }}</p></li>
              <li><p><strong>Awards:</strong> {{ movie.Awards }}</p></li>
            </ul>
          </div>
        </div>
        <h3>What is the film {{ movie.Title }} about:</h3>
        <p><strong>Plot:</strong> {{ movie.Plot }}</p>
      </div>
      <p v-else-if="isLoading">Loading...</p>
      <p v-else class="error">Movie details not found.</p>
    </div>
  </section>
</template>


<script>
export default {
  props: ['id'],
  data() {
    return {
      movie: null,
      isLoading: false,
      placeholderImage: "https://via.placeholder.com/300x450?text=No+Poster",
    };
  },
  async created() {
    const apiKey = "b19f6f41";
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${this.id}&plot=full`;

    this.isLoading = true;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === "True") {
        this.movie = data;
      } else {
        this.movie = null;
      }
    } catch (error) {
      console.error("Error fetching movie details:", error);
      this.movie = null;
    } finally {
      this.isLoading = false;
    }
  },
};
</script>


<style lang="scss">
.movie-section {
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;

  &:after {
    content: "";
    height: 100%;
    width: 100%;
    background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
  
  &:before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-image: url('@/assets/images/img02.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -2;
    background-color: rgba($secondary, 0.1);
    border-radius: 10px;
  }
}

.movie-card {
  display: flex;
  flex-wrap: wrap;
  
  @include media('>=tablet') {
    align-items: start;
    flex-direction: row-reverse;
    justify-content: space-between;
    margin: 0 0 40px;

  }

  &__img {
    border-radius: 10px;
    margin: 0 0 30px;

    @include media('>=tablet') {
      margin: 0 0 0 40px;
    }
  }

  &__description {
    width: 100%;
    // padding: 60px 0 0;

    @include media('>=tablet') {
      width: 50%;
    }
  }
}

.movide-card__descriprion-ratings {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 -20px 40px;

  p {
    display: flex;
    align-items: center;
    padding: 0 20px;
    
    img {
      width: 20px;
      margin: 0 10px 0 0;
    }
  }
}

.movide-card__descriprion-list {
  margin: 0 0 40px;

  p {
    margin: 0 0 10px;
  }
}

.btn--back {
  margin: 0 0 30px;

  @include media('>=tablet') {
    margin: 0 0 60px;
  }
}


</style>