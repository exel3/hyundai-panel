import React from "react";
type Props = {
	titles: Array<string>;
	children: Object;
};
const Table = ({ titles, children }: Props) => {
	return (
		<>
			<table>
				<thead>
					<tr>
						{titles.map((t) => (
							<th key={t}>{t}</th>
						))}
					</tr>
				</thead>
				<tbody>{children}</tbody>
			</table>
			<style jsx>
				{`
					table {
						width: 100%;
						border-collapse: collapse;
						border-radius: 0.8rem;
						border: solid 2px;
						overflow: hidden;
					}
					thead tr {
						background: var(--main-blue);
						color: white;
					}

					th {
						border: solid 1px white;
					}

					th {
						padding: 0.3rem;
					}
				`}
			</style>
		</>
	);
};

export default Table;
