interface ActionSet {
	readonly type: string;
	readonly payload: string;
}
type actions = ActionSet;

export const searchReducer = (state = "", action: actions) => {
	if (action.type === "@search/set") {
		return action.payload;
	}

	return state;
};

export const createSearchValue = (value: string) => {
	return {
		type: "@search/set",
		payload: value,
	};
};
