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
					<tr key={a._id}>
						<td>{a.names}</td>
						<td>{a.surnames}</td>
						<td>{a.emailAddress}</td>
						<td>{a.userName}</td>
					</tr>
				))}
			</Table>
		</>
	);
};
