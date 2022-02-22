import type { NextApiRequest, NextApiResponse } from "next";
import { host } from "utils/apiUtils";
import getToken from "utils/server/getToken";

export default async function admins(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const path = `${host}/api/admin`;
	const token = getToken(req, res);
	console.log(token);
	if (req.method === "GET") {
		if (token) {
			const options: RequestInit = {
				method: "GET",
				mode: "cors",
				credentials: "same-origin",
				headers: {
					"Content-Type": "application/json",
					Authorization: token,
				},
			};
			const request = new Request(path, options);
			await fetch(request)
				.then((response) => response.json())
				.then((response) => res.json(response))
				.catch((e) => res.json(e));
		} else {
			res.status(401).json({ Error: "no autorizado" });
		}
	}

	if (req.method === "POST") {
		const admin = req.body;
		if (token) {
			const options: RequestInit = {
				method: "POST",
				mode: "cors",
				credentials: "same-origin",
				body: JSON.stringify(admin),
				headers: {
					"Content-Type": "application/json",
					Authorization: token,
				},
			};
			const request = new Request(path, options);
			await fetch(request)
				.then((response) => response.json())
				.then((response) => res.json(response))
				.catch((e) => res.json(e));
		} else {
			res.status(401).json({ Error: "no autorizado" });
		}
	}
}
