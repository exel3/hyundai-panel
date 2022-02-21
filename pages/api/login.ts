import type { NextApiRequest, NextApiResponse } from "next";
import { host } from "utils/apiUtils";
import Cookies from "cookies";

export default async function login(req: NextApiRequest, res: NextApiResponse) {
	console.log(req.method === "POST");
	if (req.method === "POST") {
		const cookie = new Cookies(req, res);
		const { user, password } = req.body;
		const options: RequestInit = {
			method: "POST",
			mode: "cors",
			credentials: "same-origin",
			body: JSON.stringify({
				user,
				password,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		};
		let firstResponse: Response;
		const request = new Request(`${host}/api/admin/login`, options);
		await fetch(request)
			.then((response) => {
				firstResponse = response;
				return response.json();
			})
			.then((response) => {
				if (firstResponse.ok) {
					cookie.set("token", "Bearer " + response.data.token, {
						maxAge: 3600000 * 12,
						httpOnly: true,
					});
				}
				res.status(firstResponse.status).json(firstResponse);
			});
	} else {
		res.status(401).json({ Error: "no autorizado" });
	}
}
