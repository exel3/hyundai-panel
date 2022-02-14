import DefaultLayout from "components/layouts/DefaultLayout";
import type { ReactElement } from "react";

export default function Estandares() {
	return <div>Estandares</div>;
}

Estandares.getLayout = function getLayout(page: ReactElement) {
	return <DefaultLayout>{page}</DefaultLayout>;
};
