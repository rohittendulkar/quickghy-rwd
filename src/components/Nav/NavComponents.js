import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../globalStyles";
import { FaQuinscape } from "react-icons/fa";

export const Navbar = styled.nav`
	background: #252525;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: sticky;
	top: 0;
	z-index: 999;
`;

export const NavContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	height: 80px;

	${Container}
`;

export const NavLogo = styled(Link)`
	color: #fff;
	justify-self: flex-start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
	font-family: "Righteous", cursive;
`;

export const NavIcon = styled(FaQuinscape)`
	margin-right: 0.5rem;
`;

export const MobIcon = styled.div`
	display: none;

	@media screen and (max-width: 960px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;

	@media screen and (max-width: 960px) {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 90vh;
		position: absolute;
		top: 80px;
		left: ${({ click }) => (click ? 0 : "-100%")};
		opacity: 1;
		transition: all 0.5s ease;
		background: #252525;
	}
`;

export const NavItem = styled.li`
	height: 80px;
	border-bottom: 2px solid transparent;

	&:hover {
		border-bottom: 2px solid #ffc300;
	}

	@media screen and (max-width: 960px) {
		width: 100%;

		&:hover {
			border: none;
		}
	}
`;

export const NavLinks = styled(Link)`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;

	@media screen and (max-width: 960px) {
		text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;

		&:hover {
			color: #ffc300;
			transition: all 0.3s ease;
		}
	}
`;

export const NavItemBtn = styled.li`
	@media screen and (max-width: 960px) {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 120px;
	}
`;

export const NavBtnLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	padding: 8px 16px;
	height: 100%;
	width: 100%;
	border: none;
	outline: none;
`;
