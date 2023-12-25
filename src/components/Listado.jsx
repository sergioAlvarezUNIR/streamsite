import React from "react"
import '../styles/listado.css';

export const Listado = () => {

    return <div className="app-listado">
            <h2>Listado:</h2>
            <table>
                <tbody>
                    <tr>
                    <th>NOMBRE</th>
                    <th>IMAGEN</th>
                    <th>DURACION</th>
                    </tr>
                    <tr>
                    <td>La máscara del zorro</td>
                    <td><img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS173EjV-NpmSHWgAXzn4_0tmY1bxbDLROvDaTpRAcHppo29lW3" alt="" /></td>
                    <td>2 horas</td>
                    </tr>
                    <tr>
                    <td>Diario de una pasión</td>
                    <td><img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTZfAvQ4lq-p5CrO2gPGnTT7wdMdSq7BVkQwD68-fLvchs7SXy6" alt="" /></td>
                    <td>2.3 horas</td>
                    </tr>
                    <tr>
                    <td>La naranja mecánica</td>
                    <td><img src="https://s1.eestatic.com/2017/02/24/cultura/libros/ernest_hemingway-james_joyce-william_shakespeare_196240867_29774352_854x640.jpg" alt="" /></td>
                    <td>2.5 horas</td>
                    </tr>
                </tbody>
            </table>
    </div>

}

