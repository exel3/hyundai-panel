import MenuList from "components/molecules/MenuList";
import React, { useState } from "react";
import logoPic from "public/icons/hyundaiLogo.png";
import arrowBackPic from "public/icons/arrowBack.svg";
import { ButtonWithIcon } from "components/atoms/ButtonWithIcon";
import ImageWrapper from "components/atoms/ImageWrapper";

type Prop = {
	handleAsideWidth: Function;
};
const AsideMenu = ({ handleAsideWidth }: Prop) => {
	const mainlistArray = [
		{ href: "dashboard", title: "Informes de Auditoria" },
		{ href: "dashboard", title: "Instalaciones HMES" },
		{ href: "dashboard", title: "Gestor de Auditorias" },
		{ href: "dashboard", title: "Plan de Accion" },
		{ href: "dashboard", title: "Cuadro de Mando y Reporting" },
		{ href: "dashboard", title: "Seguimiento Tienda PLV" },
	];
	const secondarylistArray = [
		{ href: "dashboard", title: "Mi Perfil" },
		{ href: "dashboard", title: "Ayuda" },
		{ href: "dashboard", title: "Buzon de sugerencias" },
	];

	const [compressedMode, setMode] = useState(false);

	const handleMode = () => {
		setMode((prevState) => !prevState);
		handleAsideWidth();
	};
	return (
		<>
			<aside className={compressedMode ? "asideCompressed" : "asideNormal"}>
				<div className="logo">
					<ImageWrapper pic={logoPic} />
				</div>
				<div className="asideBody">
					<div className="list">
						<MenuList items={mainlistArray} />
					</div>
					<div className="mediumLine">
						<div className="buttonContainer">
							<ButtonWithIcon
								src={arrowBackPic}
								handleClick={handleMode}
								rotate={compressedMode ? 180 : 0}
							/>
						</div>
					</div>
					<div className="list">
						<MenuList items={secondarylistArray} />
					</div>
				</div>
			</aside>
			<style jsx>{`
				.asideNormal {
					display: flex;
					border-right: solid 1px #d8d9db;
					flex-direction: column;
					width: 100%;
					height: 100%;
					background: white;
				}

				.asideCompressed {
					display: flex;
					border-right: solid 1px #d8d9db;
					flex-direction: column;
					width: 100%;
					height: 100%;
					background: white;
					animation: spin 1s ease infinite;
				}

				.asideBody {
					display: flex;
					align-items: center;
					justify-content: start;
					flex-direction: column;
					height: calc(100% - 2rem);
					width: 100%;
					gap: 4rem;
					padding-top: 2rem;
				}

				.asideBody .list {
					width: 100%;
				}

				.logo {
					display: flex;
					align-items: center;
					justify-content: center;
					height: 6rem;
				}

				.mediumLine {
					position: relative;
					width: calc(100% - 4rem);
					height: 2px;
					padding: 0 2rem;
					background: #e6e6e6ff;
				}

				.mediumLine div {
					position: absolute;
					top: -1rem;
					right: -3rem;
					display: flex;
				}
			`}</style>
		</>
	);
};

export default React.memo(AsideMenu);
