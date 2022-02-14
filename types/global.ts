export type user = {
	email: string;
	password: string;
};

export type itemlist = {
	title: string;
	href: string;
	subs?: Array<itemlist>;
};
