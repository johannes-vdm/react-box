import { useState, createContext, useContext } from "react";
import { places } from "./data.jsx";
import { getImageUrl } from "./utils.jsx";

const ImageSizeContext = createContext(150);

export default function ImageContext() {
    const [isLarge, setIsLarge] = useState(false);
    const imageSize = isLarge ? 150 : 100;

    return (
        <ImageSizeContext.Provider value={imageSize}>
            <label>
                <input
                    type="checkbox"
                    checked={isLarge}
                    onChange={(e) => {
                        setIsLarge(e.target.checked);
                    }}
                />
                Use large images
            </label>
            <hr />
            <List />
        </ImageSizeContext.Provider>
    );
}

function List() {
    const listItems = places.map((place) => (
        <li key={place.id}>
            <Place place={place} />
        </li>
    ));
    return <ul>{listItems}</ul>;
}

// eslint-disable-next-line react/prop-types
function Place({ place }) {
    return (
        <>
            <PlaceImage place={place} />
            <p>
                {/* eslint-disable-next-line react/prop-types */}
                <b>{place.name}</b>
                {/* eslint-disable-next-line react/prop-types */}
                {": " + place.description}
            </p>
        </>
    );
}

// eslint-disable-next-line react/prop-types
function PlaceImage({ place }) {
    const imageSize = useContext(ImageSizeContext);
    console.log(ImageSizeContext);
    return (
        <img
            src={getImageUrl(place)}
            /* eslint-disable-next-line react/prop-types */
            alt={place.name}
            width={imageSize}
            height={imageSize}
        />
    );
}
