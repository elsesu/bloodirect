import { useState } from "react";
import HeroComponent from "../../sections/hero/hero-component";
import ThreeStepProcessComponent from "../../sections/three-step-process/three-step-process-component";
import SideBySideComponent from "../../sections/side-by-side/side-by-side-component";
import QuoteComponent from "../../sections/quote/quote-component";
import CriteriaComponent from "../../sections/criteria/criteria-component";
import FormComponent from "../../sections/form/form-component";
import HeaderComponent from "../../sections/header/header-component";
import BeforeFooterCTA from "../../sections/before-footer-cta/before-footer-cta-components";
import FooterComponent from "../../sections/footer/footer-component";
<<<<<<< HEAD


const DonateBloodPage = () => {
	
=======
import { db } from "../../../firebase.config";
import { addDoc, collection } from "firebase/firestore"; 

const DonateBloodPage = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		blood_type: "",
		state: "",
		lga:"",
		address: "",

	});



	const handleDonate = async () => {
		try {
		  const docRef = await addDoc(collection(db, "donate"), {
			name: formData.name,
			email: formData.email,
			phone: formData.phone,
			blood_type: formData.blood_type,
			state: formData.state,
			lga: formData.lga,
			address: formData.address
		  });
		  console.log("Document written with ID: ", docRef.id);
		  setFormData({
			name: "",
			email: "",
			phone: "",
			blood_type: "",
			state: "",
			address: "",
			lga: "",
		  });
		} catch (error) {
		  console.log(error, 'there was an error');
		}
	  };

>>>>>>> master
	const DonateBloodPageDetails = {
		quote: {
			classHint: "quote",
			quoteText: `“By donating money, you provide nourishment. By donating blood, you give the gift of life. Join us in this noble cause today!”`,
		},
		why_donate_blood: {
			subheadingText: "Donate blood today",
			headingText: "Why should you donate blood?",
			classHint: "side-col-image why-donate-blood",
			paraText: `Donating blood is a selfless act that has the power to save lives. Here are a few reasons why you should consider donating blood:
			\n― You could help save up to three lives with just one donation.
			― Blood is always needed in emergency situations, such as natural disasters and accidents.
			― Blood is needed for patients undergoing surgeries, cancer treatment, and other medical procedures.
			― Blood cannot be manufactured, which means that the only source of blood is through donations from volunteers.
			― Donating blood can also have health benefits for the donor, such as reducing the risk of heart disease and cancer.`,
			imageUrl: "../../../assets/images/blood-donation(1).jpg",
			buttonText: "Donate Now",
			buttonLink: "/donate-blood",
			buttonHave: true,
		},
		eligiblity_criteria: {
			subheadingText: "Ready to be a hero?",
			headingText: "lets Find Out Together",
			classHint: "side-col-image eligibility-criteria",
			paraText: [
				`ARE YOU?`,
				`18-50 years, above 50 Kg.`,
				`Normal temperature, pulse and blood pressure.`,
				`No Respiratory Diseases`,
				`Above 12.5 g/dL Hemoglobin`,
				`No skin disease, puncture or scars`,
				`No history of transmissible disease`,
			],
			imageUrl: "../../../assets/images/blood-donation(1).jpg",
			buttonText: "Donate Now",
			buttonLink: "/donate-blood",
			buttonHave: false,
		},
		hero: {
			subheadingText: "Donate Blood",
			headingText: "Save life by donating blood today",
			classHint: "donate-blood-page-hero",
		},
		stepsText: {
			subheadingText: "Donation Process",
			headingText: "Step-by-Step Guide to Donating Blood",
		},
	};

	const stepDetails = [
		{
			key: "check-eligibility",
			stepNumber: "01",
			stepName: "Check your eligibility",
			stepDescription:
				"Confirm you meet the eligibility requirements to donate blood, such as age, weight, and overall health.",
		},
		{
			key: "schedule-an-appointment",
			stepNumber: "02",
			stepName: "Schedule an appointment",
			stepDescription:
				"Schedule an appointment at a blood bank or blood drive near you.",
		},
		{
			key: "donate-blood",
			stepNumber: "03",
			stepName: "Donate Blood",
			stepDescription:
				"Arrive at the appointment, fill out a questionnaire, and donate blood. The process takes about 10-15 minutes.",
		},
	];

<<<<<<< HEAD
	
=======
	const fields = [
		{
			key: "name",
			name: "name",
			type: "text",
			placeholder: "Name",
			required: true,
		},
		{
			key: "email",
			name: "email",
			type: "email",
			placeholder: "Email",
			required: true,
		},
		{
			key: "phone",
			name: "phone",
			type: "text",
			placeholder: "Phone",
			required: true,
		},
		{
			key: "blood_type",
			name: "blood_type",
			type: "text",
			placeholder: "Blood Type",
			required: true,
		},
		{
			key: "state",
			name: "state",
			type: "text",
			placeholder: "State",
			required: true,
		},
		{
			key: "address",
			name: "address",
			type: "text",
			placeholder: "Address",
			required: true,
		},
		{
			key: "lga",
			name: "lga",
			type: "text",
			placeholder: "LGA",
			required: true,
		},
	];

>>>>>>> master
	return (
		<>
			<HeaderComponent />

			<HeroComponent {...DonateBloodPageDetails.hero} />
			<FormComponent
<<<<<<< HEAD
				heading={"Schedule an Appointment"}
				buttonText={"Schedule an Appointment"}
=======
				fields={fields}
				heading={"Schedule an Appointment"}
				buttonText={"Schedule an Appointment"}
				handleDonate={handleDonate}
				formData={formData}
				setFormData={setFormData}
>>>>>>> master
			/>
			<ThreeStepProcessComponent
				stepsText={DonateBloodPageDetails.stepsText}
				stepDetails={stepDetails}
			/>
			<CriteriaComponent
				{...DonateBloodPageDetails.eligiblity_criteria}
			/>
			<SideBySideComponent {...DonateBloodPageDetails.why_donate_blood} />
			<QuoteComponent {...DonateBloodPageDetails.quote} />
			<BeforeFooterCTA />
			<FooterComponent />
		</>
	);
};

export default DonateBloodPage;
