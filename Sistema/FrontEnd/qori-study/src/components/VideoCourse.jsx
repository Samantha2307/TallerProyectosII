import { useCallback, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import YoutubePlayer from 'react-player/youtube';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MenuVertical from '../components/MenuVertical';
import { http } from '../config/axios.config';
import './VideoCourse.css';

export const VideoCourse = () => {
  const { id } = useParams();
  const [selectedOption, setSelectedOption] = useState('Sobre el curso');
  const [contentToShow, setContentToShow] = useState('contenido1');
  const [isLoading, setIsLoading] = useState(false);
  const [modulos, setModulos] = useState([]);
  const [sesionesPorModulo, setSesionesPorModulo] = useState({});
  const [selectedVideoUrl, setSelectedVideoUrl] = useState('');

  const handleMenuClick = (option) => {
    setSelectedOption(option);
    switch (option) {
      case 'Sobre el curso':
        setContentToShow('contenido1');
        break;
      case 'Preguntas y Respuestas':
        setContentToShow('contenido2');
        break;
      case 'Materiales':
        setContentToShow('contenido3');
        break;
      case 'Evaluación':
        setContentToShow('contenido4');
        break;
      default:
        setContentToShow('contenido1');
    }
  };

  const reproducirVideo = (sesion) => {
    setSelectedVideoUrl(sesion.sesion_url_video);
  };

  const cargarSesiones = useCallback(
    async (idModulo) => {
      try {
        setIsLoading(true);
        const { data } = await http(`/aulavirtual/sesionesmodulo/${idModulo}/${id}`);
        setSesionesPorModulo((prevSesiones) => ({
          ...prevSesiones,
          [idModulo]: data,
        }));
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    },
    [id]
  );

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await http(`aulavirtual/listarmodulo/${id}`);
        setModulos(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);

  useEffect(() => {
    if (modulos.length > 0) {
      cargarSesiones(modulos[0].id_modulo);
    }
  }, [cargarSesiones, modulos]);

  useEffect(() => {
    if (sesionesPorModulo[modulos[0]?.id_modulo]?.length > 0) {
      setSelectedVideoUrl(sesionesPorModulo[modulos[0].id_modulo][0].sesion_url_video);
    }
  }, [sesionesPorModulo, modulos]);

  return (
    <>
      <div style={{ background: '#373737' }}>
        <MenuVertical onSelect={handleMenuClick} selectedOption={selectedOption} />
        <div className="content" style={{ marginLeft: '16%' }}>
          <Header />
        </div>
        <div className="container-grid">
          <div className="video">
            {isLoading ? (
              <Skeleton height={400} />
            ) : (
              <YoutubePlayer url={selectedVideoUrl} controls />
            )}
            <div>
              <div className="buttons-container">
                <TextComponent
                  text="Sobre el curso"
                  isSelected={selectedOption === 'Sobre el curso'}
                  onClick={() => handleMenuClick('Sobre el curso')}
                />
                <TextComponent
                  text="Preguntas y Respuestas"
                  isSelected={selectedOption === 'Preguntas y Respuestas'}
                  onClick={() => handleMenuClick('Preguntas y Respuestas')}
                />
                <TextComponent
                  text="Materiales"
                  isSelected={selectedOption === 'Materiales'}
                  onClick={() => handleMenuClick('Materiales')}
                />
                <TextComponent
                  text="Evaluación"
                  isSelected={selectedOption === 'Evaluación'}
                  onClick={() => handleMenuClick('Evaluación')}
                />
              </div>
              <div style={{ width: '70%', marginTop: '-40px', marginBottom: '50px' }}>
                <hr />
                {contentToShow === 'contenido1' && (
                  <div>
                    <h3 style={{ margin: '0', padding: '0', marginBottom: '10px' }}>
                      Descripción del curso
                    </h3>
                    <p style={{ margin: '0', padding: '0', marginBottom: '10px' }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
                      facilis aliquid ut rem? Tempora voluptatum sequi impedit neque error
                      officiis ex ipsam optio? Quos perspiciatis blanditiis beatae omnis
                      odit nostrum. Itaque, nobis maxime quae commodi excepturi pariatur.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div>
                        <p
                          style={{
                            margin: '0',
                            padding: '0',
                            fontWeight: 'bold',
                            fontSize: '16px',
                          }}
                        >
                          Dificultad:{' '}
                          <span style={{ fontWeight: 'normal', fontSize: '14px' }}>
                            Avanzado
                          </span>
                        </p>
                        <p
                          style={{
                            margin: '0',
                            padding: '0',
                            fontWeight: 'bold',
                            fontSize: '16px',
                          }}
                        >
                          Tipo:{' '}
                          <span style={{ fontWeight: 'normal', fontSize: '14px' }}>
                            Pagado
                          </span>
                        </p>
                      </div>
                      <div>
                        <p
                          style={{
                            margin: '0',
                            padding: '0',
                            fontWeight: 'bold',
                            fontSize: '16px',
                          }}
                        >
                          Horas:{' '}
                          <span style={{ fontWeight: 'normal', fontSize: '14px' }}>
                            120 horas
                          </span>
                        </p>
                        <p
                          style={{
                            margin: '0',
                            padding: '0',
                            fontWeight: 'bold',
                            fontSize: '16px',
                          }}
                        >
                          Inscritos:{' '}
                          <span style={{ fontWeight: 'normal', fontSize: '14px' }}>
                            100 alumnos
                          </span>
                        </p>
                      </div>
                      <div>
                        <p
                          style={{
                            margin: '0',
                            padding: '0',
                            fontWeight: 'bold',
                            fontSize: '16px',
                          }}
                        >
                          Duración:{' '}
                          <span style={{ fontWeight: 'normal', fontSize: '14px' }}>
                            6 meses
                          </span>
                        </p>
                        <p
                          style={{
                            margin: '0',
                            padding: '0',
                            fontWeight: 'bold',
                            fontSize: '16px',
                          }}
                        >
                          Modalidad:{' '}
                          <span style={{ fontWeight: 'normal', fontSize: '14px' }}>
                            En vivo
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {contentToShow === 'contenido2' && (
                  <div>
                    <h3 style={{ margin: '0', padding: '0', marginBottom: '10px' }}>
                      Preguntas y Respuestas
                    </h3>
                    <p style={{ margin: '0', padding: '0', marginBottom: '10px' }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
                      odio. Praesent libero. Sed cursus ante dapibus diam.
                    </p>
                    <ul>
                      <li>Pregunta 1</li>
                      <li>Pregunta 2</li>
                      <li>Pregunta 3</li>
                    </ul>
                  </div>
                )}

                {contentToShow === 'contenido3' && (
                  <div>
                    <h3 style={{ margin: '0', padding: '0', marginBottom: '10px' }}>
                      Materiales
                    </h3>
                    <p style={{ margin: '0', padding: '0', marginBottom: '10px' }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
                      odio. Praesent libero. Sed cursus ante dapibus diam.
                    </p>
                    <ul>
                      <li>Material 1</li>
                      <li>Material 2</li>
                      <li>Material 3</li>
                    </ul>
                  </div>
                )}

                {contentToShow === 'contenido4' && (
                  <div>
                    <h3 style={{ margin: '0', padding: '0', marginBottom: '10px' }}>
                      Evaluación
                    </h3>
                    <p style={{ margin: '0', padding: '0', marginBottom: '10px' }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
                      odio. Praesent libero. Sed cursus ante dapibus diam.
                    </p>
                    <ol>
                      <li>Evaluación 1</li>
                      <li>Evaluación 2</li>
                      <li>Evaluación 3</li>
                    </ol>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="modulos">
            <section className="accordion">
              {modulos.map((modulo, index) => (
                <div key={modulo.id_modulo} className="tab">
                  <input
                    type="checkbox"
                    name={`accordion-${modulo.id_modulo}`}
                    id={`cb${modulo.id_modulo}`}
                    onChange={() => cargarSesiones(modulo.id_modulo)}
                  />
                  <label htmlFor={`cb${modulo.id_modulo}`} className="tab__label">
                    Modulo {index + 1}: {modulo.modulo_nombre}
                  </label>
                  <div className="tab__content">
                    {isLoading ? (
                      <Skeleton count={3} />
                    ) : (
                      sesionesPorModulo[modulo.id_modulo] &&
                      sesionesPorModulo[modulo.id_modulo].map((sesion) => (
                        <div key={sesion.id_sesion} className="sesion-item">
                          <p
                            onClick={() => reproducirVideo(sesion)}
                            style={{ cursor: 'pointer' }}
                          >
                            {sesion.sesion_nombre}
                          </p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const TextComponent = ({ text, isSelected, onClick }) => {
  return (
    <p
      onClick={onClick}
      style={{
        margin: '0px',
        padding: '0px',
        color: isSelected ? '#5daed0' : 'white',
        cursor: 'pointer',
      }}
    >
      {text}
    </p>
  );
};

export default VideoCourse;
