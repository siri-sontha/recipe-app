import search from "../assets/icons/magnifying-glass-solid.svg"


export default function Input({ className = "", size = "md", placeholder = "input text" }) {

    const sizes = {
        md: "w-lg sm:w-2xl lg:w-3xl",
        lg: "w-lg sm:w-3xl lg:w-4xl",
    };

    return (
        <>
            <div className="relative">
                <input className={`${className} ${sizes[size]} border-2 border-black shadow-lg shadow-neutral-400 py-3 pl-6 placeholder-black font-bold mx-2 rounded-full cursor-pointer hover:ring-1 hover:shadow-2xs hover:bg-[#fbc63f] focus:outline-none`} type="text" placeholder={placeholder} />
                <img className="absolute right-6 bottom-4 w-6" src={search} alt="search" />
            </div>
        </>
    )

}