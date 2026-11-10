import { Link } from "react-router-dom";
import PerfilCandidato from "./PerflCandidato";

const TarjetaCandidato = ({id, nombre, nota}) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '16px', margin: '8px', borderRadius:
'8px', width: '250px' }}>

    <h2 style={{ margin: '0 0 10px 0'}}>{nombre}</h2>
    <p>Nota: {nota}</p>
    <Link to={`/candidato/${id}`}>Ver detalles</Link>
</div>
    )
}

export default TarjetaCandidato;