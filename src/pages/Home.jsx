
import Text from '../components/Text.jsx';
import Input from '../components/Input.jsx';
import Button from '../components/Button.jsx';

import banner1 from "../assets/images/banner1.png";
import banner2 from "../assets/images/banner2.png";

export default function App() {

    return (
        <>
            <div className="flex flex-col gap-4 justify-center items-center">
                <img className="w-full h-full lg:h-50" src={banner1} alt="Image" />
                <Text text="Can't Decide What To Cook?" size="lg" weight="bold" />
                <Input placeholder="Enter A Dish or Ingredient Name..." size="lg"/>
                <Button size="md" text="SHOW DISHES" />
                <img className="w-full h-fit lg:h-50 shadow-xl" src={banner2} alt="Image" />
            </div>
        </>
    )

}