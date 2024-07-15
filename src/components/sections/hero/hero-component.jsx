import "./hero-component-styles.scss";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router";

const HeroComponent = ({ subheadingText, headingText, classHint }) => {
	const Navigate = useNavigate()
	const {user} = useAuth()
	return (
		<section className={`main-wrapper ${classHint}`}>
			<div className="main-container">
				<div className="text-wrapper sm:w-[650px] flex flex-col justify-center items-center">
					<h3 className="subheading relative font-bold sm:text-[20px] leading-[2em] text-center tracking-[0.3em] uppercase text-off_white">
						{ subheadingText }
					</h3>
					<h1 className="font-bold text-[35px] sm:text-[60px] leading-tight text-center capitalize text-white">
						{headingText }
					</h1>
					<br />
					{ user ? <></> : (<button className=' rounded-rsm border border-white hover:border-red text-dark bg-white hover:bg-red hover:text-white transition px-10 py-4 text-sm  font-bold w-fit cursor-pointer' onClick={()=>Navigate('/sign-up')}>Sign up</button>)}
				</div>
			</div>
		</section>
	);
};

export default HeroComponent;
