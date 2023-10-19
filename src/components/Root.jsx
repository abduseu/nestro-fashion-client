import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Root = () => {
    return (
        <div>
            <header className="xl:container mx-auto">
                <div className="mx-5 my-6">
                    <Header></Header>
                </div>
            </header>
            <main className="xl:container mx-auto">
                <div className="mx-5 my-6">
                    <Outlet></Outlet>
                </div>
            </main>
            <footer className="bg-black text-white">
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Root;