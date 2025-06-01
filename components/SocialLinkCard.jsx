import React from 'react'
import avatar from "../src/assets/images/avatar-jessica.jpeg"
import SocialBtn from './SocialBtn'

const SocialLinkCard = () => {
  return (
    <div className="bg-custom-card max-h-180 rounded-xl p-8 lg:p-10">
        {/* sempre que for mostrar items que não possam ser inline, usar flex-col, se for inline, usar flex-wrap */}
        <div className="flex flex-col gap-2 pl-4 pr-4 lg:pr-8 lg:pl-8">
            <div className="flex justify-center text-center pb-6">
                <img className="rounded-full max-h-24" src={avatar} alt="Card Image"></img>
            </div>
            <div className="flex justify-center text-center">
                <h3 className="text-2xl font-bold"> 
                    Jessica Randall
                </h3> 
            </div>
            <div className="flex justify-center text-center pb-4">
                <h3 className="text-custom-color-green text-md font-bold"> 
                    London, United Kingdon
                </h3> 
            </div>
            <div className="flex justify-center text-center">
                <h3 className="text-sm"> 
                    "Front-end developer and avid reader."
                </h3> 
            </div>
        </div>

       <div className="flex flex-col pt-6 gap-4">
            <div className="flex justify-center">
                <SocialBtn>Github</SocialBtn>
                {/* existe essa outra forma de declarar componentes no react, fazendo assim, oq tiver dentro dos <> vai ser a prop 'children'
                ver SocialBtn.jsx */}
            </div>
            <div className="flex justify-center">
                <SocialBtn text="Frontend Mentor"/>
            </div>
            <div className="flex justify-center">
                <SocialBtn text="Linkedn"/>
            </div>
            <div className="flex justify-center">
                <SocialBtn text="Twitter"/>
            </div>
            <div className="flex justify-center">
                <SocialBtn text="Instagram"/>
            </div>
        </div>


    </div>
  )
}

export default SocialLinkCard
