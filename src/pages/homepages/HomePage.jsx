import Banner from "../../components/common/Banner";
import Categories from "../../components/layouts/Categories";
import Stats from "./Stats";

const HomePage = () => {
    return (
        <>
        <Banner></Banner>
        <section className="max-w-screen-2xl mx-auto px-5">
            <Stats></Stats>
            <div className="my-10">
            <Categories></Categories>
            </div>
        </section>
        </>
    );
};

export default HomePage;