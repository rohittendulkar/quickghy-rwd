import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Nav, Footer, ProductList, ProductDetail, Service } from "./components";
import Home from "./pages/Homepage/Home";
import ScrollToTop from "./components/ScrollToTop";

function App() {
	return (
		<Router>
			<GlobalStyle />
			<ScrollToTop />
			<Nav />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/services" exact component={Service} />
				<Route path="/products" exact component={ProductList} />
				<Route path="/products/:productId" exact component={ProductDetail} />
				<Route>404 Not Found!</Route>
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
