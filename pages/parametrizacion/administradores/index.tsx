import DefaultLayout from "components/layouts/DefaultLayout";
import { AdministradoresTemplate } from "components/templates/AdministradoresTemplate";
import type { ReactElement } from "react";
import { GetServerSideProps } from "next";
import getToken from "utils/server/getToken";

export default function Administradores() {
	return <AdministradoresTemplate></AdministradoresTemplate>;
}

Administradores.getLayout = function getLayout(page: ReactElement) {
	return <DefaultLayout>{page}</DefaultLayout>;
};

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
