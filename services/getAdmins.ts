import { admin } from "types/global";
import { host } from "utils/apiUtils";

interface customError extends Error {
	statusCode?: number;
}

export const getAdmins = async (): Promise<admin[]> => {
	const options: RequestInit = {
		method: "GET",
		mode: "cors",
		credentials: "same-origin",
		headers: {
			"Content-Type": "application/json",
		},
	};
	const request = new Request(`${host}/api/admin`, {});

	return fetch(request)
		.then((res) => {
			if (!res.ok) {
				const error: customError = new Error();
				error.statusCode = res.status;
				throw error;
			}
			return res.json();
		})
		.then((res) => res.data.admins)
		.catch((e) => {
			switch (e.statusCode) {
				case 401: {
					return Promise.reject("Usuario o password incorrectos.");
				}
				default: {
					return Promise.reject("Error de conexion");
				}
			}
		});
};
