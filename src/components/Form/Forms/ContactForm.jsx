import { useForm, useController } from "react-hook-form";
import CodeBlock from "../../Blocks/CodeBlock.jsx";
import './Forms.css';

function Input(props) {
    const { field, fieldState } = useController(props);

    return (
        <div>
            <input {...field} placeholder={props.name} />
            <CodeBlock data={fieldState}/>
        </div>
    );
}

export default function ContactForm() {
    const { handleSubmit, control } = useForm({
        defaultValues: {
            FirstName: ""
        },
        mode: "onChange"
    });
    const onSubmit = (data) => console.log(data);

    return (
        <div>
            <h1>useController</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input control={control} name="FirstName" rules={{ required: true }} />
                <input type="submit" />
            </form>
        </div>
    );
}
