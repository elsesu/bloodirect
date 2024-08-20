import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const ButtonComponent = ({ buttonText, buttonLink, buttonType }) => {
	const Navigate = useNavigate()
	const {user} = useAuth()
	return (
		<div>
      { user ? (<button
			className={`cta-btn 
            mt-5 rounded-rsm border 
            ${
				buttonType === "fill"
					? "border-dark_red text-white bg-dark_red hover:bg-dark hover:text-white"
					: "border-off_white/[.5] text-dark bg-white hover:bg-red hover:text-white hover:border-red"
			}
            transition text-black px-8 py-3 text-sm w-fit font-bold`}
		>
			<NavLink to={buttonLink}>{buttonText}</NavLink>
			
		</button>): <button onClick={()=>Navigate('/sign-up')}className=' rounded-rsm border border-white hover:border-red text-dark bg-white hover:bg-red hover:text-white transition px-10 py-4 text-sm  font-bold w-fit cursor-pointer'>Sign Up</button>}
		</div>
		
		
	);
};

export default ButtonComponent;
