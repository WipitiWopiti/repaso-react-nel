import { useParams, Link } from "react-router-dom";
import { useState } from "react";

const PerfilCandidato = () => {
    const { id } = useParams();

    const [aprobada, setAprobada] = useState(false);

    return (
        
        <div>
            <h1>Candidato seleccionado: {id}</h1>
            <button onClick={() => setAprobada(true)}>
                {aprobada ? "¡Beca Concedida!" : "Aprobar Beca"}
            </button>
            <Link to="/">Volver al directorio</Link>
        </div>
    );
}

export default PerfilCandidato;