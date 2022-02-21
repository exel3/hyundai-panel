import Image from "next/image";

type Prop = {
	src: string;
	handleClick: Function;
	rotate?: number;
	children: string;
};
export const ButtonWithTextAndIcon = ({
	src,
	handleClick,
	rotate = 0,
	children,
}: Prop) => {
	return (
		<>
			<button className="rotateX" onClick={() => handleClick()}>
				<p>{children}</p>
				<Image src={src} width={30} height={30} />
			</button>
			<style jsx>{`
				button {
					display: flex;
					align-items: center;
					justify-content: space-between;
					background: rgb(200 201 204);
					border: none;
					border-radius: 0.5rem;
					width: 10rem;
					height: 2rem;
					cursor: pointer;
					transform: rotate(${rotate + "deg"});
				}

				p {
					font-size: 0.9rem;
					color: rgba(0, 0, 0, 0.8);
				}
			`}</style>
		</>
	);
};
