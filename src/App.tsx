import { useState } from 'react';
import Logo from './components/Logo/Logo';
import ApplicationForm from './components/Form/ApplicationForm';
import './App.css'
import Footer from './components/Footer/Footer';
import ConfirmationSubmission from './components/ConfirmationSubmission/ConfirmationSubmission';

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false); // New state variable
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleFormSubmit = () => {
    setFormSubmitted(true);
    setTimeout(() => setShowConfirmation(true), 1000);
  }

  return (
    <>
      <Logo />
      <h1>Discord Application Form</h1>
      {!formSubmitted ? (
        <ApplicationForm onFormSubmit={handleFormSubmit} />
      ) : showConfirmation ? (
        <ConfirmationSubmission />
      ) : null}
      <Footer />
    </>
  )
};

export default App;