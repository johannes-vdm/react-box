import {Phone} from '../Inputs/V7/Phone.jsx'
import {FormProvider, useForm} from "react-hook-form";
// import CodeBlock from "../blocks/CodeBlock.jsx";
// import {useState} from "react";


export default function V7ErrorForm() {
    // const [formData, setFormData] = useState({})

    // const onSubmit = data => setFormData(data)

    const {register, methods} = useForm();
    return (
        <>
            <FormProvider {...methods} >
                <form>
                    <Phone name={'modern_phone'} register={register}/>
                    <input type="submit"/>
                </form>
            </FormProvider>
            {/*<CodeBlock data={formData}/>*/}
        </>
    )
}