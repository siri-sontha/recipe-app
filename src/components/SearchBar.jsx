import banner1 from "../assets/images/banner1.png";
import banner2 from "../assets/images/banner2.png";
import search from "../assets/icons/magnifying-glass-solid.svg";

export default function SearchBar() {

    return (
        <>
            <div className="flex flex-col gap-4 justify-center items-center">
                <img className="w-full h-full lg:h-50" src={banner1} alt="Image" />
                <p className="teal-color text-3xl sm:text-5xl font-bold">Can't Decide What To Cook?</p>
                <div className="relative w-full max-w-lg sm:max-w-3xl lg:max-w-4xl">
                    <input className="border-2 border-black shadow-lg shadow-neutral-400 py-3 pl-6 w-full placeholder-black font-bold mx-2 rounded-full cursor-pointer hover:ring-1 hover:shadow-2xs focus:outline-none" type="text" placeholder="Enter A Dish Or Ingredient Name..." />
                    <img className="absolute right-6 bottom-4 w-6" src={search} alt="search" />
                </div>
                <button className="py-2.5 px-12 bg-secondary white-color border-2 border-white text-xl font-bold rounded-full hover:border-[#622e1e]">Show Dishes</button>
                <img className="w-full h-fit lg:h-50 shadow-xl" src={banner2} alt="Image" />
            </div>
        </> 
    )

};