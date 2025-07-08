import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";

export default function SearchBar() {

    return (
        <>
            <div className="flex flex-col gap-4 justify-center items-center">
                <img className="w-full h-full lg:h-50" src={banner1} alt="Image" />
                <p className="teal-color text-4xl sm:text-5xl font-bold">Can't Decide What To Cook?</p>
                <input className="border-2 border-white shadow-lg shadow-neutral-400 py-4 pl-8 w-full max-w-4xl placeholder-white font-bold mx-2 rounded-full bg-neutral-400" type="text" placeholder="Enter A Dish Or Ingredient Name..." />
                <button className="py-3 px-10 bg-secondary white-color border-2 border-white text-xl font-bold rounded-full">Show Dishes</button>
                <img className="w-full h-fit lg:h-50" src={banner2} alt="Image" />
            </div>
        </>
    )

};