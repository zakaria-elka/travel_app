import React, {useEffect, useState} from "react";
import Vnav from "./Vnav";
import Title from "./title";
import Showoffres from "./showoffres";
import './data.css'

const Data=()=>{



return(
<section className="datadiv">    
<Vnav />
<Showoffres />
<Title/>
</section>

)


}

export default Data