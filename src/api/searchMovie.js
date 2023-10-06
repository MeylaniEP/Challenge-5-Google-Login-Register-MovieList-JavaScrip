export default async function searchMovies(q) {
    const option = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDJjOWMxZTc4YzljNTZhNjA4YTAxMmFhODI4MWZmMiIsInN1YiI6IjY1MTQyNDBiYmRkNTY4MDBjN2NlZmYwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XTsX5M91f3mZe_rDHE85Ec0emA6UElphl5YePmcpcuU",
      },
    };
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${q}&page=1&api_key=ad2c9c1e78c9c56a608a012aa8281ff2`,
        option
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  