// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import getToken from "utils/server/getToken";

export default function token(req: NextApiRequest, res: NextApiResponse) {
	const token = getToken(req, res);
	console.log(token);
	res.status(200).json({ token });
}
