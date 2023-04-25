import RegistrationForm from "../components/RegistrationForm";
import Header from "../components/Header";

/**
 * Normally, the browser would render the HTML and, depending on the action,
 * automatically submit the data of the form based on each element's name attribute.
 * Although this default behavior still works in React.js,
 * it is highly advised to programmatically submit a form
 * by supplying your own custom controls on how data is processed by a component.
 * https://www.pluralsight.com/guides/form-submission-in-reactjs
 *
 */
function RegistrationPage() {
    return(
        <>
            <Header title="REGISTRACE"></Header>
            <main>
                <RegistrationForm  />
            </main>
        </>
    )
}

export default RegistrationPage;