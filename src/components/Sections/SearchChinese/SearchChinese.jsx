import { useState } from "react";
import { foods } from "./Data.jsx";

// eslint-disable-next-line react-refresh/only-export-components
export function filterFoods(foods, searchText) {
    if (searchText) {
        return foods.filter((food) => {
            return (
                food.description.toLowerCase().includes(searchText.toLowerCase()) ||
                food.name.toLowerCase().includes(searchText.toLowerCase())
            );
        });
    } else {
        return foods;
    }
}

export default function SearchChinese() {
    const [query, setQuery] = useState("");
    const filteredFoods = filterFoods(foods, query);

    return (
        <>
            <br/>
            <br/>
            <SearchBar setQuery={setQuery}/>
            <hr/>
            <List items={filteredFoods} />
        </>
    );
}

// eslint-disable-next-line react/prop-types
function SearchBar({ setQuery }) {
    function handleChange(e) {
        setQuery(e.target.value);
    }

    return (
        <label>
            Search: <input onChange={handleChange} />
        </label>
    );
}

// eslint-disable-next-line react/prop-types
function List({ items }) {
    const NoResults = () => {
        return <h1>No results</h1>;
    };

    return (
        <table>
            <tbody>
            {/* eslint-disable-next-line react/prop-types */}
            {items.length === 0 && <NoResults />}
            {/* eslint-disable-next-line react/prop-types */}
            {items.map((food) => (
                <tr key={food.id}>
                    <td style={{borderRight: 'solid 1px white'}}>{food.name}</td>
                    <td>{food.description}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}
