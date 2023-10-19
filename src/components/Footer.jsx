import { AiFillThunderbolt } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="footer justify-between py-10">
            <aside>
                <h2 className="text-4xl font-bold flex items-center gap-2"><AiFillThunderbolt/>NESTRO</h2>
                <p>Nestro Fashion Ltd.<br />Selling fashionable clothing since 1992</p>
            </aside>
            <nav>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </div>
    );
};

export default Footer;