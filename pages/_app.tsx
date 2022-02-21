import { fonts } from "styles/theme";
import type { ReactElement, ReactNode } from "react";
import type { GetServerSideProps, NextPage } from "next";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "redux/store";
import getToken from "utils/server/getToken";

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => page);

	return (
		<Provider store={store}>
			{getLayout(
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
								--background: #fafbffff;
								--platinum: #e6e6e6ff;
								--united-nations-blue: #478ef7ff;
								--indigo-dye: #1b3f69ff;
								--border-color: #d8d9db;
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
			)}
		</Provider>
	);
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { req, res } = context;
	const token = getToken(req, res);

	if (token) return { props: {} };

	return {
		redirect: {
			destination: "/login",
			permanent: false,
		},
	};
};
