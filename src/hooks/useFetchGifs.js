//Custom Hook

import { useEffect, useState } from "react";
import { getGifs } from "../components/helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)


    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, []);


    return {
        //Cuando tienes una propiedad que tiene el mismo nombre que una variable o sea images: images se deja
        //solo con el nombre de la propiedad:
        images,
        isLoading,
    }
}
