import { formStepsData } from "../data/data"
import bgMobile from "../assets/images/bg-sidebar-mobile.svg"

const Form = () => {
    const steps = ["1", "2", "3", "4"]
    // const formSteps = ["Your Info", "Select Plan", "Add-Ons", "Summary"]

    function handleFormSubmit(e) {
        e.preventDefault()
        console.log(e.target, " clicked")
    }

    return (
        <form id="form">
            {steps && steps.map((step, i) => <button key={i}>{step}</button>)}

            <header>
                <img src={bgMobile} alt="background-image" />
                <h1>{formStepsData["1"].title}</h1>
                <p>{formStepsData["1"].subTitle}</p>
            </header>

            {/* Only show this if in desktop view */}
            {/* <section>
                {formSteps &&
                    formSteps.map((stepText, index) => (
                        <>
                            <h2>Step {index + 1}</h2>
                            <p>{stepText}</p>
                        </>
                    ))}
            </section> */}

            <section>
                form steps inputs todo
                {/* {formFields &&
                    formFields.map((fieldName) => (
                        <>
                            <label htmlFor={fieldName}>
                                {fieldName}
                                <input
                                    required
                                    type="text"
                                    name={fieldName}
                                    placeholder={fieldName}
                                />
                            </label>
                        </>
                    ))} */}
            </section>

            {/* Don't Show on First Page  */}
            {/* <button type="submit" onClick={handleFormSubmit}>
                Go Back
            </button> */}

            {/* Change to 'Confirm' on last page  */}
            <button type="submit" onClick={handleFormSubmit}>
                Next Step
            </button>
        </form>
    )
}

export default Form
