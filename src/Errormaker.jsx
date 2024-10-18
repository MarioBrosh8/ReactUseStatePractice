import { useState } from "react";

export const Errormaker = () => {

    /*    
    let nombre = "Mario Valdez"
    const cambiarNombre = (e) => {
        nombre = "Paquito2"
    }*/

    const [nombre, setNombre] = useState("Mario Valdez")

    const cambiarNombre = (e, nombreFijo) => {
        setNombre(nombreFijo)
        console.log(e.target);

    }


    return (
        <>
            <div>Errormaker</div>
            <br />
            <strong>{nombre}</strong>
            <h3>MiPrimerComponente</h3>
            <button onClick={e => cambiarNombre(e, "Fran")}>Cambiar nombre por Fran</button>
            <input type="text" onKeyUp={e => cambiarNombre(e, e.target.value)} placeholder="cambia el nombre" />
        </>


    )
}
