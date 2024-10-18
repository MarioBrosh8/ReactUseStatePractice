import  PropTypes  from 'prop-types';
import { useState } from 'react';


export const DateComponent = ({Year}) => {

    let [currentYear, updateYear] = useState(Year)
    
    const nextYear = e => {
        updateYear(currentYear+1);
    };

    const previousYear = e => {
        updateYear(currentYear-1);
    };

    const updateText = e => {
        let inputContent = parseInt(e.target.value);
        if(Number.isInteger(inputContent)){
            updateYear(inputContent)
        }else{
            updateYear(currentYear)
        }
    };

    return (
        <>
            <div>DateComponent</div>
            <p>{currentYear}</p>
            <button onClick={nextYear}>Next</button>
            <button onClick={previousYear}>Previous</button>
            <input type="text" onChange={updateText} />
        </>

    )
}

DateComponent.propTypes = {
    Year: PropTypes.number.isRequired
}