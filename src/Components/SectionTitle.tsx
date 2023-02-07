import { Text, constants } from "@benny-eleventy/benny-ui";

interface SectionTitleProps {
	title: string;
	width?: string;
}
const SectionTitle = (props: SectionTitleProps) => {
	return (
		<Text
			fontSize={constants.typography.size.xsmall}
			color="white"
			whiteSpace="wrap"
		>
			{props.title}
		</Text>
	);
};

export default SectionTitle;
