import {FormProvider, useForm} from "react-hook-form";
import './Forms.css';

import {Phone} from '../Inputs/V6/Phone.jsx';
import {useState} from "react";
import CodeBlock from "../blocks/CodeBlock.jsx";


export default function V6ErrorForm() {
    const methods = useForm()
    const [formData, setFormData] = useState({});

    const onSubmit = (data) => setFormData(data);

    return (
        <div>
            <h1>v6</h1>
            <FormProvider {...methods} >
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <Phone name="phone_number" registerOptions={{
                        phone: {
                            name: "phone_number",
                            registerOptions: {required: "Phone number is required"},
                            errorMessage: "Invalid phone number"
                        },
                        country: {
                            name: "country_code",
                            registerOptions: undefined, // You can pass undefined if you don't want to use ...register
                            errorMessage: "Invalid country code"
                        }
                    }}/>
                    {/*<Phone2 methods={methods.register} name={'phon e-test'}/>*/}
                    <input {...methods.register('test')} />
                    <input type="submit"/>
                </form>
                <CodeBlock data={formData}/>
            </FormProvider>
        </div>
    );
}
