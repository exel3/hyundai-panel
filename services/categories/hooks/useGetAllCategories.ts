import useSWR from "swr";

export const useGetAllCategories = () => {
	const fetcher = (input: RequestInfo, init: RequestInit, ...args: any[]) =>
		fetch(input, init).then((res) => res.json());
	const { data, error } = useSWR("/api/categories", fetcher);
	console.log(data);
	return {
		categories: data ? data.data.categories : data,
		isLoading: !error && !data,
		isError: error,
	};
};
