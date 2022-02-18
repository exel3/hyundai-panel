import { admin } from "types/global";

interface customError extends Error {
	statusCode?: number;
}

export const postAdmin = async (admin: admin): Promise<admin[]> => {
	const options: RequestInit = {
		method: "POST",
		mode: "cors",
		body: JSON.stringify(admin),
		credentials: "same-origin",
		headers: {
			"Content-Type": "application/json",
		},
	};
	const request = new Request(`/api/admins`, options);

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
			console.log(e);
			switch (e.statusCode) {
				case 400: {
					return Promise.reject("Formato incorrecto");
				}
				default: {
					return Promise.reject(e.message);
				}
			}
		});
};
