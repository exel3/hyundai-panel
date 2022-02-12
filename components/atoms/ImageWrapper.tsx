import React from "react";
import Image from "next/image";

type Prop = {
	pic: StaticImageData;
};
const Logo = ({ pic }: Prop) => {
	return (
		<>
			<Image src={pic} width={90} height={60} />
		</>
	);
};

export default React.memo(Logo);
