import React, { useState } from 'react';
import PropTypes from 'prop-types';


const SaludosF = (props) => {

    const[age, setage] = useState(29);

    const birthday = () =>{
        setage(age +1)
    }

    return (
        <div>
                      <div>
                <h1>
                    Holis { props.name} componente
                </h1>
                 <h2>
                    edad es de : {age}
                </h2>
                <div>
                    <button onClick={birthday}>
                        cumplir años
                    </button>
                </div> 
            </div>
        </div>
    );
};


SaludosF.propTypes = {
    name: PropTypes.string
};


export default SaludosF;
