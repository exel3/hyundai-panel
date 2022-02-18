import { useChildren } from "hooks/useChildren";
import React from "react";
import { ReactElement } from "react";

type Props = {
	children: Array<ReactElement>;
	handleSubmit: Function;
	title: string;
};

export const AddForm = ({ children, handleSubmit, title }: Props) => {
	const divs = useChildren(children, "div");
	const buttons = useChildren(children, "DefaultButton");
	return (
		<>
			<form onSubmit={(e) => handleSubmit(e)}>
				<p>{title}</p>
				<div className="inputList">{divs}</div>
				<div className="buttons">{buttons}</div>
			</form>
			<style jsx>{`
				form {
					background: white;
					padding: 2rem;
					border: 1px solid var(--border-color);
					position: relative;
					margin-bottom: 1rem;
				}
				.inputList {
				}

				button {
					border: none;
				}
				p {
					position: absolute;
					left: 1rem;
					background: white;
					top: -1.8rem;
					padding: 0 0.5rem;
					color: rgba(0, 0, 0, 0.8);
				}
			`}</style>
		</>
	);
};
