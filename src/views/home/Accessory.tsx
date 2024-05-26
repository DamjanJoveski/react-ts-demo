type AccessoryProps ={
    name: string,
    image: string,
    description: string
}
export const Accessory = ({name, image, description}: AccessoryProps) => {
    console.log(image)
    return (
        <div className="card w-72 h-72 bg-base-100 shadow-xl image-full">
            <figure><img src={image} alt={name}/></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};