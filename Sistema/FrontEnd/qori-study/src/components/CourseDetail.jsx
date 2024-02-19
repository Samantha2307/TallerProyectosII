import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { http } from '../config/axios.config';
import { parseDate } from '../utils/parseDate';
import './CourseDetail.css';

const CourseDetail = () => {
  const { idCurso } = useParams();

  const [course, setCourse] = useState({});

  useEffect(() => {
    (async () => {
      const { data } = await http(`/curso/detallecurso/${idCurso}`);
      setCourse(data[0]);
    })();
  }, [idCurso]);

  const {
    categoria_curso_id,
    curso_certificado_descripcion,
    curso_costo,
    curso_detalle,
    curso_duracion,
    curso_fecha_fin,
    curso_fecha_inicio,
    curso_horas_certificado,
    curso_imagen,
    curso_imagen_certificado,
    curso_nombre,
    curso_numero_inscritos,
    curso_tipo,
    id_curso,
  } = course;
  console.log(course)

  return (
    <div className="course-detail-container">
      <div>
        <h1>{curso_nombre}</h1>
        <div>
          <img
            className="imagen-curso"
            // src="https://edteam-media.s3.amazonaws.com/specialities/big/26d2798f-ef08-4c43-8e99-3e6e6bbce390.png"
            src={curso_imagen}
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
            <p>{parseDate(curso_fecha_inicio)}</p>
          </div>
          <div>
            <p>Duración</p>
            <p>{curso_duracion} Semanas</p>
          </div>
          <Link to={'/course/programacion-basica'}>
            <button className="button-1">Inscribirme</button>
          </Link>
        </div>
      </div>
      <div>
        <div>
          <h3>Curso detalle</h3>
          <p className="course-detail-description">{curso_detalle}</p>
          <h3>Descripción del certificado</h3>
          <p className="course-detail-description">{curso_certificado_descripcion}</p>
        </div>
        <div>
          <h3>Certificate e impulsa tu carrera</h3>
          <div className="course-detail-cert">
            <img
              width={100}
              // src="https://marketplace.canva.com/EAFfkLvr5WI/1/0/1600w/canva-certificado-educativo-minimalista-verde-y-blanco-oOnj2YGGjXI.jpg"
              src={curso_imagen_certificado}
              alt="certicado"
            />
            <p>Al finalizar el curso recibiras un certificado a nombre de QoriStudy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
