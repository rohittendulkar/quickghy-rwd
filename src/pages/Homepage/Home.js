import React from "react";
import {
	homeContentFour,
	homeContentOne,
	homeContentThree,
	homeContentTwo,
} from "./Data";
import { InfoSection } from "../../components";

const Home = () => {
	return (
		<div>
			<InfoSection {...homeContentOne} />
			<InfoSection {...homeContentTwo} />
			<InfoSection {...homeContentThree} />
			<InfoSection {...homeContentFour} />
		</div>
	);
};

export default Home;
