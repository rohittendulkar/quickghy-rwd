import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "../../globalStyles";
import {
	InfoSec,
	InfoRow,
	InfoCol,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
	ImgWrapper,
	Img,
} from "./InfoComponents";

function InfoSection({
	primary,
	lightBg,
	topLine,
	lightTopLine,
	lightText,
	lightTextDesc,
	headline,
	description,
	buttonLabel,
	img,
	alt,
	imgStart,
	start,
}) {
	return (
		<div>
			<InfoSec lightBg={lightBg}>
				<Container>
					<InfoRow imgStart={imgStart}>
						<InfoCol>
							<TextWrapper>
								<TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
								<Heading lightText={lightText}>{headline}</Heading>
								<Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
								<Link to="/sign-up">
									<Button big fontBig primary={primary}>
										{buttonLabel}
									</Button>
								</Link>
							</TextWrapper>
						</InfoCol>
						<InfoCol>
							<ImgWrapper start={start}>
								<Img src={img} alt={alt} />
							</ImgWrapper>
						</InfoCol>
					</InfoRow>
				</Container>
			</InfoSec>
		</div>
	);
}

export default InfoSection;
