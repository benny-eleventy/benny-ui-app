import {
	FlexStartCenterAlignedRowContainer,
	constants,
	FlexStartCenterAlignedColumnContainer,
	CenterAlignedColumnContainer,
	FlexStartColumnContainer,
	Text,
} from "@benny-eleventy/benny-ui";
import { ChildBox, SectionTitle } from "../../../Components";

const ColumnContainers = () => {
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
				<FlexStartCenterAlignedColumnContainer width="20%" height="100%">
					<CenterAlignedColumnContainer
						width="100%"
						height="80%"
						//@ts-ignore
						background={(props: {
							theme: {
								colors: any;
								demoColors: { pastel1: any };
							};
						}) => props.theme.colors.demoColors.pastel1}
						padding={constants.spaces.small}
					>
						<ChildBox width="40%" height="20%" />
					</CenterAlignedColumnContainer>
					<SectionTitle title="CenterAlignedColumnContainer"></SectionTitle>
				</FlexStartCenterAlignedColumnContainer>
				<FlexStartCenterAlignedColumnContainer width="30%" height="100%">
					<FlexStartCenterAlignedColumnContainer
						width="100%"
						height="80%"
						//disable type checking for now
						// @ts-ignore
						background={(props: {
							theme: {
								colors: any;
								demoColors: { pastel1: any };
							};
						}) => props.theme.colors.demoColors.pastel1}
						padding={constants.spaces.small}
						gap={constants.spaces.small}
					>
						<ChildBox width="40%" height="20%" />
						<ChildBox width="40%" height="20%" />
						<ChildBox width="40%" height="20%" />
					</FlexStartCenterAlignedColumnContainer>
					<SectionTitle title="FlexStartCenterAlignedColumnContainer"></SectionTitle>
				</FlexStartCenterAlignedColumnContainer>
				<FlexStartCenterAlignedColumnContainer width="20%" height="100%">
					<FlexStartColumnContainer
						width="100%"
						height="80%"
						padding={constants.spaces.small}
						//@ts-ignore
						background={(props: {
							theme: {
								colors: any;
								demoColors: { pastel1: any };
							};
						}) => props.theme.colors.demoColors.pastel1}
						gap={constants.spaces.small}
					>
						<ChildBox width="40%" height="20%" />
						<ChildBox width="40%" height="20%" />
						<ChildBox width="40%" height="40%" />
					</FlexStartColumnContainer>
					<SectionTitle title="FlexStartColumnContainer"></SectionTitle>
				</FlexStartCenterAlignedColumnContainer>
			</FlexStartCenterAlignedRowContainer>
		</>
	);
};

export default ColumnContainers;
