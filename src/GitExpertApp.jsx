import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GitExpertApp = () => {

    const [categories, setCategories] = useState(['Anime']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        // console.log(newCategory);
        setCategories([newCategory, ...categories]);
    };
    return (
        <>

            <h1>GitExpertApp</h1>

            <AddCategory
                //setCategories={ setCategories } 
                onNewCategory={(event) => onAddCategory(event)}
            />

            {
                categories.map(category => (
                    <GifGrid key={category}
                        category={category} />)
                )
            }

        </>
    )
}
