import React, {useState} from 'react'
import WrapperSection from '../wrapper-section/wrapper-section-component';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const LoginCard = ({
	heading,
	buttonText,

}) => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');


    const disable = !password || !email

    const {
        SignIn,
        SignWithPop,
    } = useAuth()

    const formData = {
        email,
        password,
    }

    const Navigate  =  useNavigate()

    const handleSignIn = ()=>{
        const formData = {
            email,
            password,
        }
        SignIn(formData)
        Navigate('/')
    }

    const handleSignInWithPop = ()=>{
        SignWithPop()
        Navigate('/')
    };


	const inputStyles = `block w-full flex justify-start items-start rounded-rsm border-0 px-8 py-3 md:px-10 md:py-4 bg-light text-white ring-none placeholder:text-white outline-none focus:ring-1 focus:ring-center focus:bg-dark focus:ring-light sm:text-sm sm:leading-6`;
    const inputStyles1 = `block w-full flex justify-start items-start rounded-rsm border-0 px-8 py-3 md:px-10 md:py-4 bg-light text-white ring-none placeholder:text-white outline-none focus:ring-1 focus:ring-center focus:bg-dark focus:ring-light sm:text-sm sm:leading-6 h-[200px]`;
  return (
    <WrapperSection>
    <div
        className={`form-wrapper -mt-[10em] w-full relative p-6 py-10 lg:p-20 lg:pb-10 rounded-rmd z-[25] overflow-hidden`}
    >
        <h3 className="not-italic text-center font-medium text-[16px] sm:text-[25px] leading-[34px] tracking-[0.2em] sm:tracking-[0.3em] uppercase text-white">
            {heading}
        </h3>
        {status === "Submited" ? (
            <p className="text-center text-white text-sm sm:text-base mt-5">
             Thank you for contacting Bloodirect.
    
            </p>
        ) : (
            <form
                className="contact-form grid grid-cols-1 sm:grid-cols-2 gap-5 w-full relative sm:p-6 py-8 sm:p-10 rounded-rmd z-[25] overflow-hidden"
                // method="POST"
                onSubmit={SignIn}
            >


                    <input
						 type="email"
						 value={email}
						 id={email}
						 placeholder="Enter Email"
						 onChange={(event) => setEmail(event.target.value)}
						 className={inputStyles}
						 required
						 />

<input
						 type="password"
						 value={password}
						 id={password}
						 placeholder="Enter Password"
						 onChange={(event) => setPassword(event.target.value)}
						 className={inputStyles}
						 required
						 />
					

            
                <div className="grid place-items-center sm:col-span-2 gap-5 mb-5 w-full">
                    <button
                        type="submit"
                        name="submit"
                        onClick={() => {
                            handleSignIn();
                            setStatus("Submited");
                        }}
                        className={ disable ? "text-white bg-gray-500 rounded-rsm border border-white transition px-10 py-4 text-sm  font-bold w-fit cursor-pointer"  : ` rounded-rsm border border-white hover:border-red text-dark bg-white hover:bg-red hover:text-white transition px-10 py-4 text-sm  font-bold w-fit cursor-pointer` }
                    >
                        {buttonText}
                    </button>

                    <button  onClick={handleSignInWithPop} className=' rounded-rsm border border-white hover:border-red text-dark bg-white hover:bg-red hover:text-white transition px-10 py-4 text-sm  font-bold w-fit cursor-pointer'>Login Up With Google</button>
                    
                    {/* <button
                        className={` rounded-rsm border border-white hover:border-red text-dark bg-white hover:bg-red hover:text-white transition px-10 py-4 text-sm w-fit font-bold w-fit cursor-pointer`}
                        // onClick={() => {
                        // 	handleSubmit;
                        // 	setStatus("Submited");
                        // }}
                        type="submit"
                        onClick={(e) => {
                            handleSubmit(e);
                            setStatus("Submited");
                        }}
                    >
                        {buttonText}
                    </button> */}
                </div>
            </form>
        )}
    </div>
</WrapperSection>
  )
}

export default LoginCard
