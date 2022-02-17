import { ButtonWithIcon } from "components/atoms/ButtonWithIcon";
import { SearchInput } from "components/atoms/SearchInput";
import notification from "public/icons/notificationPic.svg";
import add from "public/icons/addPic.svg";
import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSearchValue } from "reducers/searchReducer";

const Header = () => {
	const state = useSelector((state) => state);
	const dispatch = useDispatch();

	const handleNotification = () => {};
	const handleAdd = () => {};
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		dispatch(createSearchValue(value));
	};

	return (
		<>
			<header>
				<div className="searchInput">
					<SearchInput handleSearch={handleSearch} />
				</div>
				<div className="buttonsContainer">
					<ButtonWithIcon src={notification} handleClick={handleNotification} />
					<ButtonWithIcon src={add} handleClick={handleAdd} />
				</div>
			</header>
			<style jsx>{`
				header {
					display: flex;
					align-items: center;
					justify-content: end;
					width: 100%;
					height: 100%;
					padding: 0 1rem;
					gap: 1rem;
				}

				.buttonsContainer {
					display: flex;
					flex-direction: row;
					gap: 1rem;
				}
			`}</style>
		</>
	);
};

export default React.memo(Header);
