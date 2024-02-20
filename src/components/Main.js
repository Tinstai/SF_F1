import React, {useState} from "react";
import axios from "axios";

import "../styles/Main.css";
import Weathers from "./Weathers";
import Yandex from "./Yandex";
import Cities from "./Cities";


function Main() {
    const [name, setName] = useState("Moscow");
    const [weathers, setWeathers] = useState([]);
    const handleNameChange = (name) => {
       setName(name);
       const WeaUrl = "http://api.openweathermap.org/data/2.5/forecast?q="+name+",ru&APPID=fe4c586fd2c32a2e3e13d3ad079f4ea1&units=metric";
       axios.get(WeaUrl).then(res => {
            setWeathers(res.data.list);
            });
    }


    return (
        <main>
            <Cities onChange={handleNameChange}/>
            <Yandex />
            <Weathers name={name} weathers={weathers} />
        </main>
    );
}

export default Main;