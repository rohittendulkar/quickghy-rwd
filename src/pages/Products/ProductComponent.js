import React from "react";
import { useSelector } from "react-redux";

import {
	ProductHeading,
	ProductWrapper,
	ProductCard,
	ProductImg,
	ProductInfo,
	ProductTitle,
	ProductDesc,
	ProductPrice,
	DetailLink,
} from "./ProductStyles";

const ProductComponent = () => {
	const products = useSelector((state) => state.allProducts.products);
	const renderList = products.map((product) => {
		const { id, title, image, price, category } = product;
		return (
			<ProductWrapper key={id}>
				<ProductCard>
					<ProductHeading>{title}</ProductHeading>
					<ProductImg src={image} alt={title} />
					<ProductInfo>
						<ProductTitle>Buy {title}</ProductTitle>
						<ProductDesc>{category}</ProductDesc>
						<ProductPrice>$ {price}</ProductPrice>
						<DetailLink to={`/products/${id}`}>See Details</DetailLink>
					</ProductInfo>
				</ProductCard>
			</ProductWrapper>
		);
	});
	return <>{renderList}</>;
};

export default ProductComponent;
