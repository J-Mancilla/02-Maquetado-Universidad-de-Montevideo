import React from 'react'

import './CarrerasPostSec.css'


const arrCarreras = [
    'CARRERAS DE UNIVERSITY OF LONDON',
    'CIENCIA DE DATOS PARA NEGOCIOS',
    'CONTADOR PÚBLICO',
    'DIRECCIÓN Y ADMINISTRACIÓN DE EMPRESAS',
    'ECONOMÍA',
    'FINANZAS',
    'NEGOCIOS INTERNACIONALES',
    'COMUNICACIÓN',
    'ABOGACÍA',
    'ESCRIBANÍA',
    'LICENCIATURA EN HUMANIDADES',
    'LICENCIATURA EN TRADUCCIÓN',
    'MAGISTERIO/MAGISTERIO BILINGÜE',
    'PROFESORADO DE MATEMÁTICA',
    'INGENIERÍA CIVIL',
    'INGENIERÍA EN INFORMÁTICA',
    'INGENIERÍA INDUSTRIAL',
    'INGENIERÍA TELEMÁTICA',
    'LICENCIATURA EN INFORMÁTICA'
]

const CarrerasSec = () => {
    return (
        <section className='carreras'>
            <h1 className='sectionTitle'>Carreras de grado</h1>
            <ul>
                {
                    arrCarreras.map((carrera, index) => (
                        <li key={`carrera-${index}`}>{carrera}</li>
                    ))
                }
            </ul>
            <div></div>

        </section>
    )
}

export default CarrerasSec
