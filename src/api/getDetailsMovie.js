export default async function getDetailsMovie({params}) {
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
        `https://api.themoviedb.org/3/movie/${params.id}`,
      option
    );
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error(error);
  }
}
