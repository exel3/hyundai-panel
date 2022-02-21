import React from "react";
import Image from "next/image";

type Prop = {
	pic: StaticImageData;
	rotate?: number;
};
const ImageWrapper = ({ pic, rotate = 0 }: Prop) => {
	return (
		<>
			<div>
				<Image src={pic} width={90} height={60} />
			</div>
			<style jsx>{`
				div {
					transform: rotate(${rotate}deg);
				}
			`}</style>
		</>
	);
};

export default React.memo(ImageWrapper);
