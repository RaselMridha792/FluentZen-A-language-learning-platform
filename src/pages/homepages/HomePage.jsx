import Banner from "../../components/common/Banner";
import Stats from "./Stats";

const HomePage = () => {
    return (
        <>
        <Banner></Banner>
        <section className="max-w-screen-2xl mx-auto px-5">
            <Stats></Stats>
        </section>
        </>
    );
};

export default HomePage;