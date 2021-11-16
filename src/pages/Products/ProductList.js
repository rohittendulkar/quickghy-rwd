import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../components/redux/actions/ProductActions";
import ProductComponent from "./ProductComponent";

const ProductList = () => {
	const products = useSelector((state) => state);
	const dispatch = useDispatch();
	const fetchProducts = async () => {
		const response = await axios
			.get("https://fakestoreapi.com/products")
			.catch((err) => {
				console.log("Err", err);
			});
		dispatch(setProducts(response.data));
	};

	useEffect(() => {
		fetchProducts();
	}, []);
	console.log("Products:", products);
	return (
		<div>
			<ProductComponent />
		</div>
	);
};

export default ProductList;
