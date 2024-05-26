import {useEffect, useState} from "react";
import endpoint from "../../consts.ts";
import {Recipe} from "./Recipe.tsx";
interface RecipesProps {
    type: string
}
export const Recipes = ({type}: RecipesProps) => {

    const [data, setData] = useState([]);
    const getData = async () => {
        try{
            const response = await fetch(endpoint+type)
            if(response.ok){
                return response.json();
            }
        }
        catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        getData().then((response) => setData(response));
    }, [getData]);

    return (
        <div className="flex flex-col mb-5 gap-10 w-[90%] mx-auto mt-24">
            {data.map((recipe: { title: string; description: string; image: string; ingredients: string[] }) => (
                <Recipe
                    key={recipe.title}
                    title={recipe.title}
                    description={recipe.description}
                    image={recipe.image}
                    ingredients={recipe.ingredients}
                />
            ))}
        </div>
    );

};