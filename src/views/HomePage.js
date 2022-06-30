import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import Slider from "../components/Slider/Slider";

export default function HomePage() {

    return (
        <div className="App">
            <Slider />
            <ItemListContainer />
        </div>
    )
}