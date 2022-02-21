import { ReactElement } from "react";
import AddPic from "public/icons/addPic.svg";
import Image from "next/image";
import ImageWrapper from "components/atoms/ImageWrapper";
import { ButtonWithIcon } from "components/atoms/ButtonWithIcon";

type Props = {
	children: ReactElement;
	handleAddModal: Function;
};
export const AddModal = ({ children, handleAddModal }: Props) => {
	return (
		<>
			<div className="optionsModalContainer">
				<div className="modal">
					<div className="closeBottom">
						<ButtonWithIcon
							src={AddPic}
							rotate={45}
							handleClick={handleAddModal}
						/>
					</div>

					{children}
				</div>
			</div>
			<style jsx>{`
				.modal {
					position:relative;
					border: 1px solid transparent;
					border-radius: 10px;
					box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);
					height: 80%;
					width: 80%;
					background: white;
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
          display: flex;
          align-items: center;
          justify-content: center;
					backdrop-filter: blur(5px);
				}

				.closeBottom {
					position: absolute;
					top: 1rem;
					right:1rem;
					cursor:pointer;
				}
			`}</style>
		</>
	);
};
