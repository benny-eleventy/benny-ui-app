import theme from "@benny-eleventy/benny-ui/dist/themes";
import "styled-components";

type ThemeInterface = typeof theme;

declare module "styled-components" {
	export interface DefaultTheme extends ThemeInterface {}
}
