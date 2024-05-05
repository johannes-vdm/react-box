
export default function PackingList({
                                        // eslint-disable-next-line react/prop-types
                                        items,onChangeItem,onDeleteItem
                                    }) {
    return (
        <ul>
            {/* eslint-disable-next-line react/prop-types */}
            {items.map(item => (
                <li key={item.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={item.packed}
                            onChange={e => {
                                onChangeItem({
                                    ...item,
                                    packed: e.target.checked
                                });
                            }}
                        />
                        {' '}
                        {item.title}
                    </label>
                    <button onClick={() => onDeleteItem(item.id)}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}
