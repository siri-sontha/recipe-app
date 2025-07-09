import Text from "./Text.jsx"

export default function ExploreCard({ className = "", src, mainText="input text", subText="input text"}) {

    return (
        <>
            <div className="flex flex-col gap-1.5">
                <img className="h-72 w-lg sm:w-lg rounded-2xl border-[1px}" src={src} />
                <Text className="text-black capitalize" size="sm" weight="semibold" text={mainText} />
                <Text className="text-black" size="xs" weight="normal" text={subText} />
            </div>
        </>
    )

}