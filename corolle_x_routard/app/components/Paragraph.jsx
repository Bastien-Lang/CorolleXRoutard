import { Children } from "react";

export default function Paragraph({children}){
    return(
        <p className="text-base md:text-lg lg:text-2xl xl:text-3xl max-lg:text-center">
          {children}
        </p>
    )
}