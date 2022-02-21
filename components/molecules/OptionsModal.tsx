import { ReactElement } from "react";

type Props = {
	children: ReactElement;
	top: number;
	left: number;
	handleShowOptions: Function;
};
export const OptionsModal = ({
	children,
	top,
	left,
	handleShowOptions,
}: Props) => {
	return (
		<>
			<div className="modal">{children}</div>
			<div
				className="optionsModalContainer"
				onClick={(e) => handleShowOptions(e)}
				onContextMenu={(e) => handleShowOptions(e)}
			></div>
			<style jsx>{`
				.modal {
					position: absolute;
					top: ${top}px;
					left: ${left}px;
					border: 1px solid transparent;
					border-radius: 10px;
					box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);
					height: 10rem;
					width: 10rem;
					background: #c8c9cc;
					z-index: 6;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding: 1rem:
				}
				.optionsModalContainer {
					position: absolute;
					height: 100vh;
					width: 100vw;
					z-index: 5;
				}
			`}</style>
		</>
	);
};
