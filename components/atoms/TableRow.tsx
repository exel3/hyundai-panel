import React, { ReactElement } from "react";
type Prop = {
	children: ReactElement;
};
export const TableRow = ({ children }: Prop) => {
	return (
		<>
			<tr>{children}</tr>
			<style jsx>{``}</style>
		</>
	);
};
