import { CeldaTable } from "components/atoms/CeldaTable";
import { TableRow } from "components/atoms/TableRow";
import { Title } from "components/atoms/Title";
import Table from "components/molecules/Table";
import { useEffect, useState } from "react";
import { getAdmins } from "services/getAdmins";
import { admin } from "types/global";

export const AdministradoresTemplate = () => {
	const titles = ["Nombre", "Apellido", "Email", "Username"];
	const [admins, setAdmins] = useState<admin[]>([]);
	useEffect(() => {
		getAdmins()
			.then((res) => setAdmins(res))
			.catch((e) => console.log(e));
	}, []);
	return (
		<>
			<Title>Administradores</Title>
			<Table titles={titles}>
				{admins.map((a) => (
					<TableRow key={a._id}>
						<>
							<CeldaTable>{a.names}</CeldaTable>
							<CeldaTable>{a.surnames}</CeldaTable>
							<CeldaTable>{a.emailAddress}</CeldaTable>
							<CeldaTable>{a.userName}</CeldaTable>
						</>
					</TableRow>
				))}
			</Table>
		</>
	);
};
