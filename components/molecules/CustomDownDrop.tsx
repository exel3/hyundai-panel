import { ReactElement, useState } from "react";
import Image from "next/image";
import logoPic from "public/icons/arrowBackBlack.svg";
import { OptionsModal } from "./OptionsModal";
import Portal from "HOC/Portal";
type Props = {
	children?: ReactElement;
	title: string;
	color: string;
	childrenContainer?: boolean;
};
export const CustomDownDrop = ({
	children,
	title,
	color,
	childrenContainer = true,
}: Props) => {
	const [expandedMode, setMode] = useState(false);
	const [showOptions, setShowOptions] = useState(false);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	const handleMode = () => {
		childrenContainer && setMode((prevState) => !prevState);
	};
	const handleShowOptions = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		e.preventDefault();
		if (!showOptions) {
			const newPosition = { x: e.pageX, y: e.pageY };
			setMousePosition(newPosition);
		}
		setShowOptions((prevState) => !prevState);
	};
	return (
		<>
			<div
				className="dropDownContainer"
				onClick={handleMode}
				onContextMenu={(e) => handleShowOptions(e)}
			>
				<p>{title}</p>
				{childrenContainer && (
					<div className="imgContainer">
						<Image src={logoPic} />
					</div>
				)}
			</div>
			{expandedMode && childrenContainer && (
				<div className="list">{children}</div>
			)}

			{showOptions && (
				<Portal>
					<OptionsModal
						handleShowOptions={handleShowOptions}
						top={mousePosition.y}
						left={mousePosition.x}
					>
						<>
							<p className="optionItems">Eliminar concepto</p>
							<p className="optionItems">Editar concepto</p>
							<p className="optionItems">Duplicar concepto</p>
						</>
					</OptionsModal>
				</Portal>
			)}

			<style jsx>{`
				.list {
					width: 100%;
					padding: 0 0 0 2rem;
				}
				.dropDownContainer {
					width: 100%;
					padding: 0 1rem;
					border: solid 1px transparent;
					border-radius: 30px;
					position: relative;
					background: ${color};
					margin-top: 1rem;
					cursor: ${childrenContainer ? "pointer" : "default"};
				}

				.imgContainer {
					position: absolute;
					right: 1rem;
					transform: rotate(${expandedMode ? 90 : 270}deg);
					bottom: 0.7rem;
				}
				.optionItems {
					cursor: pointer;
					padding: 0;
					width: 100%;
					text-align: center;
				}
				.optionItems:hover {
					background: rgba(0, 0, 0, 0.1);
				}
			`}</style>
		</>
	);
};
