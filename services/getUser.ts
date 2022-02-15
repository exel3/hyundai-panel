import { user } from "types/global";
import { host } from "utils/apiUtils";

interface customError extends Error {
	statusCode?: number;
}

export const getUser = async ({ email, password }: user): Promise<object> => {
	const options: RequestInit = {
		method: "POST",
		mode: "cors",
		body: JSON.stringify({
			user: email,
			password,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	};
	const request = new Request(`${host}/api/admin/login`, options);

	return fetch(request)
		.then((res) => {
			if (!res.ok) {
				const error: customError = new Error();
				error.statusCode = res.status;
				throw error;
			}
			return res.json();
		})
		.then((res) => res)
		.catch((e) => {
			switch (e.statusCode) {
				case "401": {
					return Promise.reject("Usuario o password incorrectos.");
				}
				default: {
					return Promise.reject("Error de conexion");
				}
			}
		});
};
