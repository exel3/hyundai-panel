import { searchReducer } from "./searchReducer";

describe("noteReducer", () => {
	test("returns new state", () => {
		const state = "";
		const action = {
			type: "@search/set",
			payload: "test",
		};
		const newState = searchReducer(state, action);

		expect(newState).toBe("test");
	});
});
