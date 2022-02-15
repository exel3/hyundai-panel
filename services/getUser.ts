import { user } from "types/global";
import { host } from "utils/apiUtils";

export const getUser = ({ email, password }: user): Promise<object | void> => {
	const options = {
		method: "POST",
		body: JSON.stringify({
			username: email,
			password,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	};
	const request = new Request(`${host}/api/admin/login`, options);

	return fetch(request)
		.then((res) => {
			if (!res.ok) throw new Error(res.status);

			return res.json();
		})
		.then((res) => {
			res;
		})
		.catch((e) => {
			console.log(e);
			switch (e) {
				case 401: {
					return Promise.reject("Usuario o password incorrectos.");
				}
				default: {
					return Promise.reject("Error de conexion");
				}
			}
		});
};
