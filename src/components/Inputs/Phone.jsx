import { isValidPhoneNumber, getCountries } from "libphonenumber-js";
import { useController } from "react-hook-form";

const COUNTRIES = getCountries();

export const Phone = ({
                          name,
                          label,
                          errorMessage,
                          suppressErrorMessage,
                          registerOptions,
                          hidden
                      }) => {
    const { field: { value: phoneValue = "", onChange: onPhoneChange } } = useController({
        name: registerOptions.phone.name + '_phone',
        rules: registerOptions.phone
    });

    const { field: { value: countryValue = "", onChange: onCountryChange } } = useController({
        name: name + registerOptions.country.name + '_country',
        rules: registerOptions.country
    });

    const validatePhoneNumber = (value) => {
        if (!isValidPhoneNumber(value)) {
            return "Invalid phone number";
        }
    };

    return (
        <>
            <div className="form-group mb-3" hidden={hidden}>
                <select
                    name={`${registerOptions.country.name}_country`}
                    value={countryValue}
                    onChange={(e) => onCountryChange(e.target.value)}
                >
                    {COUNTRIES.map((countryCode) => (
                        <option key={countryCode} value={countryCode}>
                            {countryCode}
                        </option>
                    ))}
                </select>
                <input
                    type="tel"
                    value={phoneValue}
                    name={`${registerOptions.country.name}_phone`}
                    onChange={(e) => onPhoneChange(e.target.value)}
                    onBlur={(e) => validatePhoneNumber(e.target.value)}
                    aria-describedby={errorMessage ? `validation-feedback-${name}` : undefined}
                />
                {errorMessage && !suppressErrorMessage && (
                    <div className="invalid-feedback" id={`validation-feedback-${name}`}>
                        {errorMessage}
                    </div>
                )}
            </div>
        </>
    );
};
