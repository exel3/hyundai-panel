import { useSelector } from "react-redux";

export const useFilter = (array: any[] = []) => {
	const state = useSelector((state) => state);
	const res = array.filter((a) => {
		for (let key in a) {
			if (a[key].toString().includes(state)) return true;
		}
	});
	return res;
};
