import { ItemList } from "components/atoms/ItemList";
import { itemlist } from "types/global";

type Prop = {
	items: Array<itemlist>;
};

export const MenuList = ({ items }: Prop) => {
	return (
		<>
			<ul>
				{items.map((i) => (
					<ItemList key={i.title} title={i.title} href={i.href} />
				))}
			</ul>
			<style jsx>{`
				ul {
					display: flex;
					align-items: start;
					justify-content: space-between;
					gap: 1rem;
					flex-direction: column;
					height: 100%;
					width: 100%;
				}
			`}</style>
		</>
	);
};
