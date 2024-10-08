import { useState } from "react";
import AddItem from "./AddItem.jsx";
import PackingList from "./PackingList.jsx";

let nextId = 3;
const initialItems = [
    { id: 0, title: "Warm socks", packed: true },
    { id: 1, title: "Travel journal", packed: false },
    { id: 2, title: "Watercolors", packed: false },
];

export default function TravelPlan() {
    const [items, setItems] = useState(initialItems);

    function handleAddItem(title) {
        setItems([
            ...items,
            {
                id: nextId++,
                title: title,
                packed: false,
            },
        ]);
    }

    function handleChangeItem(nextItem) {
        setItems(
            items.map((item) => {
                if (item.id === nextItem.id) {
                    return nextItem;
                } else {
                    return item;
                }
            })
        );
    }

    function handleDeleteItem(itemId) {
        setItems(items.filter((item) => item.id !== itemId));
    }

    console.log(items);

    const total = items.length;
    const packedItemsCount = items.filter((item) => item.packed).length;

    return (
        <>
            <br/><AddItem onAddItem={handleAddItem} />
            <PackingList
                items={items}
                onChangeItem={handleChangeItem}
                onDeleteItem={handleDeleteItem}
            />
            <hr />


            <br />

            Packed items: {packedItemsCount}
            <br/>
            Total: {total}
        </>
    );
}
