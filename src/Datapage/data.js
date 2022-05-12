import React, {useEffect, useState} from "react";
import Vnav from "../navCompo/Vnav";
import Title from "../navCompo/title";
import Showoffres from "./showoffres";
import './data.css'

const Data=()=>{



return(
<section className="datadiv">    
<Vnav setelement={"datapage"}/>
<Showoffres />
<Title />
</section>

)


}

export default Data