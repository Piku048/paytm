import { Heading } from "../components/Heading"
import { Subheading } from "../components/Subheading"
import { Inputbox } from "../components/Inputbox"
import React from "react"
function Signup(){
     return <div className=".h-full .w-full bg-slate-300 flex justify-center">
         <div className="flex flex-col justify-center">
           <Heading label={"Signup"}></Heading>
           <Subheading label={"Enter your information to Create your account"}></Subheading>
           <Inputbox label={"Firstname"} placeholder={"John"} ></Inputbox>
         </div>


     </div>

}
export default Signup;