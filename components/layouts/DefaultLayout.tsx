import Header from "components/organisms/Header";
import AsideMenu from "components/organisms/AsideMenu";
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
				</article>
				<div
					className={
						compressedMode ? "compressedLayoutContent" : "defaultLayoutContent"
					}
				>
					{children}
				</div>
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

					.defaultLayoutContent {
						position: fixed;
						top: 5rem;
						left: 20rem;
						transform: translate(0);
						height: 5rem;
						width: calc(100% - 20rem);
						animation: moveForward 0.5s ease;
						z-index: -1;
						box-sizing: border-box;
						padding: 1rem;
					}

					.compressedLayoutContent {
						position: fixed;
						top: 5rem;
						left: 20rem;
						transform: translate(-18rem);
						height: calc(100% - 5rem);
						width: calc(100% - 2rem);
						animation: moveBack 0.5s ease;
						box-sizing: border-box;
						padding: 1rem;
						z-index: -1;
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
