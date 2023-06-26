import React, { useState } from "react";

const Select = ({options, onSelect, defaultOption}) => {
    return options.map(o => (<><input key={o.value} type="radio" name="color" className="form-check-input" onChange={(evt) => onSelect(o.value)} checked={defaultOption === o.value} id={o.value} /> <label class="form-check-label" htmlFor={o.value}></label></>))
}

const Abstraccion = () => {
    const [option, setOption] = useState(0);
    const options = [{value:"rojo"}, {value:"azul"}, {value:"negro"}, {value:"gris"}, {value:"verde"}];

    const optionSelected = (value) => {
        setOption(value);
    }

    return (
        <div className="col">
            <Select options={options} onSelect={optionSelected} defaultOption={option} />
        </div>
    )
}

export default Abstraccion;