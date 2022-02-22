import type { GetServerSideProps, NextPage } from "next";
import getToken from "utils/server/getToken";

const Home: NextPage = () => {
	return <></>;
};

export default Home;

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
