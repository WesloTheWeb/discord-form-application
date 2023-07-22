import classes from './ConfirmationSubmission.module.css';

const { container } = classes;

const ConfirmationSubmission = () => {
    return (
        <section className={`${classes["fade-in"]} ${container}`}>
            <h2>Application Submission Success!</h2>
            <h4>GG!</h4>
            <p>Your application was submitted successfully. We'll be in touch soon.</p>
        </section>
    );
};

export default ConfirmationSubmission;