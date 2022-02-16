import type { NextApiRequest, NextApiResponse } from "next";
import { host } from "utils/apiUtils";
import getToken from "utils/server/getToken";

export default function admins(req: NextApiRequest, res: NextApiResponse) {
	const path = `${host}/api/admin`;

	if (req.method === "GET") {
		const token = getToken(req, res);
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
			fetch(request)
				.then((response) => response.json())
				.then((response) => res.json(response))
				.catch((e) => res.json(e));
		} else {
			res.status(401).json({ Error: "no autorizado" });
		}
	}
}
