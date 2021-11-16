import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
import {
	Navbar,
	NavContainer,
	NavLogo,
	NavIcon,
	MobIcon,
	NavMenu,
	NavItem,
	NavLinks,
	NavItemBtn,
	NavBtnLink,
} from "./NavComponents";

const Nav = () => {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);
	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener("resize", showButton);

	return (
		<div>
			<IconContext.Provider value={{ color: "#ffc300" }}>
				<Navbar>
					<NavContainer>
						<NavLogo to="/" onClick={closeMobileMenu}>
							<NavIcon />
							QuickGhy
						</NavLogo>
						<MobIcon onClick={handleClick}>
							{click ? <FaTimes /> : <FaBars />}
						</MobIcon>
						<NavMenu onClick={handleClick} click={click}>
							<NavItem>
								<NavLinks to="/">Home</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="/services">Services</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="/products">Products</NavLinks>
							</NavItem>
							<NavItemBtn>
								{button ? (
									<NavBtnLink to="/">
										<Button primary>Sign Up</Button>
									</NavBtnLink>
								) : (
									<NavBtnLink to="/">
										<Button bigfont primary>
											Sign Up
										</Button>
									</NavBtnLink>
								)}
							</NavItemBtn>
						</NavMenu>
					</NavContainer>
				</Navbar>
			</IconContext.Provider>
		</div>
	);
};

export default Nav;
