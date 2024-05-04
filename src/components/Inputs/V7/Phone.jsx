import {getCountries} from "libphonenumber-js";

const COUNTRIES = getCountries();

export const Phone = ({register, name}) => {

    return (

        <>

            <input type="tel" {...register(`${name}_phone`)}/>
            <select
                {...register(`${name}_country`)}
            >
                {COUNTRIES.map((countryCode) => (
                    <option key={countryCode} value={countryCode}>
                        {countryCode}
                    </option>
                ))}
            </select>
        </>
    )
}