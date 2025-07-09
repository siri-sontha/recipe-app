import Text from "./Text.jsx"

export default function Icon({ className = "", src, text="input text"}) {

    return (
        <>
            <div className="flex flex-col">
                <img className="h-5" src={src} />
                <Text className="text-black" size="xxs" weight="bold" text={text} />
            </div>
        </>
    );
};