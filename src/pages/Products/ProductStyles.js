import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductHeading = styled.h1`
	font-size: clamp(1.5rem, 0.5vw, 2.5rem);
	text-align: center;
	margin-bottom: 2.5rem;
`;

export const ProductWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	margin: 0 auto;
	color: #fff;
	padding: 50px;
	background: #150f0f;
`;

export const ProductCard = styled.div`
	padding-top: 1rem;
	margin: 1rem;
	line-height: 1;
	width: 300px;
	background: #252525;
	border-radius: 8px;
`;

export const ProductImg = styled.img`
	margin-left: 1.5rem;
	height: 250px;
	width: 250px;
	max-width: 100%;
	box-shadow: 8px 8px #fdc500;
`;
export const ProductInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	text-align: center;
`;
export const ProductTitle = styled.h2`
	font-weight: 400;
	font-size: 1.5rem;
`;
export const ProductDesc = styled.p`
	margin-bottom: 1rem;
	text-transform: capitalize;
`;
export const ProductPrice = styled.p`
	margin-bottom: 1rem;
	font-size: 2rem;
`;
export const DetailLink = styled(Link)`
	border-radius: 4px;
	background: ${({ primary }) => (primary ? "#FF5733" : "#FFC300")};
	white-space: nowrap;
	padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
	color: #fff;
	font-size: ${({ bigfont }) => (bigfont ? "20px" : "16px")};
	outline: none;
	border: none;
	cursor: pointer;

	&:hover {
		transition: all 0.3s ease-out;
		background: #fff;
		background: ${({ primary }) => (primary ? "#FFC300" : "#FF5733")};
	}

	@media screen and (max-width: 960px) {
		width: 100%;
	}
`;
