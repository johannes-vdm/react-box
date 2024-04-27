import {Controller, useForm} from "react-hook-form";

export default function ContactForm() {
    const {watch, control} = useForm();

    const name = watch('name');
    console.log(watch('name'));

    return (
        <>
            <h1>This is not a test people!</h1>
            <form>
                <label>Name
                    <Controller
                        control={control}
                        name="name"
                        render={({field}) => {
                            return <input type={'text'}/>
                        }}
                    />
                </label>
            </form>
        </>
    )
}
