import DefaultLayout from "components/layouts/DefaultLayout";
import { AdministradoresTemplate } from "components/templates/AdministradoresTemplate";
import type { ReactElement } from "react";

export default function Administradores() {
	return <AdministradoresTemplate></AdministradoresTemplate>;
}

Administradores.getLayout = function getLayout(page: ReactElement) {
	return <DefaultLayout>{page}</DefaultLayout>;
};
