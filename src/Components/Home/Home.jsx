import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeatursedJobs from "../FeaturedJobs/FeatursedJobs";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>career hub | home</title>
            </Helmet>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeatursedJobs></FeatursedJobs>
        </div>
    );
};

export default Home;