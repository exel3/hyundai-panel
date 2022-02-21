import { ReactElement, useEffect, useState } from "react";
import { createPortal } from "react-dom";
type Props = {
	children: ReactElement;
};
const Portal = ({ children }: Props) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);

		return () => setMounted(false);
	}, []);

	return mounted
		? createPortal(children, document.querySelector("#modalportal"))
		: null;
};

export default Portal;
