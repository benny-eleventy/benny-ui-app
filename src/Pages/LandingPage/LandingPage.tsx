import {
	constants,
	FlexStartCenterAlignedColumnContainer,
	RowContainer,
} from "@benny-eleventy/benny-ui";
import ColumnContainers from "./Components/ColumnContainers";
import RowContainers from "./Components/RowContainers";

const LandingPage = () => {
	return (
		<FlexStartCenterAlignedColumnContainer
			width="100vw"
			height="100vh"
			padding={constants.spaces.regular}
			background="black"
			borderRadius={"0"}
		>
			<ColumnContainers />
			<RowContainers />
		</FlexStartCenterAlignedColumnContainer>
	);
};

export default LandingPage;
