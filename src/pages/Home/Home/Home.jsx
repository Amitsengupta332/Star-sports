import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Feature from "../Features/Feature";
import Feedback from "../Feedback/Feedback";
import Gallary from "../Gallery/Gallary";

 

const Home = () => {
    return (
        <div className="mt-3">
            <Banner></Banner>
            <Gallary></Gallary>
            <Feature></Feature>
            <Category></Category>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;