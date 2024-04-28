import React, {useState} from "react";
import { useForm } from "react-hook-form";
import './Forms.css';
import CodeBlock from "../blocks/CodeBlock.jsx";

export default function ErrorForm() {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [formData, setFormData] = useState(null); // State to hold form data


    const onSubmit = data => {setFormData(data)};

    console.log(formData);


    console.log(formData);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("singleErrorInput", {required: true})} />
            {errors.singleErrorInput && "Your input is required"}
            <br/>
            {/* refer to the type of error to display message accordingly */}
            <input {...register("multipleErrorInput", {required: true, maxLength: 50})} />
            {errors.multipleErrorInput?.type === "required" && "Your input is required"}
            {errors.multipleErrorInput?.type === "maxLength" && "Your input exceed maxLength"}
            <br/>

            {/* register with validation */}
            <input type="number" {...register("numberInput", {min: 50})} />
            {errors.numberInput && "Your input required to be more than 50"}
            <br/>

            {/* register with validation and error message */}
            <input
                {...register("errorMessage", {required: "This is required"})}
            />
            {errors.errorMessage?.message}
            <br/>

            <input type="submit"/>

            <CodeBlock data={formData}/>
        </form>
    );
}