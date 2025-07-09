import Text from "./Text.jsx"

export default function ExploreCard({ className = "", src, mainText="input text", subText="input text"}) {

    return (
        <>
            <div className="flex flex-col gap-2 hover:shadow-2xl/80 p-4 rounded-2xl">
                <img className="h-72 w-lg sm:w-lg rounded-2xl border-[1px}" src={src} />
                <div className="flex justify-between">
                <Text className="text-black capitalize" size="sm" weight="semibold" text={mainText} />
                <Text className="text-[#d87f19]" size="xs" weight="bold" text="show recipes ->" />
                </div>
                <Text className="text-black" size="xs" weight="normal" text={subText} />
            </div>
        </>
    );
};