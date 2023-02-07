import {
	CenterAlignedRowContainer,
	constants,
	Text,
} from "@benny-eleventy/benny-ui";
import { FlexStartCenterAlignedRowContainer } from "@benny-eleventy/benny-ui";
import React from "react";
import { ChildBox } from "../../../Components";

const RowContainers = () => {
	return (
		<>
			<FlexStartCenterAlignedRowContainer
				width="100%"
				height="5vh"
				borderBottom="1px solid white"
				borderRadius="0"
				padding={constants.spaces.regular}
			>
				<Text fontSize={constants.typography.size.large}>
					Column Containers
				</Text>
			</FlexStartCenterAlignedRowContainer>
			<FlexStartCenterAlignedRowContainer
				width="100%"
				height="50%"
				gap={constants.spaces.large}
				padding={constants.spaces.regular}
			>
				<CenterAlignedRowContainer width="100%" height="30%">
					<ChildBox width="40%" height="20%" />
				</CenterAlignedRowContainer>
			</FlexStartCenterAlignedRowContainer>
		</>
	);
};

export default RowContainers;
