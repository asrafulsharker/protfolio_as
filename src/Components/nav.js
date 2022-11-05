import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../style/nav.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3 className="logo">Asraful</h3>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">Protfolio</a>
				<a href="/#">Resume</a>
				<a href="/#">Testimonial</a>
				<a href="/#">Blog</a>
				<a href="/#">Contacts</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;