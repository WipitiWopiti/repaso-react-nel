import { useState, useEffect } from "react";
import TarjetaCandidato from "./TarjetaCandidato";



function Directorio() {
    const [candidatos, setCandidatos] = useState([])
    const [cargando, setCargando] = useState(false)

    useEffect (()  => {
        const obtenerCandidatos = async () => {
            try {
                const respuesta = await fetch('https://jsonplaceholder.typicode.com/users')
                const datos = await respuesta.json()
                setCandidatos(datos)
            }
            catch (error) {
                console.error("Hubo un error: ", error)
            }
        }
        obtenerCandidatos()
    }, [])

    return (
        <div>
        <h1>Paso 3</h1>
            <div style={{ padding: '20px', fontFamily: 'sans-serif', display: "flex"}}>
                {/* Recorremos el estado ya actualizado para generar la interfaz */}
                {candidatos.map(candidato => (
                    <TarjetaCandidato key={candidato.id}
                    id={candidato.id}
                    nombre={candidato.name}/>
                ))}
            </div>
        </div>
    );
}

export default Directorio;