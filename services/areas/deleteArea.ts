import axios from "axios";
import { area } from "types/global";

export const deleteArea = async (area: area): Promise<area[]> => {
	return await axios
		.delete(`/api/areas/${area._id}`)
		.then((response) => response.data)
		.catch((e) => Promise.reject(e.response.data.errors));
};
