import Link from "next/link";
import { useState } from "react";
import { itemlist } from "types/global";

export const ItemList = ({ title, href, subs }: itemlist) => {
	const [isSelected, setSelected] = useState(false);
	const handleSelected = () => {
		setSelected((prevState) => !prevState);
	};
	return (
		<>
			<li>
				<p
					onClick={handleSelected}
					style={isSelected ? { background: "rgba(0,0,0,0.05)" } : {}}
				>
					{title}
				</p>
				{subs && isSelected && (
					<ul className="subsList">
						{subs.map((s) => (
							<li className="subs" key={s.title}>
								<Link href={s.href}>
									<a>{s.title}</a>
								</Link>
							</li>
						))}
					</ul>
				)}
			</li>
			<style jsx>{`
				li {
					display: block;
					cursor: pointer;
				}

				p {
					font-weight: bold;
					line-height: 2rem;
					height: 100%;
					border-radius: 0.5rem;
					color: rgba(0, 0, 0, 0.8);
				}

				a {
					color: rgba(0, 0, 0, 0.8);
				}

				.subs {
					display: flex;
					align-items: start;
					justify-content: center;
					flex-direction: column;
					font-weight: normal;
					line-height: 1.5rem;
				}
			`}</style>
		</>
	);
};
