import axios from "axios";
import { category } from "types/global";

export const deleteCategory = async (
	category: category
): Promise<category[]> => {
	return await axios
		.delete(`/api/categories/${category._id}`)
		.then((response) => response.data)
		.catch((e) => Promise.reject(e.response.data.errors));
};
