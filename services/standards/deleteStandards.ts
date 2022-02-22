import axios from "axios";
import { standard } from "types/global";

export const deleteStandard = async (
	standard: standard
): Promise<standard[]> => {
	return await axios
		.delete(`/api/standards/${standard._id}`)
		.then((response) => response.data)
		.catch((e) => Promise.reject(e.response.data.errors));
};
