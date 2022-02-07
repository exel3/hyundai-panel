import { Header } from "components/organisms/Header";
import { AsideMenu } from "components/organisms/AsideMenu";

type Prop = {
	children: JSX.Element;
};
export const DefaultLayout = ({ children }: Prop) => {
	return (
		<>
			<section className="defaultContainer">
				<article className="aside">
					<AsideMenu />
				</article>
				<article className="header">
					<Header />
					<div className="defaultLayoutContent">{children}</div>
				</article>
			</section>
			<style jsx>
				{`
					.aside {
						position: fixed;
						top: 0;
						left: 0;
						width: 20rem;
						height: 100vh;
					}

					.header {
						position: fixed;
						top: 0;
						left: 20rem;
						height: 5rem;
						width: calc(100% - 20rem);
					}
				`}
			</style>
		</>
	);
};
