import React from "react";
type Prop = {
	children: string;
};
export const CeldaTable = ({ children }: Prop) => {
	return (
		<>
			<td>{children}</td>
			<style jsx>{`
				td {
					border: solid 1px gray;
					padding: 0.3rem;
				}
			`}</style>
		</>
	);
};
