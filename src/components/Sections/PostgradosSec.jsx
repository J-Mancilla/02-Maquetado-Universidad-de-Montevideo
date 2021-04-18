import React from 'react'
import './CarrerasPostSec.css'

const arrPostgrados = [
    "CENTRO DE CIENCIAS BIOMÉDICAS",
    "INGENIERÍA",
    "DERECHO",
    "COMUNICACIÓN",
    "UMPE: POSTGRADOS EN ECONOMÍA, CONTABILIDAD Y FINANZAS",
    "HUMANIDADES Y EDUCACIÓN",
    "IEEM ESCUELA DE NEGOCIOS"
]

const PostgradosSec = () => {
    return (
        <section className='postgrados'>
            <h1 className='sectionTitle'>Postgrados</h1>
            <div></div>
            <ul>
                {
                    arrPostgrados.map((carrera, index) => (
                        <li key={`carrera-${index}`}>{carrera}</li>
                    ))
                }
            </ul>
        </section>
    )
}

export default PostgradosSec
