import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Gallary from "../Gallery/Gallary";

 

const Home = () => {
    return (
        <div className="mt-3">
            <Banner></Banner>
            <Gallary></Gallary>
            <Category></Category>
        </div>
    );
};

export default Home;