
export default function Button({ className = "", size = "md", text = "input text"}) {

    const sizes = {
        sm: "py-2 px-6 text-xs",
        md: "py-2.5 px-12 text-lg",
        lg: "py-2.5 px-16 text-xl",
    };

    return (
        <>
            <button className={`${className} ${sizes[size]} bg-[#622e1e] uppercase white-color border-2 border-white font-bold rounded-full hover:bg-[#904424]`}>{text}</button>
        </>
    )

}