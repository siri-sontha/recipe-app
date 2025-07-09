

export default function Text({className="", size = "md", text="input text", weight="normal"}){

const sizes = {
    sm: "text-xl sm:text-3xl",
    md: "text-2xl sm:text-4xl",
    lg: "text-3xl sm:text-5xl",
};

const weightClasses = {
    bold: "font-bold",
    normal: "font-normal",
    light: "font-light",
};


    return (
        <>
            <p className={`${className} ${sizes[size]} ${weightClasses[weight]} choco-color font-`}>{text}</p>
        </>
    )

}