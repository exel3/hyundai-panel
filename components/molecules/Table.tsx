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
				<tbody>
					{children}
					<tr>
						<td>Emil</td>
						<td>Tobias</td>
						<td>Linus</td>
						<td>Linus</td>
					</tr>
					<tr>
						<td>16</td>
						<td>14</td>
						<td>10</td>
						<td>Linus</td>
					</tr>
				</tbody>
			</table>
			<style jsx>
				{`
					table {
						width: 100%;
						border-collapse: collapse;
						border-radius: 0.8rem;
						border: solid 2px red;
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

					td {
						border: solid 1px gray;
						padding: 0.3rem;
					}
				`}
			</style>
		</>
	);
};

export default Table;
