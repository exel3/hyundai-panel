import useSWR from "swr";

export const useGetAllStandards = () => {
	const fetcher = (input: RequestInfo, init: RequestInit, ...args: any[]) =>
		fetch(input, init).then((res) => res.json());
	const { data, error } = useSWR("/api/standards", fetcher);
	console.log(data);
	return {
		standards: data ? data.data.standards : data,
		isLoading: !error && !data,
		isError: error,
	};
};
