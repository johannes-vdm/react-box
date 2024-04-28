import { useForm, FormProvider } from "react-hook-form";
import './Forms.css';

import {Phone} from '../Inputs/Phone.jsx';
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
                <Phone name="phone_number" />
                {/*<Phone2 methods={methods.register} name={'phon e-test'}/>*/}
                <input {...methods.register('test')} />
                <input type="submit" />
            </form>
                <CodeBlock data={formData}/>
            </FormProvider>
        </div>
    );
}
