import React, {useState} from "react";

import JsonFile from '../cities/cities.json';
import Form from "react-bootstrap/Form";
import "../styles/Cities.css";


function Cities({onChange}) {
    const [cities, setCities] = useState([]);
    if(!cities.length) {
    setCities(JsonFile);
    }
    const handleNameChange = (event) => {
        onChange(event.target.value)
    }

    return (
            <>
                <p> Выберите город из списка: </p>
                <Form.Select aria-label="Select city" id='c1' onChange={handleNameChange}>
                    {cities.map(city => <option key={city.id} value={city.name}>{city.name}</option>)}
                </Form.Select>
            </>
    )
}

export default Cities;