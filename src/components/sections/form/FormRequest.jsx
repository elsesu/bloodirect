import React from 'react'
import { useState } from "react";
import "./form-component-styles.scss";
import WrapperSection from "../wrapper-section/wrapper-section-component";
import { db } from '../../../firebase.config';
import { addDoc, collection } from 'firebase/firestore';
const FormRequest = ({
	heading,
	buttonText,

}) => {
	const [name, setName] =  useState('')
	const [email, setEmail] =  useState('')
	const [phone, setPhone] =  useState('')
	const [blood_type, setBloodType] =  useState('')
	const [state, setState] =  useState('')
	const [current_hospital_address, setCurrentHospitalAddress] =  useState('')
	const [lga, setLga] =  useState('')

    const [status, setStatus] = useState("Pending");
	const inputStyles = `block w-full flex justify-start items-start rounded-rsm border-0 px-8 py-3 md:px-10 md:py-4 bg-light text-white ring-none placeholder:text-white outline-none focus:ring-1 focus:ring-center focus:bg-dark focus:ring-light sm:text-sm sm:leading-6`;



	const formData = {
		name,
		email,
		phone,
		blood_type,
		state,
		current_hospital_address,
		lga,
	 }

	 const disable = !name || !email || !phone || !blood_type || !state || !current_hospital_address || !lga;

	const handleRequest = async () => {
		try {
		  const docRef = await addDoc(collection(db, "request"), {
			formData
		  });
		  console.log("Document written with ID: ", docRef.id);
		
		} catch (error) {
		  console.log(error, 'there was an error');
		}
	  };
	
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
						Your Request has been Scheduled,    Thank you for contacting Bloodirect.
			
					</p>
				) : (
					<form
						className="contact-form grid grid-cols-1 sm:grid-cols-2 gap-5 w-full relative sm:p-6 py-8 sm:p-10 rounded-rmd z-[25] overflow-hidden"
						// method="POST"
						onSubmit={handleRequest}
					>
					<input
						 type="text"
						 value={name}
						 id={name}
						 placeholder="Enter Name"
						 onChange={(event) => setName(event.target.value)}
						 className={inputStyles}
						 required
						 />

                          <input
						 type="text"
						 value={email}
						 id={email}
						 placeholder="Enter Email"
						 onChange={(event) => setEmail(event.target.value)}
						 className={inputStyles}
						 required
						 />

                         <input
						 type="text"
						 value={phone}
						 id={phone}
						 placeholder="Enter Phone"
						 onChange={(event) => setPhone(event.target.value)}
						 className={inputStyles}
						 required
						 />
						 <select 
						 name={blood_type}
						 id={blood_type}
						 value={blood_type}
						 onChange={(e) => setBloodType(e.target.value)}
						 required
						  className={inputStyles}>
							<option value="0">0-</option>
							<option value="0+">0+</option>
							<option value="A-">A-</option>
							<option value="A+">A+</option>
							<option value="B-">B-</option>
							<option value="B+">B+</option>
							<option value="AB-">AB-</option>
							<option value="AB+">AB+</option>
						 </select>

						 <input
						 type="text"
						 value={state}
						 id={state}
						 placeholder="Enter State"
						 onChange={(event) => setState(event.target.value)}
						 className={inputStyles}
						 required
						 />

                       <input
						 type="text"
						 value={current_hospital_address}
						 id={current_hospital_address}
						 placeholder="Enter Address"
						 onChange={(event) => setCurrentHospitalAddress(event.target.value)}
						 className={inputStyles}
						 required
						 />

                         <input
						 type="text"
						 value={lga}
						 id={lga}
						 placeholder="Enter Local Government"
						 onChange={(event) => setLga(event.target.value)}
						 className={inputStyles}
						 required
						 />
					
						
						<div className={"grid place-items-center sm:col-span-2 gap-5 mb-5 w-full"}>
							<button
							disabled={disable}
								type="submit"
								name="submit"
								onClick={(e) => {
									handleRequest(e);
									setStatus("Submited");
								}}
								className={ disable ? "text-white bg-gray-500 rounded-rsm border border-white transition px-10 py-4 text-sm  font-bold w-fit cursor-pointer"  : ` rounded-rsm border border-white hover:border-red text-dark bg-white hover:bg-red hover:text-white transition px-10 py-4 text-sm  font-bold w-fit cursor-pointer` }
							>
								{buttonText}
								
							</button>
							{disable? (
								<div className="text-red-100 bg-white rounded-rlg p-2"> Some Fields  Are Missing</div>
							):<></>}
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

export default FormRequest
