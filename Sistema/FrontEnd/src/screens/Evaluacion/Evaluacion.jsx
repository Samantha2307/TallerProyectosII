import React from "react";
import { Aside } from "../../components/Aside";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import "./style.css";

export const Evaluacion = () => {
  return (
    <div className="evaluacion">
      <Aside
        className="aside-2"
        divClassName="aside-instance"
        empresa="eco"
        expand
        linkDivClassName="aside-instance"
        linkText="Perfil"
        linkText1="Mis cursos"
        maskGroup="https://c.animaapp.com/BN4hFwJO/img/mask-group@2x.png"
        text="QoriStudy"
        visible={false}
        visible1={false}
        visible2={false}
        visible3={false}
      />
      <div className="frame-14">
        <div className="main">
          <div className="header-wrapper">
            <Header
              className="header-2"
              ellipse="https://c.animaapp.com/BN4hFwJO/img/ellipse-14@2x.png"
              frameClassName="header-instance"
              hasFrame={false}
              property1="variant-2"
              searchBarVector="https://c.animaapp.com/BN4hFwJO/img/vector-2.svg"
              vector="https://c.animaapp.com/BN4hFwJO/img/vector-1.svg"
            />
          </div>
          <div className="frame-wrapper">
            <div className="frame-15">
              <div className="frame-16">
                <div className="text-wrapper-5">Evaluación</div>
                <div className="text-wrapper-6">Questions N°: 1/1</div>
              </div>
              <img className="line" alt="Line" src="https://c.animaapp.com/BN4hFwJO/img/line-1.svg" />
            </div>
          </div>
        </div>
        <div className="frame-17">
          <div className="overlap">
            <div className="submit">Preview</div>
          </div>
          <div className="overlap-group">
            <div className="submit-2">Next</div>
          </div>
          <div className="text-wrapper-7">Marks: 1.00</div>
          <img className="line-2" alt="Line" src="https://c.animaapp.com/BN4hFwJO/img/line-2.svg" />
          <p className="p">TCP es más rápido que UDP</p>
          <div className="ellipse-2" />
          <p className="text-wrapper-8">TCP garantiza la entrega de datos, mientras que UDP no</p>
          <div className="ellipse-3" />
          <p className="text-wrapper-9">UDP se utiliza exclusivamente para navegadores web</p>
          <div className="ellipse-4" />
          <p className="text-wrapper-10">¿Cuál es la principal diferencia entre TCP y UDP?</p>
        </div>
        <Footer
          className="footer-instance"
          hasDiv={false}
          hasDiv1={false}
          hasFrame={false}
          hasFrame1={false}
          hasMaskGroup={false}
          visible={false}
        />
      </div>
    </div>
  );
};