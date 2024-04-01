import { useState } from "react";
import HeroComponent from "../../sections/hero/hero-component";
import ThreeStepProcessComponent from "../../sections/three-step-process/three-step-process-component";
import QuoteComponent from "../../sections/quote/quote-component";
import CriteriaComponent from "../../sections/criteria/criteria-component";
import FormComponent from "../../sections/form/form-component";
import SearchBloodStockComponent from "../../sections/search-blood-stock/search-blood-stock-component";
import HeaderComponent from "../../sections/header/header-component";
import BeforeFooterCTA from "../../sections/before-footer-cta/before-footer-cta-components";
import FooterComponent from "../../sections/footer/footer-component";

import Axios from "axios";
import newUsersInsertRequest from "../../utility-functions/new-users-insert-request";

const NeedBloodPage = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		bloodType: "",
		state: "",
		lga: "",
		current_hospital_address: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(formData);

		Axios.post("http://localhost:3001/create-need-blood", {
			name: formData.name,
			email: formData.email,
			phone: formData.phone,
			bloodType: formData.bloodType,
			state: formData.state,
			lga: formData.lga,
			current_hospital_address: formData.current_hospital_address,
		})
			.then((response) => {
				console.log("success");
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
			});

		newUsersInsertRequest(formData, "need-blood");

		setFormData({
			name: "",
			email: "",
			phone: "",
			bloodType: "",
			state: "",
		    lga: "",
		    current_hospital_address: "",
			
		});
	};

	const NeedBloodPageDetails = {
		quote: {
			classHint: "quote need-blood-quote",
			quoteText: `Need Blood Fast? Don't Worry. We Can Help. Request a Callback for Swift Assistance`,
			buttonText: "Call Now",
			buttonLink: "tel:+2349024177393",
			buttonHave: true,
		},
		tips_for_managing_blood_loss: {
			subheadingText: "",
			headingText: "Replenish and Relax After Your Transfusion",
			classHint: "tips-for-managing-blood-loss",
			paraText: [
				`Hydrate: Drink plenty of fluids (water, juice) throughout the day to replace lost fluids.`,
				`Eat Well: Enjoy a healthy meal or snack to replenish energy levels.`,
				`Apply pressure to the wound to slow down or stop the bleeding.`,
				`Drink fluids such as water or sports drinks to help replenish lost fluids.`,
				`Consume foods that are high in iron and protein, such as spinach, beans, and lean meats to help replenish lost nutrients.`,
				`Consider taking iron supplements if recommended by your doctor.`,
				`Keep a record of any symptoms and changes in condition to share with medical professionals.`,
			],
			imageUrl: "../../../assets/images/blood-donation(1).jpg",
			buttonHave: false,
		},
		hero: {
			subheadingText: "Need Blood Donation?",
			headingText: "Let Us Find a Match for You.",
			classHint: "hero need-blood-page-hero",
		},
		stepsText: {
			subheadingText: "Receiving Blood",
			headingText: "Here's What to Expect During Blood Transfusion",
		},
		bloodStock: {
			subheadingText: "What do you need?",
			headingText: "Search Blood Groups",
			classHint: "search-blood-stock",
		},
	};

	const stepDetails = [
		{
			key: "registration",
			stepNumber: "01",
			stepName: "Quick Registration",
			stepDescription:
				"Fill out a form with your basic information and medical history.",
		},
		{
			key: "screening",
			stepNumber: "02",
			stepName: "Confidential Screening",
			stepDescription:
				"A healthcare professional will check your vitals and ask health questions to ensure eligibility.",
		},
		{
			key: "donation",
			stepNumber: "03",
			stepName: "Comfortable Donation",
			stepDescription:
				"Relax while a sterile needle collects your blood for life-saving transfusions.",
		},
	];

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
			type: "tel",
			placeholder: "Phone",
			required: true,
		},
		{
			key: "bloodType",
			name: "bloodType",
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
			key: "lga",
			name: "lga",
			type: "text",
			placeholder: "Local Government",
			required: true,
		},
		{
			key: "current_hospital_address",
			name: "current_hospital_address",
			type: "text",
			placeholder: "current Hospital Address",
			required: true,
		},
	];

	return (
		<>
			<HeaderComponent />

			<HeroComponent {...NeedBloodPageDetails.hero} />
			<FormComponent
				fields={fields}
				heading={"Request for emergency blood"}
				buttonText={"Request blood"}
				handleSubmit={handleSubmit}
				formData={formData}
				setFormData={setFormData}
			/>
			<QuoteComponent {...NeedBloodPageDetails.quote} />
			<SearchBloodStockComponent {...NeedBloodPageDetails.bloodStock} />
			<ThreeStepProcessComponent
				stepsText={NeedBloodPageDetails.stepsText}
				stepDetails={stepDetails}
			/>
			<CriteriaComponent
				{...NeedBloodPageDetails.tips_for_managing_blood_loss}
			/>
			<BeforeFooterCTA />
			<FooterComponent />
		</>
	);
};

export default NeedBloodPage;
