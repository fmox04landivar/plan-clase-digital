import HeaderClase from './components/HeaderClase';
import ObjetivosCard from './components/ObjetivosCard';
import ActividadItem from "./components/ActividadItem";
function App() {
    return (
        <div style={{ maxWidth: '700px', margin: '15px auto', padding: '15px', fontFamily: 'Segoe UI' }}>
            <HeaderClase tituloTema="¡Aprendamos los signos de puntuación!" nombreDocente="Flor de María" horario="Lunes a Viernes 8:00 AM" />
            <ObjetivosCard competencia="En esta página aprenderemos cómo utilizar los signos de puntuación para expresar nuestras ideas con claridad." indicadorLogro="Identificar los signos de puntuación.
Comprender para qué sirve cada signo.
Aplicar los signos en oraciones." />
            <ActividadItem tituloActividad="Conozcamos los signos" duracion="25 min" etapaDidactica="Construcción" />
        </div>
    );
}

export default App;