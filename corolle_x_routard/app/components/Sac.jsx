import Paragraph from "./Paragraph"
import Title from "./Title"
import Cta from "./Cta"

export default function Sac(){
    return(
        <section className="flex flex-col justify-center w-full max-lg:h-auto py-8">
            <div className="flex max-w-[80%] my-10 mx-auto justify-evenly max-lg:flex-col max-lg:max-w-[50%] max-lg:items-center">
                <img className="w-[30%] mx-2 max-lg:w-full object-contain z-2" src={"/girlLily.png"} alt="illustration d'une fille avec Lily dans son sac à dos"/>
            </div>
            <div className="flex flex-col justify-center text-center mx-auto max-w-[80vw]">
                <Title className="text-[5em] text-center max-lg:text-3xl">
                    Le sac d’aventure
                </Title>
                <Paragraph>
                    L’aventure ne s’arrête pas là ! Pars à la découverte du monde avec ton sac à dos Les Aventures de Lily !
                    <br/>
                    <i>Conçu spécialement pour transporter ta poupée partout</i>
                </Paragraph>
            </div>
            <div className="mt-5">
                <Cta>
                    Rejoins les aventures de Lily !
                </Cta>
            </div>
        </section>
    )
}