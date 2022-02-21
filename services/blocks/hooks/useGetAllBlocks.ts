import useSWR from "swr";

export const useGetAllBlocks = () => {
	const fetcher = (input: RequestInfo, init: RequestInit, ...args: any[]) =>
		fetch(input, init).then((res) => res.json());
	const { data, error } = useSWR("/api/blocks", fetcher);
	console.log(data);
	return {
		blocks: data ? data.data.blocks : data,
		isLoading: !error && !data,
		isError: error,
	};
};
