import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeatursedJobs from "../FeaturedJobs/FeatursedJobs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeatursedJobs></FeatursedJobs>
        </div>
    );
};

export default Home;