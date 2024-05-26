const benefits = [
    {
        title: "Boosts Energy Levels",
        description: "Coffee contains caffeine, a natural stimulant that helps you stay alert and improves your energy levels.",
        icon: "☕",
    },
    {
        title: "Rich in Antioxidants",
        description: "Coffee is a great source of antioxidants, which can help protect your cells from damage.",
        icon: "💪",
    },
    {
        title: "Enhances Mental Focus",
        description: "The caffeine in coffee can improve various aspects of brain function, including memory, mood, and reaction times.",
        icon: "🧠",
    },
    {
        title: "May Support Heart Health",
        description: "Regular coffee consumption has been linked to a reduced risk of heart disease.",
        icon: "❤️",
    },
    {
        title: "Can Aid in Weight Management",
        description: "Coffee can help increase your metabolic rate and assist in fat burning.",
        icon: "⚖️",
    },
];
export const Benefits = () => (
    <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Benefits of Coffee</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                    <div key={index} className="bg-white rounded shadow-md p-6">
                        <div className="text-4xl mb-4">{benefit.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                        <p>{benefit.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);