import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { category } from "types/global";
import { host } from "utils/apiUtils";
import getToken from "utils/server/getToken";

export default async function categories(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const path = `${host}/api/category`;
	const { id } = req.query;
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

	if (req.method === "PUT") {
		const category: category = req.body;
		if (token) {
			const headers = {
				headers: { authorization: token },
			};
			await axios
				.post(path, category, headers)
				.then((response) => {
					res.json(response.data);
				})
				.catch((e) => {
					console.log(e.response.data);
					res.statusCode = e.response.status;
					res.json(e.response.data);
				});
		} else {
			res.status(401).json({ Error: "no autorizado" });
		}
	}

	if (req.method === "DELETE") {
		const category: category = req.body;

		console.log("params? ", id);
		if (token) {
			const headers = {
				headers: { authorization: token },
			};
			await axios
				.delete(`${path}/${id}`, headers)
				.then((response) => {
					res.json(response.data);
				})
				.catch((e) => {
					console.log(e.response.data);
					res.statusCode = e.response.status;
					res.json(e.response.data);
				});
		} else {
			res.status(401).json({ Error: "no autorizado" });
		}
	}
}
