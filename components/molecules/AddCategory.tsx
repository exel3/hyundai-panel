import { InputLabelFloat } from "components/atoms/InputLabelFloat";
import React from "react";

export const AddCategory = () => {
	const isLoading = false;
	return (
		<>
			<div>
				<InputLabelFloat
					name="categoryname"
					type="text"
					autoFocus={true}
					disabled={isLoading}
					width="100%"
					required
				>
					Nombre
				</InputLabelFloat>
				<InputLabelFloat
					name="abbreviation"
					type="text"
					disabled={isLoading}
					width="100%"
					required
				>
					Abreviación
				</InputLabelFloat>
				<InputLabelFloat
					name="idSecondary"
					type="number"
					disabled={isLoading}
					width="100%"
					required
				>
					ID
				</InputLabelFloat>
				<InputLabelFloat
					name="valor"
					type="number"
					disabled={isLoading}
					width="100%"
					required
				>
					Valor
				</InputLabelFloat>
			</div>
			<style jsx>{`
				div {
					width: 100%;
				}
			`}</style>
		</>
	);
};
