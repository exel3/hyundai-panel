import { Header } from "components/organisms/Header";
import { AsideMenu } from "components/organisms/AsideMenu";
import { useState } from "react";

type Prop = {
	children: JSX.Element;
};
export const DefaultLayout = ({ children }: Prop) => {
	const [compressedMode, setMode] = useState(false);
	const handleAsideWidth = () => {
		setMode((prevState) => !prevState);
	};
	return (
		<>
			<section className="defaultContainer">
				<article className={compressedMode ? "asideCompressed" : "asideNormal"}>
					<AsideMenu handleAsideWidth={handleAsideWidth} />
				</article>
				<article className="header">
					<Header />
					<div className="defaultLayoutContent">{children}</div>
				</article>
			</section>
			<style jsx>
				{`
					.asideNormal {
						position: fixed;
						top: 0;
						left: 0;
						width: 20rem;
						height: 100vh;
						transform: translate(0);
						animation: moveForward 0.5s ease;
					}

					.asideCompressed {
						position: fixed;
						top: 0;
						left: 0;
						width: 20rem;
						height: 100vh;
						transform: translate(-18rem);
						animation: moveBack 0.5s ease;
					}

					.header {
						position: fixed;
						top: 0;
						left: 20rem;
						height: 5rem;
						width: calc(100% - 20rem);
					}

					.asideCompressed + .defaultLayoutContent {
						padding: 10rem;
					}

					@keyframes moveForward {
						0% {
							transform: translate(-18rem);
						}

						100% {
							transform: translate(0);
						}
					}

					@keyframes moveBack {
						0% {
							transform: translate(0);
						}

						100% {
							transform: translate(-18rem);
						}
					}
				`}
			</style>
		</>
	);
};
