import { DefaultLayout } from "components/layouts/DefaultLayout";
import { DashboardIndex } from "./DashboardIndex";
const Dashboard = () => {
	return (
		<>
			<DefaultLayout>
				<DashboardIndex />
			</DefaultLayout>
		</>
	);
};

export default Dashboard;
