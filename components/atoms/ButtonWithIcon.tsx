import Image from "next/image";

type Prop = {
	src: string;
	handleClick: Function;
};
export const ButtonWithIcon = ({ src, handleClick }: Prop) => {
	return (
		<>
			<button onClick={() => handleClick()}>
				<Image src={src} width={30} height={30} />
			</button>
			<style jsx>{`
				button {
					display: flex;
					align-items: center;
					justify-content: center;
					background: #032d5fff;
					border: none;
					border-radius: 0.5rem;
					width: 2rem;
					height: 2rem;
					cursor: pointer;
				}
			`}</style>
		</>
	);
};
