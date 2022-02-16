import React from "react";
type Prop = {
	children: string;
};
export const Title = ({ children }: Prop) => {
	return (
		<>
			<h1>{children}</h1>
			<style jsx>{`
				h1 {
					font-size: 2rem;
					color: rgba(0, 0, 0, 0.8);
				}
			`}</style>
		</>
	);
};
