import type { NextApiRequest, NextApiResponse } from "next";
import { host } from "utils/apiUtils";
import getToken from "utils/server/getToken";

export default async function criterion(
	req: NextApiRequest,
	res: NextApiResponse
) {
	console.log("entro en api/criterion");
	const path = `${host}/api/criterion`;
	const token = getToken(req, res);
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
		const criterion = req.body;
		if (token) {
			const options: RequestInit = {
				method: "POST",
				mode: "cors",
				credentials: "same-origin",
				body: JSON.stringify(criterion),
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
