import { SearchInput } from "components/atoms/SearchInput";

export const Header = () => {
	return (
		<>
			<header>
				<div className="searchInput">
					<SearchInput />
				</div>
				<div></div>
			</header>
			<style jsx>{`
				header {
					display: flex;
					align-items: center;
					justify-content: end;
					width: 100%;
					height: 100%;
					padding: 0 1rem;
				}
			`}</style>
		</>
	);
};
