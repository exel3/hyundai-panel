import useSWR from "swr";

export const useGetAllAreas = () => {
	const fetcher = (input: RequestInfo, init: RequestInit, ...args: any[]) =>
		fetch(input, init).then((res) => res.json());
	const { data, error } = useSWR("/api/areas", fetcher);
	console.log(data);
	return {
		areas: data ? data.data.areas : data,
		isLoading: !error && !data,
		isError: error,
	};
};
