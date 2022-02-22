import DefaultLayout from "components/layouts/DefaultLayout";
import type { ReactElement } from "react";

export default function Parametrizacion() {
	return <div>Parametrizacion</div>;
}

Parametrizacion.getLayout = function getLayout(page: ReactElement) {
	return <DefaultLayout>{page}</DefaultLayout>;
};
