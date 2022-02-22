import useSWR from "swr";

export const useGetAllCriterions = () => {
	const fetcher = (input: RequestInfo, init: RequestInit, ...args: any[]) =>
		fetch(input, init).then((res) => res.json());
	const { data, error } = useSWR("/api/criterions", fetcher);
	console.log(data);
	return {
		criterions: data ? data.data.standards : data,
		isLoading: !error && !data,
		isError: error,
	};
};
