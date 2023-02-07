import {
	BennyThemeProvider,
	CenterAlignedColumnContainer,
} from "@benny-eleventy/benny-ui";
import LandingPage from "./Pages/LandingPage";

function App() {
	return (
		<BennyThemeProvider>
			<CenterAlignedColumnContainer width="100vw" height="100vh">
				<LandingPage />
			</CenterAlignedColumnContainer>
		</BennyThemeProvider>
	);
}

export default App;
