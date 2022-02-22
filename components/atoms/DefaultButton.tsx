import React from "react";
type Prop = {
	children: string;
	width: string;
	disabled?: boolean;
	type?: "danger" | "normal";
	handleClick?: Function;
};
export const DefaultButton = ({
	children,
	width,
	disabled = false,
	type = "normal",
	handleClick,
}: Prop) => {
	return (
		<>
			{handleClick ? (
				<button onClick={() => handleClick()} disabled={disabled}>
					{children}
				</button>
			) : (
				<button disabled={disabled}>{children}</button>
			)}
			<style jsx>{`
				button {
					width: ${width};
					height: 2.5rem;
					background-color: ${type === "danger" ? "red" : "#032d5fff"};
					color: white;
					font-weight: bolder;
					border: none;
					border-radius: 0.3rem;
					line-height: 25px;
					cursor: pointer;
					text-transform: uppercase;
				}

				button:hover {
					box-shadow: 1px 1px 8px -2px #032d5fff;
				}
			`}</style>
		</>
	);
};
