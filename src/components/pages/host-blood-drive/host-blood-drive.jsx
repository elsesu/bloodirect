import { useState } from "react";
import HeroComponent from "../../sections/hero/hero-component";
import ThreeStepProcessComponent from "../../sections/three-step-process/three-step-process-component";
import SideBySideComponent from "../../sections/side-by-side/side-by-side-component";
import QuoteComponent from "../../sections/quote/quote-component";
import FormComponent from "../../sections/form/form-component";
import HeaderComponent from "../../sections/header/header-component";
import BeforeFooterCTA from "../../sections/before-footer-cta/before-footer-cta-components";
import FooterComponent from "../../sections/footer/footer-component";

import Axios from "axios";
import newUsersInsertRequest from "../../utility-functions/new-users-insert-request";

const HostBloodDrivePage = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		institute: "",
		designation: "",
		city: "",
		message: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(formData);

		Axios.post("http://localhost:3001/create-host-blood-drive", {
			name: formData.name,
			email: formData.email,
			phone: formData.phone,
			institute: formData.institute,
			designation: formData.designation,
			city: formData.city,
			message: formData.message,
		})
			.then((response) => {
				console.log("success");
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
			});

		newUsersInsertRequest(formData, "host-blood-drive");

		setFormData({
			name: "",
			email: "",
			phone: "",
			institute: "",
			designation: "",
			city: "",
			message: "",
		});
	};

	const HostBloodDrivePageDetails = {
		quote: {
			classHint: "quote host-drive-quote",
			quoteText: `“Your commitment ripples outward. Partner with us and fuel hope, one blood donation at a time. !”`,
		},
		benefits_host_drive: {
			subheadingText: "Become a Lifesaver",
			headingText: "Reasons for Partnering with us",
			classHint: "side-col-image benefits-host-drive",
			paraText: `By partnering with us you Become a Beacon of Hope by Providing a convenient location for lifesaving donations, ensuring a steady blood supply for those in need.
		     as well as Fostering community engagement. Blood donation awareness campaigns are a fantastic way to boost morale and connection with donors and receivers.
			Unlock Inner Heroes Inspire employees, members, or colleagues to embrace their inner hero and make a tangible impact through donation.
			Together, we can create a powerful wave of generosity and save lives!`,
			imageUrl: "../../../assets/images/blood-donation(1).jpg",
			buttonText: "Join Us",
			buttonLink: "/host-blood-drive",
			buttonHave: true,
		},

		hosting_blood_drive: {
			subheadingText: "",
			headingText: "Organizing Blood donation Workshops",
			classHint: "side-col-image hosting-blood-drive",
			paraText: `Participate in a hero-making event!  Assemble a friendly volunteer team to manage registration, refreshments, and donor support.  Create a comfortable and welcoming environment with clear information and positive vibes.  Most importantly, prioritize safety by maintaining the highest hygiene standards and ensuring all equipment is sanitized and in top condition.  By focusing on both a smooth experience and donor comfort, you can turn your blood drive into a day of life-saving success!`,
			imageUrl: "../../../assets/images/blood-donation(1).jpg",
			buttonText: "Host Now",
			buttonLink: "/host-blood-drive",
			buttonHave: true,
		},

		hero: {
			subheadingText: "Partner with us to save lives",
			headingText: "Together, we can build a healthier community.",
			classHint: "host-blood-drive-page-hero",
		},
		stepsText: {
			subheadingText: "Spread the word and watch the heroes line up!",
			headingText: "Help Promote Us",
		},
	};

	const stepDetails = [
		{
			key: "promote-widely",
			stepNumber: "01",
			stepName: "Social Media Blitz ",
			stepDescription:
				"Post on Facebook, Instagram, Twitter with compelling visuals about saving lives.",
		},
		{
			key: "emphasize-benefits",
			stepNumber: "02",
			stepName: "Email Blast",
			stepDescription: "Reach out to your network and local groups, emphasize the urgency and positive impact.",
		},
		{
			key: "varity-of-channels",
			stepNumber: "03",
			stepName: "Flyers & Posters",
			stepDescription:
				"Catchy visuals and clear donation information placed in high-traffic areas.",
		},
		{
			key: "promote-widely",
			stepNumber: "04",
			stepName: "Life-Saving Impact",
			stepDescription:
				"Every donation counts! Highlight how the drive will benefit your community.",
		},
		{
			key: "promote-widely",
			stepNumber: "05",
			stepName: "Quick & Easy",
			stepDescription:
				"Simplify the process. Share testimonials about the ease of donating blood.",
		},
		{
			key: "promote-widely",
			stepNumber: "06",
			stepName: "Fun Atmosphere",
			stepDescription:
				"Offer refreshments, contests, or giveaways to create a positive experience.",
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
			key: "institute",
			name: "institute",
			type: "text",
			placeholder: "Institute",
			required: true,
		},
		{
			key: "designation",
			name: "designation",
			type: "text",
			placeholder: "Designation",
			required: false,
		},
		{
			key: "city",
			name: "city",
			type: "text",
			placeholder: "City",
			required: true,
		},
	];

	return (
		<>
			<HeaderComponent />
			<HeroComponent {...HostBloodDrivePageDetails.hero} />
			<FormComponent
				fields={fields}
				heading={"Contact Us for Partnership"}
				buttonText={"Join Us"}
				handleSubmit={handleSubmit}
				formData={formData}
				setFormData={setFormData}
			/>
			<ThreeStepProcessComponent
				stepsText={HostBloodDrivePageDetails.stepsText}
				stepDetails={stepDetails}
			/>
			<SideBySideComponent
				{...HostBloodDrivePageDetails.benefits_host_drive}
			/>

			<QuoteComponent {...HostBloodDrivePageDetails.quote} />
			<SideBySideComponent
				{...HostBloodDrivePageDetails.hosting_blood_drive}
			/>
			<BeforeFooterCTA />
			<FooterComponent />
		</>
	);
};

export default HostBloodDrivePage;
