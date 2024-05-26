type RecipeProps = {
    title: string,
    description: string,
    image: string,
    ingredients: string[],
}
export const Recipe = ({title, description, image, ingredients}: RecipeProps) => {
    return (
        <div className="card w-[70%] lg:w-[50%] md:w-[60%] lg:card-side bg-base-300 shadow-xl mx-auto">
            <figure className='w-[100%] lg:w-[50%] h-[50%] lg:h-[100%]'><img src={image} alt={title} /></figure>
            <div className="card-body">
                <h2 className="card-title">{<title></title>}</h2>
                <ul>
                    {ingredients.map((ingredient: string, index) => {
                        return <li key={index}>{ingredient}</li>
                    })}
                </ul>
                <p>{description}</p>
            </div>
        </div>
    );
};