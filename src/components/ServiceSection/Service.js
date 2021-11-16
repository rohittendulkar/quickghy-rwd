import React from "react";
import { Button } from "../../globalStyles";
import { GoTools } from "react-icons/go";
import { GiToolbox } from "react-icons/gi";
import { MdLocalGroceryStore } from "react-icons/md";
import { IconContext } from "react-icons/lib";
import {
	ServiceSection,
	ServiceWrapper,
	ServiceHeading,
	ServiceContainer,
	ServiceCard,
	ServiceCardInfo,
	ServiceCardIcon,
	ServiceCardPlan,
	ServiceCardCost,
	ServiceCardLength,
	ServiceCardFeatures,
	ServiceCardFeature,
} from "./ServiceComponents";

function Service() {
	return (
		<IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
			<ServiceSection>
				<ServiceWrapper>
					<ServiceHeading>Our Services</ServiceHeading>
					<ServiceContainer>
						<ServiceCard to="/sign-up">
							<ServiceCardInfo>
								<ServiceCardIcon>
									<GoTools />
								</ServiceCardIcon>
								<ServiceCardPlan>On Demand Services</ServiceCardPlan>
								<ServiceCardCost>$99.99</ServiceCardCost>
								<ServiceCardLength>per month</ServiceCardLength>
								<ServiceCardFeatures>
									<ServiceCardFeature>
										We provide On Demand Services
									</ServiceCardFeature>
									<ServiceCardFeature>
										5 Star Rated Personnel
									</ServiceCardFeature>
									<ServiceCardFeature>24/7 Support</ServiceCardFeature>
								</ServiceCardFeatures>
								<Button primary>Choose Plan</Button>
							</ServiceCardInfo>
						</ServiceCard>
						<ServiceCard to="/sign-up">
							<ServiceCardInfo>
								<ServiceCardIcon>
									<GiToolbox />
								</ServiceCardIcon>
								<ServiceCardPlan>Online Marketplace</ServiceCardPlan>
								<ServiceCardCost>299.99</ServiceCardCost>
								<ServiceCardLength>per month</ServiceCardLength>
								<ServiceCardFeatures>
									<ServiceCardFeature>1000 New Users</ServiceCardFeature>
									<ServiceCardFeature>Branded Products</ServiceCardFeature>
									<ServiceCardFeature>Discount offers</ServiceCardFeature>
								</ServiceCardFeatures>
								<Button primary>Choose Plan</Button>
							</ServiceCardInfo>
						</ServiceCard>
						<ServiceCard to="/sign-up">
							<ServiceCardInfo>
								<ServiceCardIcon>
									<MdLocalGroceryStore />
								</ServiceCardIcon>
								<ServiceCardPlan>Grocery Delivery</ServiceCardPlan>
								<ServiceCardCost>$500.00</ServiceCardCost>
								<ServiceCardLength>per month</ServiceCardLength>
								<ServiceCardFeatures>
									<ServiceCardFeature>
										Monthly Grocery Delivery
									</ServiceCardFeature>
									<ServiceCardFeature>Loyalty Programs</ServiceCardFeature>
									<ServiceCardFeature>Same Day Delivery</ServiceCardFeature>
								</ServiceCardFeatures>
								<Button primary>Choose Plan</Button>
							</ServiceCardInfo>
						</ServiceCard>
					</ServiceContainer>
				</ServiceWrapper>
			</ServiceSection>
		</IconContext.Provider>
	);
}
export default Service;
