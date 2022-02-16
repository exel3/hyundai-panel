import { fonts } from "styles/theme";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => page);

	return getLayout(
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
						--main-blue: #032d5fff;
						--alice-blue: #e6e9eeff;
						--cerulean-crayola: #01aad3ff;
						--celtic-blue: #006decff;
						--atomic-tangerine: #f09a6cff;
						--ghost-white: #fafbffff;
						--platinum: #e6e6e6ff;
						--united-nations-blue: #478ef7ff;
						--indigo-dye: #1b3f69ff;
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
