import React, { useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	selectedProduct,
	removeSelectedProduct,
} from "../../components/redux/actions/ProductActions";
import {
	Heading,
	Img,
	ImgWrapper,
	InfoCol,
	InfoRow,
	InfoSec,
	Subtitle,
	TextWrapper,
	TopLine,
} from "../../components/InfoSection/InfoComponents";
import { Button, Container } from "../../globalStyles";

const ProductDetail = () => {
	const product = useSelector((state) => state.product);
	const { image, title, price, category, description } = product;
	const { productId } = useParams();
	const dispatch = useDispatch();
	console.log(product);

	const fetchProductDetail = async () => {
		const response = await axios
			.get(`https://fakestoreapi.com/products/${productId}`)
			.catch((err) => {
				console.log("Err", err);
			});

		dispatch(selectedProduct(response.data));
	};

	useEffect(() => {
		if (productId && productId !== "") fetchProductDetail();
		return () => {
			dispatch(removeSelectedProduct());
		};
	}, [productId]);

	return (
		<InfoSec>
			{Object.keys(product).length === 0 ? (
				<Img
					style={{
						width: "500px",
						height: "500px",
						marginLeft: "550px",
						marginRight: "auto",
					}}
					src={require("../../images/Infinityloader.svg")}
					alt="loader"
				/>
			) : (
				<Container>
					<InfoRow imgStart="false">
						<InfoCol>
							<TextWrapper>
								<TopLine lightTopLine>{category}</TopLine>
								<Heading lightText>{title}</Heading>
								<Subtitle lightTextDesc>{description}</Subtitle>
								<Button big fontBig primary>
									$ {price}
								</Button>
							</TextWrapper>
						</InfoCol>
						<InfoCol>
							<ImgWrapper start="false">
								<Img src={image} alt={title} />
							</ImgWrapper>
						</InfoCol>
					</InfoRow>
				</Container>
			)}
		</InfoSec>
	);
};

export default ProductDetail;
