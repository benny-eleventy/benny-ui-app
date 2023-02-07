import { AnimatedCenterAlignedColumnContainer } from "@benny-eleventy/benny-ui";
import styled from "styled-components";

interface ChildBoxProps {
	width?: string;
	height?: string;
}

const ChildBoxContainer = styled(AnimatedCenterAlignedColumnContainer)`
	background: ${(props) => props.theme.colors.demoColors.pastel2};
	width: ${(props: ChildBoxProps) => props.width || "100px"};
	height: ${(props: ChildBoxProps) => props.height || "100px"};
`;

const ChildBox = (props: ChildBoxProps) => {
	return (
		<ChildBoxContainer
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.9 } }}
			exit={{ opacity: 0 }}
			{...props}
		></ChildBoxContainer>
	);
};
export default ChildBox;
