import React from "react";
type Prop = {
	children: string;
	fontsize?: string;
};
export const Title = ({ children, fontsize = "2rem" }: Prop) => {
	return (
		<>
			<h1>{children}</h1>
			<style jsx>{`
				h1 {
					font-size: ${fontsize};
					color: rgba(0, 0, 0, 0.8);
					line-height: 0;
				}
			`}</style>
		</>
	);
};
