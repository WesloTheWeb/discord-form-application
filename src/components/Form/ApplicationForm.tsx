import { useForm, SubmitHandler } from "react-hook-form";
import classes from './ApplicationForm.module.css';

type Inputs = {
    example: string
    exampleRequired: string
};

const { formContainer } = classes;

const ApplicationForm = ({ }) => {
    return (
        <form className={formContainer}>
            <h2>Form</h2>
            <section>
                <label>First Name</label>
                <input placeholder='Solid' type="text" />
                <label>Second Name</label>

            </section>
        </form>
    );
};

export default ApplicationForm;