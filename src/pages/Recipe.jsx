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

const recipeSteps = [
  {
    step: "Make the Kadhi Base",
    description: `In a large mixing bowl: Add 1 cup curd (sour curd gives better taste).\nAdd 3–4 tbsp besan (gram flour). Add ¼ tsp turmeric powder, ½ tsp red chili powder,\nand salt to taste. Whisk well until smooth, with no lumps. Gradually add 2–3 cups\nwater and mix to make a thin, lump-free kadhi mixture.`
  },
  {
    step: "Cook the Kadhi",
    description: `Pour the mixture into a deep pan or kadhai.\nTurn heat to medium, stir continuously till it comes to a boil (this prevents curd from splitting).\nOnce it boils, reduce heat to low and let it simmer for 30–40 minutes, stirring occasionally.\nOptional: Add 1 tsp grated ginger and 1–2 green chilies while it simmers for flavor.`
  }
];

const about = [
    {
        para: `Creamy, tangy kadhi simmered to perfection, it is infused with earthy spices. Just before serving, it's crowned with a smoking-hot ghee tadka — mustard seeds, garlic, red chilies, and a hint of hing dancing in the pan — then poured over the kadhi with a loud sizzle. Paired with fluffy basmati rice and a crispy papad on the side, this soulful North Indian classic is comfort food at its absolute best — warm, spicy, nostalgic, and impossible to resist.`
    },
    {
        para: `Kadhi Chawal is a beloved North Indian comfort food that brings warmth, nostalgia, and simplicity to the plate. The dish consists of kadhi, a spiced yogurt-based gravy thickened with besan (gram flour), and chawal, which refers to plain steamed rice. The kadhi is slow-cooked to perfection, allowing the tanginess of the yogurt to blend with spices like turmeric, red chili, and asafoetida (hing). Often, soft besan fritters called pakoras are added, soaking up the creamy gravy and adding texture to the dish.`
    },
    {
        para: `What truly sets kadhi apart is the "tadka" (tempering) poured on top just before serving — a sizzling mix of ghee, mustard seeds, cumin, garlic, and dried red chilies. This aromatic final touch infuses the kadhi with deep, earthy flavors. Served hot over fluffy basmati rice, sometimes with a side of crispy papad or pickles, Kadhi Chawal is more than just food — it’s a heartfelt connection to home, tradition, and soul-soothing simplicity.`
    }
];

export default function Recipe() {

  return (
    <>
      {/* Image */}
      <img className="w-full h-[20rem] sm:h-[30rem] lg:h-screen border" src={rec1} />

      {/* Description */}
      <Text className="mx-auto max-w-full w-6xl pl-2 text-[#622e1e] capitalize mt-14 mb-6"
        text="Indian Style Tadka Kadhi Chawal"
        size="lg" weight="semibold" />
        <Text className="mx-auto max-w-full w-6xl pl-2 text-[#d87f19] mb-6"
        text="Skip to recipe ->"
        size="sm" weight="bold" />
        { about.map((item, i) => (
            <Text key={i} className="mx-auto max-w-full w-6xl pl-2 text-black mb-6"
        text={item.para}
        size="sm" weight="normal" />
        ))}

      {/* Ingredients */}
      <Text className="text-center mx-auto max-w-full w-6xl pl-2 text-[#622e1e] mb-8 mt-14"
        text="Ingredients"
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

      {/*Preparation*/}
      <Text className="text-center mx-auto max-w-full w-6xl pl-2 text-[#622e1e] mb-8 mt-14"
        text="Preparation"
        size="md" weight="bold" />
      <div className="px-10 py-10 mx-auto max-w-fit mb-6 rounded-2xl bg-[#daedf9]">
        {recipeSteps.map((item, i) => (
          <div key={i}>
            <Text className="block mx-auto max-w-full pl-2 text-black mb-6 mt-6"
              text={`Step ${i + 1}: ${item.step}`}
              size="md" weight="bold" />

            <ul className="list-disc">
              {item.description.split('\n').map((line, idx) => (
                <li key={idx} className="text-black font-semibold">{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </>
  );
};