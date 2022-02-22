import { InputLabelFloat } from "components/atoms/InputLabelFloat";
import React from "react";

type Prop = {
	element?: any;
};

export const ModalCategory = ({ element }: Prop) => {
	const isLoading = false;
	return (
		<>
			<div className="inputsContainer">
				<InputLabelFloat
					name="categoryname"
					type="text"
					autoFocus={true}
					disabled={isLoading}
					width="100%"
					required
					value={element && element.name}
				>
					Nombre
				</InputLabelFloat>
				<InputLabelFloat
					name="abbreviation"
					type="text"
					disabled={isLoading}
					width="100%"
					required
					value={element && element.abbreviation}
				>
					Abreviación
				</InputLabelFloat>
				<InputLabelFloat
					name="idSecondary"
					type="number"
					disabled={isLoading}
					width="100%"
					required
					value={element && element.idSecondary}
				>
					ID
				</InputLabelFloat>
				<InputLabelFloat
					name="valor"
					type="number"
					disabled={isLoading}
					width="100%"
					required
					value={element && element.value}
				>
					Valor
				</InputLabelFloat>
			</div>
			<style jsx>{`
				.inputsContainer {
					width: 100%;
				}
			`}</style>
		</>
	);
};
