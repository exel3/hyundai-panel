import Image from "next/image";
import searchPic from "public/icons/searchPic.svg";
export const SearchInput = () => {
	return (
		<>
			<div className="inputContainer">
				<input type="text" />
				<div className="imgContainer">
					<Image src={searchPic} width={30} height={30} />
				</div>
			</div>
			<style jsx>
				{`
					.inputContainer {
						position: relative;
						user-select: none;
					}
					input {
						background: #e6e9ee;
						border: none;
						border-radius: 15px;
						padding: 0.5rem 0.5rem 0.5rem 2rem;
						width: 15rem;
					}

					.imgContainer {
						position: absolute;
						top: 0.1rem;
					}
				`}
			</style>
		</>
	);
};
