import type { AppProps } from "next/app";
import { fonts } from "styles/theme";
function MyApp({ Component, pageProps }: AppProps) {
	console.log(pageProps);
	return (
		<>
			<Component {...pageProps} />
			<style jsx global>
				{`
					html,
					body {
						padding: 0;
						margin: 0;
						font-family: ${fonts.base};
						background: #fafbffff;
					}

					html {
						--prussian-blue: #032d5fff;
						--alice-blue: #e6e9eeff;
						--cerulean-crayola: #01aad3ff;
						--celtic-blue: #006decff;
						--atomic-tangerine: #f09a6cff;
						--ghost-white: #fafbffff;
						--platinum: #e6e6e6ff;
						--united-nations-blue: #478ef7ff;
						--indigo-dye: #1b3f69ff;
						--united-nations-blue-2: #478ef7ff;
					}
					a {
						color: inherit;
						text-decoration: none;
					}

					* {
						box-sizing: border-box;
					}
				`}
			</style>
		</>
	);
}

export default MyApp;
