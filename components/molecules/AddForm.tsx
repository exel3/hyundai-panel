import { useChildren } from "hooks/useChildren";
import React from "react";
import { ReactElement } from "react";

type Props = {
	children: Array<ReactElement>;
	handleSubmit: Function;
};

export const AddForm = ({ children, handleSubmit }: Props) => {
	const divs = useChildren(children, "div");
	const buttons = useChildren(children, "DefaultButton");
	return (
		<>
			<form onSubmit={(e) => handleSubmit(e)}>
				<div className="inputList">{divs}</div>
				<div className="buttons">{buttons}</div>
			</form>
			<style jsx>{`
				form {
					background: white;
					padding: 1rem;
				}
				.inputList {
				}

				button {
					border: none;
				}
			`}</style>
		</>
	);
};
