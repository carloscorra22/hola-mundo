import React, { useState } from 'react';

const loggedStyle = {
    color: 'blue'
};

const unloggedStyle= {
    color : 'tomato',
    fontWeight : 'bold'
};

const SaludosStyled = (props) => {
    const [logged, setlogged] = useState(false);

    const saludosUsuario = (<p>hola, {props.name}</p>)
    const pleaseLogin = (<p>logeate</p>)


    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
            {logged ? 
                saludosUsuario
                :
                pleaseLogin
            }

            <button onClick={()=>{
                console.log('boton pulsado')
                setlogged(!logged)
            }}>
                {logged ? 'logout' : 'login'}
            </button>
        </div>
    );
}

export default SaludosStyled;
