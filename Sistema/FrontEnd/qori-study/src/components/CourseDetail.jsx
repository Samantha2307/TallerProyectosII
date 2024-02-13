import React from 'react';
import { Link } from 'react-router-dom';
import './CourseDetail.css';

const CourseDetail = () => {
  return (
    <div className="course-detail-container">
      <div>
        <h1>Cursos de programación</h1>
        <div>
          <img
            className="imagen-curso"
            src="https://edteam-media.s3.amazonaws.com/specialities/big/26d2798f-ef08-4c43-8e99-3e6e6bbce390.png"
            alt="imagen curso"
          />
        </div>
        <div className="course-detail-info">
          <div>
            <p>Docente</p>
            <p>Dr. Fiorela</p>
          </div>
          <div>
            <p>Fecha Inicio</p>
            <p>15-03-2024</p>
          </div>
          <div>
            <p>Duración</p>
            <p>4 Semanas</p>
          </div>
          <Link to={'/course/programacion-basica'}>
            <button className="button-1">Inscribirme</button>
          </Link>
        </div>
      </div>
      <div>
        <div>
          <h3>Curso detalle</h3>
          <p className="course-detail-description">
            A todos los Profesionales, Estudiantes y personal de entidades públicas
            (ministerios, municipalidades, institutos, universidades), privadas
            (empresas, industrias, ONGs) y otros interesados en conocer los criterios
            técnicos para el diseño de infraestructuras de residuos sólidos.
          </p>
          <h3>Descripción del certificado</h3>
          <p className="course-detail-description">
            Conocer y aplicar las herramientas básicas para evaluar los principios de
            diseño de una infraestructura de residuos sólidos tales como los centros
            de acopio de residuos municipales, plantas de valorización de residuos
            sólidos, entre otros.
          </p>
        </div>
        <div>
          <h3>Certificate e impulsa tu carrera</h3>
          <div className="course-detail-cert">
            <img
              width={100}
              src="https://marketplace.canva.com/EAFfkLvr5WI/1/0/1600w/canva-certificado-educativo-minimalista-verde-y-blanco-oOnj2YGGjXI.jpg"
              alt="certicado"
            />
            <p>
              Al finalizar el curso recibiras un certificado a nombre de QoriStudy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
