import Cookies from "cookies";
import { IncomingMessage, ServerResponse } from "http";
import { NextApiRequest, NextApiResponse } from "next";

export default function (
	req: NextApiRequest | IncomingMessage,
	res: NextApiResponse | ServerResponse
) {
	const cookie = new Cookies(req, res);
	const token = cookie.get("token");
	if (token) return token;
	return null;
}
