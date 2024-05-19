import {useState} from "react";
import {FormProvider, useForm} from "react-hook-form";
import DebugForm from "./DebugForm.jsx";
import CodeBlock from "../../Blocks/CodeBlock.jsx";


export default function CompleteForm() {
    const methods = useForm();

    const {
        register,
        formState: {errors},
        handleSubmit
    } = methods

    const [formData, setFormData] = useState(null); // State to hold form data

    const onSubmit = data => {

        setFormData(data);
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>FirstName</label>
                <input {...register("firstName", {required: true})} />
                {errors.firstName && "Your input is required"}
                <br/>
                {/*/!* refer to the type of error to display message accordingly *!/*/}
                {/*<input {...register("multipleErrorInput", {required: true, maxLength: 50})} />*/}
                {/*{errors.multipleErrorInput?.type === "required" && "Your input is required"}*/}
                {/*{errors.multipleErrorInput?.type === "maxLength" && "Your input exceed maxLength"}*/}
                {/*<br/>*/}

                {/*/!* register with validation *!/*/}
                {/*<input type="number" {...register("numberInput", {min: 50})} />*/}
                {/*{errors.numberInput && "Your input required to be more than 50"}*/}
                {/*<br/>*/}

                {/* register with validation and error message */}
                <input
                    {...register("lastName", {required: "This is required"})}
                />
                {errors.lastName?.message}
                <br/>

                <input type="submit"/>

            </form>
            <CodeBlock data={formData}/>
            <DebugForm/>

        </FormProvider>
    );
}