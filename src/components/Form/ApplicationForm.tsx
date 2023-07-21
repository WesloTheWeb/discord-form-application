import { useForm, SubmitHandler } from "react-hook-form";
import classes from './ApplicationForm.module.css';

type Inputs = {
    firstName: string;
    lastName: string;
    location: string;
    email: string;
    phoneNumber: number;
    resume: FileList;
    coverLetter?: FileList;
    reason: string;
    hearAboutJob: string;
    isAuthorized: boolean;
    socialMediaLinkedIn?: string;
    socialMediaWebsite?: string;
    stackOverflowLink?: string;
    GithubLink?: string;
};

const { formContainer } = classes;

const ApplicationForm = ({ }) => {

    const { register, handleSubmit, watch, formState: { errors }, } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        console.log(data.resume[0].name);
    } 

    // console.log(watch("example")) // watch input value by passing the name of it

    return (
        <form
            className={formContainer}
            onSubmit={handleSubmit(onSubmit)}
        >
            <h2>Applicant Form</h2>
            <section>
                <label>First Name</label>
                <input {...register("firstName", { required: true })} />
                <label>Second Name</label>
                <input {...register("lastName", { required: true })} />
                <input id="upload" {...register('resume')} type="file" />
                <button type="submit">Submit</button>

            </section>
        </form>
    );
};

export default ApplicationForm;