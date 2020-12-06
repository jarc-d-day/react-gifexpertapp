
//Video 77. Helpers - getGifs

export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=5&api_key=27NDDX86NxPllfcI8LxZqs2VkKbNOcrj`
    // encodeURI: Encodes a text string as a valid Uniform Resource Identifier (URI)

    const resp = await fetch( url );
    
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url /* el signo de interrogacion
            se usa para asegurarse que se utilice la imagen solamente si
            hay alguna disponible, esto lo debe asegurar la api desde donde
            estemos haciendo la peticion */
        }
    })

    return gifs;
}