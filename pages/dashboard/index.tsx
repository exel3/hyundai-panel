import DefaultLayout from "components/layouts/DefaultLayout";
import { useSelector } from "react-redux";

export default function Dashboard() {
	const state = useSelector((state) => state);
	return (
		<DefaultLayout>
			<div>{state}</div>
		</DefaultLayout>
	);
}
