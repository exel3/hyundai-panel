import DefaultLayout from "components/layouts/DefaultLayout";
import { ReactElement } from "react";
import { useSelector } from "react-redux";

export default function Dashboard() {
	const state = useSelector((state) => state);
	return <div>{state}</div>;
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
	return <DefaultLayout>{page}</DefaultLayout>;
};
