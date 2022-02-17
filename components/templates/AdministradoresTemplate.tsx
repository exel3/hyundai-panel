import { ButtonWithIcon } from "components/atoms/ButtonWithIcon";
import { CeldaTable } from "components/atoms/CeldaTable";
import { TableRow } from "components/atoms/TableRow";
import { Title } from "components/atoms/Title";
import Table from "components/molecules/Table";
import { useFilter } from "hooks/useFilter";
import { useEffect, useState } from "react";
import { getAdmins } from "services/getAdmins";
import { admin } from "types/global";
import add from "public/icons/addPic.svg";
import { InputLabelFloat } from "components/atoms/InputLabelFloat";
import { AddForm } from "components/molecules/AddForm";
import { DefaultButton } from "components/atoms/DefaultButton";

export const AdministradoresTemplate = () => {
	const titles = ["Nombre", "Apellido", "Email", "Username"];
	const [admins, setAdmins] = useState<admin[]>([]);
	const [loading, setLoading] = useState(false);
	const [isAddMode, setAddMode] = useState(false);
	const adminsFilter = useFilter(admins);

	const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { names, surnames, emailAddress, password } = e.target;
		const newAdmin = {
			names: names.value,
			surnames: surnames.value,
			emailAddress: emailAddress.value,
			password: password.value,
		};
		console.log(newAdmin);
	};

	const handleAdd = () => {
		setAddMode((prevState) => !prevState);
	};
	useEffect(() => {
		getAdmins()
			.then((res) => setAdmins(res))
			.catch((e) => console.log(e));
	}, []);
	return (
		<>
			<div className="header">
				<Title>Administradores</Title>
				<ButtonWithIcon src={add} handleClick={handleAdd} />
			</div>
			<div className="addContainer">
				{isAddMode && (
					<AddForm handleSubmit={handleSubmit}>
						<div>
							<InputLabelFloat
								name="names"
								type="text"
								required={true}
								autoFocus={true}
								disabled={loading}
							>
								Nombre
							</InputLabelFloat>
							<InputLabelFloat
								name="surnames"
								type="text"
								required={true}
								autoFocus={true}
								disabled={loading}
							>
								Apellido
							</InputLabelFloat>
							<InputLabelFloat
								name="email"
								type="email"
								required={true}
								autoFocus={true}
								disabled={loading}
							>
								Email
							</InputLabelFloat>
							<InputLabelFloat
								name="password"
								type="password"
								required={true}
								autoFocus={true}
								disabled={loading}
							>
								Password
							</InputLabelFloat>
						</div>
						<InputLabelFloat
							name="password"
							type="password"
							required={true}
							autoFocus={true}
							disabled={loading}
						>
							Password
						</InputLabelFloat>
						<DefaultButton width="5rem">Agregar</DefaultButton>
					</AddForm>
				)}
			</div>
			<div className="list">
				<Table titles={titles}>
					{adminsFilter.map((a) => (
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
			</div>
			<style jsx>{`
				.header {
					display: flex;
					align-items: center;
					justify-content: start;
					gap: 1rem;
				}
			`}</style>
		</>
	);
};
