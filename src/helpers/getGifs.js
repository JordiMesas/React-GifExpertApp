export const getGifs = async (category) => {
    const url =
        `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=6gKennuh1QLSSSPPSUB5tHDHetywHd0F`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            // se pone delante de images "?" para poner la condiciones de que se use url si trae la api
            url: img.images?.downsized_medium.url,
        };
    });

    return gifs;

    
};