import axios from "axios";
import { block } from "types/global";

export const deleteBlock = async (block: block): Promise<block[]> => {
	return await axios
		.delete(`/api/blocks/${block._id}`)
		.then((response) => response.data)
		.catch((e) => Promise.reject(e.response.data.errors));
};
