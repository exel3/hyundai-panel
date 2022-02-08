import Link from "next/link";
type Prop = {
	title: string;
	href: string;
};

export const ItemList = ({ title, href }: Prop) => {
	return (
		<>
			<li>
				<Link href={href}>
					<a>{title}</a>
				</Link>
			</li>
			<style jsx>{`
				li {
					display: block;
					font-weight: bold;
					cursor: pointer;
					width: 100%;
				}
			`}</style>
		</>
	);
};
