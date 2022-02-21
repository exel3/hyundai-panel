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

export type area = {
	_id?: string;
	code: string;
	name: string;
	standards: Array<standard>;
};

export type standard = {
	_id?: string;
	code: string;
	description: string;
};

export type block = {
	_id?: string;
	code: string;
	name: string;
	areas: Array<area>;
};

export type category = {
	_id?: string;
	abbreviation: string;
	name: string;
	blocks: Array<block>;
};
