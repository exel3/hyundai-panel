import axios from "axios";
import { category } from "types/global";

interface customError extends Error {
	statusCode?: number;
}

export const postCategory = async (category: category): Promise<category[]> => {
	return await axios
		.post(`/api/categories`, category)
		.then((response) => response.data)
		.catch((e) => Promise.reject(e.response.data.errors));
};
