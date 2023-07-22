import { useForm, SubmitHandler } from "react-hook-form";
import classes from './ApplicationForm.module.css';

type Inputs = {
    firstName: string;
    lastName: string;
    location: string;
    phoneNumber: number;
    email: string;
    resume: FileList;
    coverLetter?: FileList;
    isAuthorized: boolean;
    reason: string;
    hearAboutJob: string;
    socialMediaLinkedIn?: string;
    socialMediaWebsite?: string;
    stackOverflowLink?: string;
    GithubLink?: string;
};

interface ApplicationFormProps {
    onFormSubmit: () => void;
}

const { formContainer } = classes;

const ApplicationForm = ({ onFormSubmit }: ApplicationFormProps) => {

    const { register, handleSubmit, formState: { errors }, } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        console.log(data.resume[0].name);
        const numFilledFields = countElements(data);
        console.log(`Number of filled fields: ${numFilledFields}`);
        onFormSubmit();
    };

    const countElements = (el: Record<string, any>) => {
        let total: number = 0;

        for (let obj in el) {
            if (el[obj]) { // Only increment total if the value is truthy
                total += 1;
            }
        };

        return total;
    };

    return (
        <form
            className={formContainer}
            onSubmit={handleSubmit(onSubmit)}
        >
            <h2>Applicant Form</h2>
            <h4>Contact Information</h4>
            <p>Fill out the information below. Resume and cover letters should be in PDF format.</p>
            <section className='contact-information-section'>
                <div>
                    <label><span>*</span>First Name</label>
                    <input {...register("firstName", { required: "Field cannot be blank" })} />
                    {errors.firstName && <span> {errors.firstName.message} </span>}
                </div>
                <div>
                    <label><span>*</span>Last Name</label>
                    <input {...register("lastName", { required: "Field cannot be blank" })} />
                    {errors.lastName && <span> {errors.lastName.message} </span>}
                </div>
                <div>
                    <label><span>*</span>Resume</label>
                    <input id="upload" {...register('resume', { required: "A Resume must be uploaded" })} type="file" />
                    {errors.resume && <span> {errors.resume.message} </span>}
                </div>
            </section>
            <section className="contact-information-section">
                <div>
                    <label><span>*</span>Location</label>
                    <input {...register("location", { required: "Location required" })} />
                    {errors.location && <span> {errors.location.message} </span>}
                </div>
                <div>
                    <label><span>*</span>Phone Number</label>
                    <input {...register("phoneNumber", { required: "A valid phone number must be entered." })} />
                    {errors.phoneNumber && <span> {errors.phoneNumber.message} </span>}
                </div>
                <div>
                    <label>Cover Letter</label>
                    <input id="upload" {...register('coverLetter')} type="file" />
                </div>
                <div>
                    <label><span>*</span>Email Address</label>
                    <input
                        {...register("email", {
                            required: "Field cannot be blank",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "A valid email address is required"
                            }
                        })}
                    />
                    {errors.email && <span> {errors.email.message} </span>}
                </div>
            </section>
            <section>
                <h4>Job Logistics</h4>
                <div>
                    <label><span>*</span>Are you legally authorized to work in the United States for our company?</label>
                    <div className="legal-question-section">
                        <input {...register('isAuthorized', { required: "An answer is required for this field." })} type="radio" value="yes" />
                        <label>Yes</label>
                    </div>
                    <div className="legal-question-section">
                        <input {...register('isAuthorized', { required: "An answer is required for this field." })} type="radio" value="no" />
                        <label>No</label>
                    </div>
                    {errors.isAuthorized && <span> {errors.isAuthorized.message} </span>}
                </div>
                <div id="reasonBlock">
                    <label><span>*</span>Why do you want to work at Discord?</label>
                    <textarea {...register("reason", { required: "Field cannot be blank." })} />
                    {errors.reason && <span> {errors.reason.message} </span>}
                </div>
                <div>
                    <label><span>*</span>How did you hear about this job?</label>
                    <input {...register('hearAboutJob', { required: "Field cannot be blank" })} />
                    {errors.hearAboutJob && <span> {errors.hearAboutJob.message} </span>}
                </div>
            </section>
            <h4>Social Links (LinkedIn, GitHub, Portfolio)</h4>
            <section className="social-links-container">
                <div>
                    <label>LinkedIn</label>
                    <input {...register("socialMediaLinkedIn")} />
                </div>
                <div>
                    <label>Website</label>
                    <input {...register("socialMediaWebsite")} />
                </div>
                <div>
                    <label>Stack Overflow</label>
                    <input {...register("stackOverflowLink")} />
                </div>
                <div>
                    <label>GitHub</label>
                    <input {...register("GithubLink")} />
                </div>
            </section>
            <div className="submissionContainer">
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default ApplicationForm;