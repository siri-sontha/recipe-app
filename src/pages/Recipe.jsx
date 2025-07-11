import Text from "../components/Text";
import rec1 from "../assets/images/recipes/rec1.png";

const tableClass = [
    { ingredient: "Curd", quantity: "1 cup" },
    { ingredient: "Besan (Gram Flour)", quantity: "2-3 tbsp" },
    { ingredient: "Water", quantity: "2-3 cups" },
    { ingredient: "Turmeric", quantity: "1/4 tsp" },
    { ingredient: "Red Chilli Powder", quantity: "1/4 tsp" },
    { ingredient: "Salt", quantity: "As Required" },
    { ingredient: "Ginger (grated)", quantity: "1 tsp" },
    { ingredient: "Green Chilies (chopped)", quantity: "1-2" },
    { ingredient: "Hing (Asafoetida)", quantity: "A pinch" },
];


export default function Recipe() {

    return (
        <>

            <img className="w-full h-[20rem] sm:h-[30rem] lg:h-screen border" src={rec1} />

            <Text className="mx-auto max-w-full w-6xl pl-2 text-[#622e1e] capitalize mt-6 mb-6"
                text="Indian Style Tadka Kadhi Chawal"
                size="lg" weight="bold" />
            <Text className="mx-auto max-w-full w-6xl pl-2 text-black mb-6"
                text="Creamy, tangy kadhi simmered to perfection, it is infused with earthy spices. Just before serving, it's crowned with a smoking-hot ghee tadka — mustard seeds, garlic, red chilies, and a hint of hing dancing in the pan — then poured over the kadhi with a loud sizzle. Paired with fluffy basmati rice and a crispy papad on the side, this soulful North Indian classic is comfort food at its absolute best — warm, spicy, nostalgic, and impossible to resist."
                size="sm" weight="bold" />
            <Text className="mx-auto max-w-full w-6xl pl-2 text-[#d87f19] mb-6"
                text="READ MORE ->"
                size="sm" weight="bold" />
            {/* <Text className="mx-auto max-w-full w-6xl pl-2 text-[#622e1e] mb-6" 
            text="Creamy, tangy kadhi simmered to perfection, it is infused with earthy spices. Just before serving, it's crowned with a smoking-hot ghee tadka — mustard seeds, garlic, red chilies, and a hint of hing dancing in the pan — then poured over the kadhi with a loud sizzle. Paired with fluffy basmati rice and a crispy papad on the side, this soulful North Indian classic is comfort food at its absolute best — warm, spicy, nostalgic, and impossible to resist." 
            size="sm" weight="bold" /> */}

            <Text className="mx-auto max-w-full w-6xl pl-2 text-[#622e1e] mb-6"
                text="Ingredients :"
                size="md" weight="bold" />
            <table className="mx-auto max-w-full w-xl mb-6 rounded-2xl bg-[#daedf9]">
                <tbody>
                    {tableClass.map((item, i) => (
                        <tr key={i} className="border-b border-gray-400 last:border-none">
                            <td className="text-base sm:text-lg font-semibold text-neutral-900 text-left px-14 py-2">
                                {item.ingredient}
                            </td>
                            <td className="text-base sm:text-lg font-semibold text-black text-left px-4 py-2">
                                {item.quantity}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};