import {useController, useForm, useWatch} from "react-hook-form";
import PropTypes from 'prop-types';
import CodeBlock from "../../Blocks/CodeBlock.jsx";

function Input({ control, name, rules }) {
    const {field, fieldState} = useController({ control, name, rules });

    return (
        <div>
            <input {...field} placeholder={name} />
            <p>{fieldState.isTouched && "Touched"}</p>
            <p>{fieldState.isDirty && "Dirty"}</p>
            <p>{fieldState.invalid ? "invalid" : "valid"}</p>
        </div>
    );
}

Input.propTypes = {
    control: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    rules: PropTypes.object
};

export const CoreForm = () => {
    const {handleSubmit, control} = useForm({
        defaultValues: {
            FirstName: ""
        },
        mode: "onChange"
    });

    const onSubmit = (data) => console.log(data);

    const formData = useWatch({ control });

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input control={control} name="FirstName" rules={{required: true}} />

                <input type="submit" />
            </form>
            <CodeBlock data={formData} />
        </>
    );
}
