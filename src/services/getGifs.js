const API_KEY = "ykYGVQVTBnbjAiKb3e6GQ5HySvDCJEqL";

export default function getGifs({ keyword = "panda" }) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const data = response.data;

      if (Array.isArray(data) && data.length > 0) {
        const gifs = data.map((gif) => {
          const { id, images, title } = gif;
          const { url } = images.original;
          return { id, title, url };
        });
        return gifs;
      }
    });
}
