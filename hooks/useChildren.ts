import React, { ReactElement } from "react";

export const useChildren = (children: Array<ReactElement>, type: string) => {
	return React.Children.map(children, (c) => {
		if (typeof c.type === "function") {
			if (c.type.name === type) {
				return c;
			}
		} else if (c.type === type) return c;
	});
};
