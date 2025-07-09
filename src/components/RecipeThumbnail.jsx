import Icon from "./Icon.jsx";
import Text from "./Text.jsx"

import clock from "../assets/icons/clock-solid.svg"
import easy from "../assets/icons/face-laugh-squint-solid.svg"
import ingredient from "../assets/icons/bowl-rice-solid.svg"

export default function RecipeThumbnail({ className = "", src, mainText = "input text", subText = "input text" }) {

    return (
        <>
            <div className="flex flex-col gap-1.5 hover:shadow-2xl/80 p-3 rounded-2xl">
                <img className="h-72 sm:h-56 w-lg sm:w-lg rounded-2xl border-[1px}" src={src} />
                <div className="flex justify-between">
                    <Text className="text-black capitalize" size="sm" weight="semibold" text={mainText} />
                    <div className="flex gap-1.5">
                        <Icon text="5-min" src={clock} />
                        <Icon text="easy" src={easy} />
                        <Icon text="4-items" src={ingredient} />
                    </div>
                </div>
                <Text className="text-black" size="xs" weight="normal" text={subText} />
            </div>
        </>
    );
};