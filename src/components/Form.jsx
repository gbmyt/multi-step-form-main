import { useState } from "react"
import bgMobile from "../assets/images/bg-sidebar-mobile.svg"
import { formStepsData } from "../data/data"

const Form = () => {
    const [currentStep, setStep] = useState(0)
    // const formSteps = ["Your Info", "Select Plan", "Add-Ons", "Summary"]

    function handleUpdateFormStep(e) {
        e.preventDefault()

        if (e.target.id === "next-btn") {
            currentStep + 1 >= formStepsData.length
                ? console.log("Out of bounds.")
                : setStep((prev) => (prev += 1))
        } else if (e.target.id === "back-btn") {
            currentStep - 1 < 0
                ? console.log("Out of bounds.")
                : setStep((prev) => (prev -= 1))
        }
    }

    function handleFormSubmit(e) {
        e.preventDefault()
        console.log("Submitting...")
    }

    return (
        <form id="form">
            {formStepsData &&
                formStepsData.map((step, i) => (
                    <button
                        className={`btnCarousel ${
                            currentStep == i ? "selected" : null
                        }`}
                        key={i}
                    >
                        {i + 1}
                    </button>
                ))}

            <header>
                <img src={bgMobile} alt="background-image" />
                <h1>{formStepsData[currentStep].title}</h1>
                <p>{formStepsData[currentStep].subTitle}</p>
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
            {currentStep > 0 ? (
                <button
                    id="back-btn"
                    className="footer buttons"
                    type="submit"
                    onClick={handleUpdateFormStep}
                >
                    Go Back
                </button>
            ) : (
                <></>
            )}

            {/* Change to 'Confirm' on last page  */}

            {currentStep === formStepsData.length - 1 ? (
                <button
                    id="submit"
                    className="footer buttons submit"
                    type="submit"
                    onClick={handleFormSubmit}
                >
                    Confirm
                </button>
            ) : currentStep < formStepsData.length ? (
                <button
                    className="footer buttons"
                    id="next-btn"
                    onClick={handleUpdateFormStep}
                >
                    Next Step
                </button>
            ) : (
                <></>
            )}
        </form>
    )
}

export default Form
