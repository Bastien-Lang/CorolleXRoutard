import Paragraph from "./Paragraph";

export default function Footer(){
    return(
        <footer className="bg-[#DF4585] h-[30vh] relative flex items-center flex-col justify-center max-lg:h-auto">
            <img className="absolute top-[-3] right-0" src="/vector.png" alt="vector"/>
            <div className="flex w-full items-center justify-center py-10">
                <img className="h-[75px] mx-5 max-lg:h-[40px]" src="/logoCorolleBlanc.png" alt="logo Corolle" />
                <img className="h-[75px] mx-5 max-lg:h-[40px]" src="/logoRoutardBlanc.png" alt="logo Le Guide du Routard" />
            </div>
            <p className="text-center text-white pb-5"><i>@2026 MMI - Corolle x Le Routard<br/> Nous contacter : corollepoupée@gmail.com</i></p>
        </footer>
    )
}