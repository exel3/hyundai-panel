import axios from "axios";
import { criterion } from "types/global";

export const deleteCriterion = async (
	criterion: criterion
): Promise<criterion[]> => {
	return await axios
		.delete(`/api/criterions/${criterion._id}`)
		.then((response) => response.data)
		.catch((e) => Promise.reject(e.response.data.errors));
};
