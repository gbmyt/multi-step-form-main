export const formStepsData = {
    1: {
        title: "Personal info",
        subTitle: "Please provide your name, email address, and phone number.",
        metadata: {
            inputType: "text",
            options: [
                {
                    fieldName: "Name",
                    placeholderText: "e.g. Stephen King",
                },
                {
                    fieldName: "Email Address",
                    placeholderText: "e.g. stephenking@lorem.com",
                },
                {
                    fieldName: "Phone Number",
                    placeholderText: "e.p. +1 234 567 890",
                },
            ],
        },
    },
    2: {
        title: "Select Your Plan",
        subTitle: "You have the option of monthly or yearly billing",
        metadata: {
            inputType: "button", // card?
            options: [
                { name: "Arcade", type: { monthly: 9, yearly: 90 } }, // if yearly, add 2 months free discount message
                { name: "Advanced", type: { monthly: 12, yearly: 120 } },
                { name: "Pro", type: { monthly: 15, yearly: 150 } },
            ],
        },
    },
    3: {
        title: "Pick add-ons",
        subTitle: "Add-ons help enhance your gaming experience.",
        metadata: {
            inputType: "checkbox",
            options: [
                {
                    name: "Online Service",
                    description: "Access to multiplayer games",
                    monthlyPrice: 1,
                },
                {
                    name: "Larger storage",
                    description: "Extra 1TB of cloud save",
                    monthlyPrice: 2,
                },
                {
                    name: "Customizable profile",
                    description: "Custom theme on your profile",
                    monthlyPrice: 2,
                },
            ],
        },
    },
    4: {
        title: "Finishing Up",
        subTitle: "Double-check everything looks OK before confirming.",
        metadata: {
            inputType: "none",
            options: [],
        },
    },
}
