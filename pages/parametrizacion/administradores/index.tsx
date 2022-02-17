import DefaultLayout from "components/layouts/DefaultLayout";
import { AdministradoresTemplate } from "components/templates/AdministradoresTemplate";
import { GetServerSideProps } from "next";
import getToken from "utils/server/getToken";

export default function Administradores() {
	return (
		<DefaultLayout>
			<AdministradoresTemplate></AdministradoresTemplate>
		</DefaultLayout>
	);
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { req, res } = context;
	const token = getToken(req, res);

	if (token) return { props: {} };

	return {
		redirect: {
			destination: "/login",
			permanent: false,
		},
	};
};
