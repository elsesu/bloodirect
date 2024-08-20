import HeroComponent from "../../sections/hero/hero-component";
import TwoCtaComponent from "../../sections/two-cta/two-cta-component";
import ThreeStepProcessComponent from "../../sections/three-step-process/three-step-process-component";
import SideBySideComponent from "../../sections/side-by-side/side-by-side-component";
import QuoteComponent from "../../sections/quote/quote-component";
import CriteriaComponent from "../../sections/criteria/criteria-component";
import HeaderComponent from "../../sections/header/header-component";
import BeforeFooterCTA from "../../sections/before-footer-cta/before-footer-cta-components";
import FooterComponent from "../../sections/footer/footer-component";

const HomePage = () => {
	const HomePageDetails = {
		donate_blood: {
			subheadingText: " Donate blood, be a lifesaver",
			headingText: "Maintain a healthy lifestyle and donate blood with Bloodirect",
			classHint: "side-col-image donate-blood-with-hemocell",
			paraText:
				"Our Goal is to empower every healthy individual to become a hero by simplifying blood donation, optimizing blood availability, and ensuring timely access for those in urgent need. We revolutionize the way blood is donated, managed, and distributed, saving lives and creating a world where no one faces the fear of inadequate blood supply.",
			imageUrl: "../../../assets/images/blood-donation(1).jpg",
			buttonText: "Donate Now",
			buttonLink: "/donate-blood",
			buttonHave: true,
		},
		quote: {
			classHint: "quote",
			quoteText: `“Your blood donation can be a lifeline. Today It helps a stranger And Tomorrow It could save someone you cherish or even you.”`,
		},
		why_donate_blood: {
			subheadingText: "Be a Hero Today: Donate Blood!",
			headingText: "Every drop counts. Here's why you should become a hero:",
			classHint: "side-col-image why-donate-blood",
			paraText: `Donating blood is a simple act with a life-changing impact:
			 ● One donation, multiple heroes. A single pint of blood can help up to three people in need. 
			 ● The ultimate first responder. Blood is critical in emergencies, accidents, and natural disasters. Be prepared to answer the call. 
			 ● The gift of healing. Patients undergoing surgery, cancer treatment, and other procedures rely on blood transfusions to fight for their future.
			 ● An irreplaceable resource. Blood is a precious gift that can't be manufactured. You are the lifeline.
			 ● A double win for health. Donating blood may even benefit your own health by reducing the risk of certain conditions.`,
			imageUrl: "../../../assets/images/blood-donation(1).jpg",
			buttonText: "Donate Now",
			buttonLink: "/donate-blood",
			buttonHave: true,
		},
		eligiblity_criteria: {
			subheadingText: "To ensure the safety of both donors and recipients here are some criteria for blood donation.",
			headingText: "Blood Donation Eligibility Criteria:",
			classHint: "side-col-image eligibility-criteria",
			paraText: [
				`Age: Minimum age of 18, up to 60`,
				`Weight: Minimum weight requirement is typically around 110 lbs (50 kg).`,
				`Health: You must be in good general health and free from any symptoms of illness like fever, cold, or flu.`,
				`Identification: must have a valid form of photo ID eg NIN, Voters Card, Passport etc`,
				`Hemoglobin Level: Your hemoglobin level needs to meet a minimum requirement (typically 12.5 g/dL for women and 13.0 g/dL for men).`,
				`Travel: If you've recently traveled to certain areas with a higher risk of infectious diseases, you may need to wait before donating.`,
				`Recent Tattoos or Piercings: Wait times vary, but typically you'll need to wait 6 months after getting a tattoo or piercing before donating.`,
			],
			imageUrl: "../../../assets/images/blood-donation(1).jpg",
			buttonText: "Donate Now",
			buttonLink: "/donate-blood",
			buttonHave: false,
		},
		hero: {
			subheadingText: "Donate Blood! Give Life!",
			headingText: "Not all heroes wear capes, Some donate Blood",
			classHint: "home-page-hero",
		},
		stepsText: {
			subheadingText: "Donation Process",
			headingText: "Easy Steps to Donate Blood",
		},
	};

	const stepDetails = [
		{
			key: "check-eligibility",
			stepNumber: "01",
			stepName: "Check your eligibility",
			stepDescription:
				"Head to our quick eligibility quiz to see if you meet the basic requirements to donate blood.",
		},
		{
			key: "Complete the Donor Form Online",
			stepNumber: "02",
			stepName: "Complete the Donor Form Online",
			stepDescription:
				"Save time by filling out our secure online donor form (link to form) at your convenience.",
		},
		{
			key: "Get Notified of Donation Opportunities",
			stepNumber: "03",
			stepName: "Get Notified of Donation Opportunities",
			stepDescription:
				"We'll contact you by email, phone call or text (based on your preference) when there's a critical need for your blood type in your area."
				,
		},
		{
			key: "Schedule Your Donation",
			stepNumber: "03",
			stepName: "Schedule Your Donation",
			stepDescription:
				"Once notified, you can easily schedule your donation appointment at a convenient location near you (link to appointment scheduler).",
				
			
		},
	];

	return (
		<>
			<HeaderComponent />

			<HeroComponent {...HomePageDetails.hero} />
			<TwoCtaComponent />
			<ThreeStepProcessComponent
				stepsText={HomePageDetails.stepsText}
				stepDetails={stepDetails}
			/>
			<SideBySideComponent {...HomePageDetails.donate_blood} />
			<QuoteComponent {...HomePageDetails.quote} />
			<SideBySideComponent {...HomePageDetails.why_donate_blood} />
			<CriteriaComponent {...HomePageDetails.eligiblity_criteria} />
			<BeforeFooterCTA />
			<FooterComponent />
		</>
	);
};

export default HomePage;
