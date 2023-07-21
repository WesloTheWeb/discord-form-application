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
            <h4>Contact Information</h4>
            <p>Fill out the information below</p>
            <section className='contact-information-section'>
                <div>
                    <label>First Name</label>
                    <input {...register("firstName", { required: true })} />
                </div>
                <div>
                    <label>Last Name</label>
                    <input {...register("lastName", { required: true })} />
                </div>
                <div>
                    <label>Resume</label>
                    <input id="upload" {...register('resume')} type="file" />
                </div>
            </section>
            <section className="contact-information-section">
                <div>
                    <label>Location</label>
                    <input {...register("location", { required: true })} />
                </div>
                <div>
                    <label>Phone Number</label>
                    <input {...register("phoneNumber", { required: true })} />
                </div>
                <div>
                    <label>Cover Letter</label>
                    <input id="upload" {...register('coverLetter')} type="file" />
                </div>
                <div>
                    <label>Email Address</label>
                    <input {...register("email", { required: true })} />
                </div>
            </section>
            <section>
                <h4>Job Logistics</h4>
                {/* TODO: Fix for radio button and text area. */}
                <div>
                    <label>Are you legally authorized to work in the United States for our company?*</label>
                    <div className="legal-question-section">
                        <input {...register('isAuthorized')} type="radio" value="yes" />
                        <label>Yes</label>
                    </div>
                    <div className="legal-question-section">
                        <input {...register('isAuthorized')} type="radio" value="no" />
                        <label>No</label>
                    </div>
                </div>
                <div>
                    <label>Reason</label>
                    <textarea {...register("reason", { required: true })} />
                </div>
            </section>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ApplicationForm;