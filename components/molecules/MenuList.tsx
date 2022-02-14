import { ItemList } from "components/atoms/ItemList";
import React from "react";
import { itemlist } from "types/global";

type Prop = {
	items: Array<itemlist>;
};

const MenuList = ({ items }: Prop) => {
	return (
		<>
			<ul>
				{items.map((i) => (
					<ItemList key={i.title} title={i.title} href={i.href} subs={i.subs} />
				))}
			</ul>
			<style jsx>{`
				ul {
					display: block;
					width: 100%;
				}
			`}</style>
		</>
	);
};

export default React.memo(MenuList, (prevProps, nextProps) => {
	return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});
