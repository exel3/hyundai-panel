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
import { postAdmin } from "services/postAdmin";
import { Loading } from "components/atoms/Loading";

export const AdministradoresTemplate = () => {
	const titles = ["Nombre", "Apellido", "Email", "Username"];
	const [admins, setAdmins] = useState<admin[]>([]);
	const [loading, setLoading] = useState(false);
	const [isAddMode, setAddMode] = useState(false);
	const adminsFilter = useFilter(admins);

	const updateList = () => {
		setLoading(true);
		getAdmins()
			.then((res) => {
				setAdmins(res);
				setLoading(false);
			})
			.catch((e) => console.log(e));
	};

	const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { names, surnames, emailAddress, userName, password } = e.target;
		const newAdmin: admin = {
			names: names.value,
			surnames: surnames.value,
			emailAddress: emailAddress.value,
			userName: userName.value,
			password: password.value,
		};
		console.log(newAdmin);
		postAdmin(newAdmin).then((res) => updateList());
	};

	const handleAdd = () => {
		setAddMode((prevState) => !prevState);
	};
	useEffect(() => {
		updateList();
	}, []);

	if (admins.length === 0) return <Loading />;
	return (
		<>
			<div className="header">
				<Title>Administradores</Title>
				<ButtonWithIcon
					src={add}
					handleClick={handleAdd}
					rotate={isAddMode ? 45 : 0}
				/>
			</div>
			<div className="addContainer">
				{isAddMode && (
					<AddForm title="Nuevo administrador" handleSubmit={handleSubmit}>
						<div>
							<InputLabelFloat
								name="names"
								type="text"
								required={true}
								width="100%"
								autoFocus={true}
								disabled={loading}
							>
								Nombre
							</InputLabelFloat>
							<InputLabelFloat
								name="surnames"
								type="text"
								required={true}
								width="100%"
								disabled={loading}
							>
								Apellido
							</InputLabelFloat>
							<InputLabelFloat
								name="emailAddress"
								type="email"
								required={true}
								width="100%"
								disabled={loading}
							>
								Email
							</InputLabelFloat>
							<InputLabelFloat
								name="userName"
								type="text"
								required={true}
								width="100%"
								disabled={loading}
							>
								Username
							</InputLabelFloat>
							<InputLabelFloat
								name="password"
								type="password"
								required={true}
								width="100%"
								disabled={loading}
							>
								Password
							</InputLabelFloat>
						</div>
						<DefaultButton width="5rem" disabled={loading}>
							Agregar
						</DefaultButton>
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

				.list {
					height: 100%;
				}
			`}</style>
		</>
	);
};
