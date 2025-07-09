
// UI & Components

import Text from '../components/Text.jsx';
import Input from '../components/Input.jsx';
import Button from '../components/Button.jsx';
import ExploreCard from '../components/ExploreCard.jsx';
import RecipeThumbnail from '../components/RecipeThumbnail.jsx';

// Landing Section Images

import banner1 from "../assets/images/banner1.png";
import banner2 from "../assets/images/banner2.png";

// Explore Section Images

import exp1 from "../assets/images/exp1.png";
import exp2 from "../assets/images/exp2.png";
import exp3 from "../assets/images/exp3.png";
import exp4 from "../assets/images/exp4.png";

export default function App() {

    return (
        <>

            <section className="pb-14">

                <div className="flex flex-col gap-4 justify-center items-center">
                    <img className="w-full h-full lg:h-[12.5rem]" src={banner1} alt="Image" />
                    <Text className="choco-color" text="Can't Decide What To Cook?" size="lg" weight="bold" />
                    <Input placeholder="Enter a Dish or Ingredient or Flavor you want to try..." size="lg" />
                    <Button size="md" text="Show Dishes" />
                    <img className="w-full h-full lg:h-[12.5rem] shadow-xl" src={banner2} alt="Image" />
                </div>

            </section>

            <section className="">
                <Text className="pb-14 pl-5 choco-color text-center capitalize" text="Handpicked Just for You - Top 6 Must-Try Dishes ->" size="md" weight="bold" />

                <div className="pb-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto justify-items-center">
                    <RecipeThumbnail src={exp3} mainText="hostel hustlers" subText="Quick, filling vegetarian meals perfect for students & workaholics." />
                    <RecipeThumbnail src={exp3} mainText="hostel hustlers" subText="Quick, filling vegetarian meals perfect for students & workaholics." />
                    <RecipeThumbnail src={exp1} mainText="hostel hustlers" subText="Quick, filling vegetarian meals perfect for students & workaholics." />
                    <RecipeThumbnail src={exp1} mainText="hostel hustlers" subText="Quick, filling vegetarian meals perfect for students & workaholics." />
                    <RecipeThumbnail src={exp2} mainText="hostel hustlers" subText="Quick, filling vegetarian meals perfect for students & workaholics." />
                    <RecipeThumbnail src={exp2} mainText="hostel hustlers" subText="Quick, filling vegetarian meals perfect for students & workaholics." />
                </div>
            </section>

            <section className="">

                <Text className="pb-14 pl-5 choco-color text-center" text="Swipe, Cook, Repeat - Because Good Food Fixes Everything" size="md" weight="bold" />

                <div className="pb-14 grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-6xl mx-auto justify-items-center">
                    <ExploreCard src={exp1} mainText="hostel hustlers" subText="Quick, filling vegetarian meals perfect for students & workaholics." />
                    <ExploreCard src={exp2} mainText="mid night cravings" subText="2 AM Late-night bites that are easy, satisfying, & comforting." />
                    <ExploreCard src={exp3} mainText="what for breakfast?" subText="Wholesome, energizing morning meals to kick-start day with flavor." />
                    <ExploreCard src={exp4} mainText="all time favorite-easy snacks" subText="Tried-&-loved snacks made in minutes for anytime munching." />
                </div>

            </section>
        </>
    )

}