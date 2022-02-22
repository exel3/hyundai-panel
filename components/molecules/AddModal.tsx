import { FormEvent, ReactElement, useState } from "react";
import AddPic from "public/icons/addPic.svg";
import { ButtonWithIcon } from "components/atoms/ButtonWithIcon";
import { Title } from "components/atoms/Title";
import { DefaultButton } from "components/atoms/DefaultButton";
import { typeElement } from "types/global";

type Props = {
	children: ReactElement;
	handleAddModal: Function;
	title: string;
	type: typeElement;
};

const titulos = {
	category: "categoria",
	block: "bloque",
	area: "area",
	standard: "estandar",
	criterion: "criterio",
};

export const AddModal = ({ children, handleAddModal, title, type }: Props) => {
	const [isLoading, setMode] = useState(false);
	const [error, setError] = useState([]);
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setMode(true);
		handleAddModal(e).catch((err: []) => {
			setMode(false);
			setError(err);
		});
	};
	return (
		<>
			<div className="optionsModalContainer">
				<div className="modal">
					<div className="header">
						<Title fontsize="1.5rem">{`${title} ${titulos[type]}`}</Title>
					</div>
					<div className="closeBottom">
						<ButtonWithIcon
							src={AddPic}
							rotate={45}
							handleClick={handleAddModal}
							disabled={isLoading}
						/>
					</div>

					<form className="contentModal" onSubmit={(e) => handleSubmit(e)}>
						{children}
						<div className="addBottom">
							<DefaultButton width="8rem" disabled={isLoading}>
								Agregar
							</DefaultButton>
						</div>
						{error.length > 0 && (
							<div className="errors">
								{error.map((e: any) => (
									<p key={e.msg}>{"-" + e.msg}</p>
								))}
							</div>
						)}
					</form>
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
					width: 80%;
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

				.closeBottom {
					position: absolute;
					top: 1rem;
					right: 1rem;
				}

				.addBottom {
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
