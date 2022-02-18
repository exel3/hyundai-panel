export type user = {
	email: string;
	password: string;
};

export type itemlist = {
	title: string;
	href: string;
	subs?: Array<itemlist>;
};

export type admin = {
	_id?: string;
	names: string;
	surnames: string;
	emailAddress: string;
	userName: string;
	password: string;
};
