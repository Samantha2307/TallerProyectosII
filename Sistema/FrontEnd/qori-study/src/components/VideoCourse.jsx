import { useState } from 'react';
import YoutubePlayer from 'react-player/youtube';
import MenuVertical from '../components/MenuVertical';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './VideoCourse.css';

export const VideoCourse = () => {
  const [selectedOption, setSelectedOption] = useState('Cursos');

  const handleMenuClick = (option) => {
    setSelectedOption(option);
  };
  return (
    <>
    <div style={{ background: '#373737'}}>
      <MenuVertical onSelect={handleMenuClick} selectedOption={selectedOption} />
      <div className="content" style={{ marginLeft: '16%' }}>
        <Header />
      </div>
      <div class="container-grid">
        <div class="video">
          <YoutubePlayer url="https://www.youtube.com/watch?v=SQq-PoWF3tA" controls />
          <div class="buttons-container">
            <button class="button">Sobre el curso</button>
            <button class="button">Preguntas y Respuestas</button>
            <button class="button">Materiales</button>
          </div>
        </div>
        <div class="modulos">
          <section class="accordion">
            <div class="tab">
              <input type="checkbox" name="accordion-1" id="cb2" />
              <label for="cb2" class="tab__label">Modulo 1: Introducción</label>
              <div class="tab__content">
                <p>Clase 1</p>
                <p>Clase 2</p>
                <p>Clase 3</p>
                <p>Clase 4</p>
              </div>
            </div>

            <div class="tab">
              <input type="checkbox" name="accordion-1" id="cb3" />
              <label for="cb3" class="tab__label">
                Modulo 2: Presentación del curso
              </label>
              <div class="tab__content">
                <p>Clase 1</p>
                <p>Clase 2</p>
                <p>Clase 3</p>
                <p>Clase 4</p>
              </div>
            </div>

            <div class="tab">
              <input type="checkbox" name="accordion-1" id="cb4" />
              <label for="cb4" class="tab__label">
                Modulo 3: Instalaciones
              </label>
              <div class="tab__content">
                <p>Clase 1</p>
                <p>Clase 2</p>
                <p>Clase 3</p>
                <p>Clase 4</p>
              </div>
            </div>

            <div class="tab">
              <input type="checkbox" name="accordion-1" id="cb5" />
              <label for="cb5" class="tab__label">
                Modulo 4: 1ra Aplicación
              </label>
              <div class="tab__content">
                <p>Clase 1</p>
                <p>Clase 2</p>
                <p>Clase 3</p>
                <p>Clase 4</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default VideoCourse;
