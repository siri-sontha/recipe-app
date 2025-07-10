import Text from "../components/Text";
import rec1 from "../assets/images/recipes/rec1.png";

const group = {
 ingredients: ["Curd", "Besan(Gram Flour)", "Water", "Turmeric", "Red Chilli Powder", "Salt", "Ginger (grated)", "Green Chilies (chopped)", "Hing (Asafoetida"];
 quantities: ["1 cup", "2-3 tbsp", "2-3 cups", "1/4 tsp", "1/4 tsp", "As Required", "1 tsp", "1-2", "A pinch"];
}

export default function Recipe() {

    return (
        <>
            <Text className="mx-auto max-w-full w-6xl pl-2 text-[#622e1e] capitalize mt-14 mb-6" text="Recipe: Indian Style Tadka Kadhi Chawal" size="lg" weight="bold" />
            <img className="mx-auto mb-6 w-6xl h-[20rem] md:h-[30rem] lg:h-[36rem] rounded-4xl border" src={rec1} />
            <Text className="mx-auto max-w-full w-6xl pl-2 text-[#622e1e] mb-6"
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
            <table className="mx-auto max-w-full w-lg text-[#622e1e] mb-6 shadow-2xl">
                <tbody>
                {/* <tr>
                    {ingredients.map((ingredient) => (
                        <td className="text-base sm:text-xl font-semibold text-[#622e1e] text-left border border-gray-300 px-4 py-2">{ingredient}</td>
                    ))}
                </tr>
                <tr>
                    {quantities.map((quantity) => (
                        <td className="text-base sm:text-xl font-semibold text-left border border-gray-300 px-4 py-2">{quantity}</td>
                    ))}
                </tr> */}
                {group.ingredients.map((ingredient) => (
  <tr>
    <td className="text-base sm:text-xl font-semibold text-[#622e1e] text-left border border-gray-300 px-4 py-2">
      {ingredient}
    </td>
    <td className="text-base sm:text-xl font-semibold text-left border border-gray-300 px-4 py-2">
      {group.quantities}
    </td>
  </tr>
))}

                </tbody>
            </table>

        </>
    );
};