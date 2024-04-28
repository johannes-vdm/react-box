import { isValidPhoneNumber, getCountries } from "libphonenumber-js";
import { useFormContext } from "react-hook-form";

const COUNTRIES = getCountries();

// eslint-disable-next-line react/prop-types
export function Phone({ name }) {
    const { register, formState: { errors } } = useFormContext();

    const validatePhoneNumber = (value) => {
        if (!isValidPhoneNumber(value)) {
            return "Invalid phone number";
        }
    };

    return (
        <div>
            <select {...register(name + '_country')}>
                {COUNTRIES.map((countryCode) => (
                    <option key={countryCode} value={countryCode}>
                        {countryCode}
                    </option>
                ))}
            </select>
            <input
                type={'tel'}
                {...register(name + '_phone', { validate: validatePhoneNumber })}
            />
            {errors[name + '_phone'] && <p>{errors[name + '_phone'].message}</p>}
        </div>
    );
}


