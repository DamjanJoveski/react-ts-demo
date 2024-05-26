import {Accessory} from "./Accessory.tsx";
import coffee_grinder from "../../assets/coffee-grinder.webp"
import french_press from "../../assets/french-press.jpeg"
import espresso_machine from "../../assets/espresso-machine.webp"
export const Accessories = () => {
    const accessories = [
        {
            name: "Coffee Grinder",
            image: coffee_grinder,
            description: "Grind your own fresh coffee beans for a superior coffee experience.",
        },
        {
            name: "French Press",
            image: french_press,
            description: "Brew rich and flavorful coffee with a classic French press.",
        },
        {
            name: "Espresso Machine",
            image: espresso_machine,
            description: "Make cafe-quality espresso drinks at home with a high-quality espresso machine.",
        },
    ];

    return (
        <div className="mx-auto">
            <h1 className="text-2xl text-center my-8">Coffee Accessories</h1>
            <div className="flex flex-wrap justify-center gap-32">
                {accessories.map(({ name, image, description }, index) => (
                    <div key={index} className="card w-64 m-5">
                        <Accessory name={name} image={image} description={description} />
                    </div>
                ))}
            </div>
        </div>
    );
};