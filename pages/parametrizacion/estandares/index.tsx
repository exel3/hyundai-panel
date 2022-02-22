import DefaultLayout from "components/layouts/DefaultLayout";
import { EstandaresTemplate } from "components/templates/EstandaresTemplate";
import { GetServerSideProps } from "next";
import { ReactElement } from "react";
import getToken from "utils/server/getToken";

export default function Estandares() {
	return <EstandaresTemplate></EstandaresTemplate>;
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

Estandares.getLayout = function getLayout(page: ReactElement) {
	return <DefaultLayout>{page}</DefaultLayout>;
};
