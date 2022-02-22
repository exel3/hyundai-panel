import AddPic from "public/icons/addPic.svg";
import { ButtonWithIcon } from "components/atoms/ButtonWithIcon";
import { Title } from "components/atoms/Title";
import { DefaultButton } from "components/atoms/DefaultButton";
import { typeElement } from "types/global";
import { deleteCategory } from "services/categories/deleteCategory";
import { useState } from "react";
import Image from "next/image";
import warningPic from "public/icons/warningPic.svg";

type Props = {
	type: typeElement;
	handleCancel: Function;
	element: any;
};

export const DeleteModal = ({ type, handleCancel, element }: Props) => {
	const [isLoading, setMode] = useState(false);
	const [error, setError] = useState([]);

	const titulos = {
		category: "categoria",
		block: "bloque",
		area: "area",
		standard: "estandar",
		criterion: "criterio",
	};
	const deleteFunctions = {
		category: () => {
			setMode(true);
			deleteCategory(element)
				.then(handleCancel())
				.catch((err: []) => {
					setMode(false);
					setError(err);
				});
		},
		block: () => {},
		area: () => {},
		standard: () => {},
		criterion: () => {},
	};
	const title = "Eliminar " + titulos[type];
	const handleDelete = deleteFunctions[type];
	return (
		<>
			<div className="optionsModalContainer">
				<div className="modal">
					<div className="header">
						<Title fontsize="1.5rem">{title}</Title>
					</div>
					<div className="body">
						<Image src={warningPic} width={150} height={150}></Image>
						<p>
							ADVERTENCIA: Eliminar este elemento, borrará todo su contenido de
							la base de datos.
						</p>
					</div>
					<div className="closeBottom">
						<ButtonWithIcon
							src={AddPic}
							rotate={45}
							handleClick={handleCancel}
							disabled={isLoading}
						/>
					</div>
					<div className="deleteButton">
						<DefaultButton
							handleClick={() => handleDelete()}
							width="8rem"
							type="danger"
							disabled={isLoading}
						>
							Eliminar
						</DefaultButton>
					</div>
					{error.length > 0 && (
						<div className="errors">
							{error.map((e: any) => (
								<p key={e.msg}>{"-" + e.msg}</p>
							))}
						</div>
					)}
				</div>
			</div>
			<style jsx>{`
				.contentModal {
					display: flex;
					align-items: center;
					justify-content: center;
					margin-top: 2rem;
				}
				.modal {
					position: relative;
					border: 1px solid transparent;
					border-radius: 10px;
					box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);
					width: 50%;
					height: 50%;
					background: white;
					padding: 1rem;
					padding-bottom: 4rem;
					display: flex;
					flex-direction: column;
				}
				.optionsModalContainer {
					position: absolute;
					height: 100vh;
					width: 100vw;
					display: flex;
					align-items: center;
					justify-content: center;
					backdrop-filter: blur(5px);
				}

				.body {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					height: 100%;
					font-size: 1.2rem;
				}

				.closeBottom {
					position: absolute;
					top: 1rem;
					right: 1rem;
				}

				.deleteButton {
					position: absolute;
					bottom: 1rem;
					right: 1rem;
				}
				.errors {
					position: absolute;
					bottom: 1rem;
					left: 1rem;
					display: flex;
					color: red;
					gap: 0.5rem;
				}
			`}</style>
		</>
	);
};
