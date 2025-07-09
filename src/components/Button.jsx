
export default function Button({ className = "", size = "md", text = "input text"}) {

    const sizes = {
        sm: "py-2 px-8",
        md: "py-2.5 px-12",
        lg: "py-2.5 px-16",
    };

    return (
        <>
            <button className={`${className} ${sizes[size]} bg-[#622e1e] white-color border-2 border-white text-xl font-bold rounded-full hover:bg-[#904424]`}>{text}</button>
        </>
    )

}