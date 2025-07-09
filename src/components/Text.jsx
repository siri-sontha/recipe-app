export default function Text({className="", size = "md", text="input text", weight="normal"}){

const sizes = {
    xs: "text-xs sm:text-base",
    sm: "text-base sm:text-xl",
    md: "text-xl sm:text-3xl",
    lg: "text-3xl sm:text-5xl",
};

const weightClasses = {
    bold: "font-bold",
    semibold: "font-semibold",
    normal: "font-normal",
    light: "font-light",
};

    return (
        <>
            <p className={`${className} ${sizes[size]} ${weightClasses[weight]}`}>{text}</p>
        </>
    );
};