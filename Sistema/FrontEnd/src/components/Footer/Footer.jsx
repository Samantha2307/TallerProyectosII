import PropTypes from "prop-types";
import React from "react";
import { ButtonPrimary } from "../ButtonPrimary";
import "./style.css";

export const Footer = ({
  className,
  hasFrame = true,
  hasDiv = true,
  visible = true,
  hasFrame1 = true,
  hasMaskGroup = true,
  hasDiv1 = true,
}) => {
  return (
    <div className={`footer ${className}`}>
      <div className="frame-5">
        {hasFrame && (
          <div className="frame-6">
            <div className="frame-6">
              <div className="text-wrapper-2">Contacto</div>
              <div className="frame-7">
                <div className="frame-8">
                  <img className="vector-2" alt="Vector" src="https://c.animaapp.com/8tseAcR4/img/vector-28.svg" />
                  <div className="text-wrapper-3">+51 955 422 061</div>
                </div>
                <div className="frame-8">
                  <img className="vector-2" alt="Vector" src="https://c.animaapp.com/8tseAcR4/img/vector-28.svg" />
                  <div className="text-wrapper-3">+51 955 422 588</div>
                </div>
                <div className="frame-8">
                  <img className="vector-3" alt="Vector" src="https://c.animaapp.com/8tseAcR4/img/vector-27.svg" />
                  <div className="text-wrapper-3">informes@ecoambientalgroup.com</div>
                </div>
                <div className="frame-8">
                  <img className="vector-3" alt="Vector" src="https://c.animaapp.com/8tseAcR4/img/vector-27.svg" />
                  <div className="text-wrapper-3">groupecoambiental@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="frame-6">
          <div className="text-wrapper-2">Soluciones</div>
          <div className="frame-7">
            <div className="text-wrapper-3">Cursos</div>
            {hasDiv && <div className="text-wrapper-4">Especializaciones</div>}

            {visible && <div className="text-wrapper-4">Servicios</div>}
          </div>
        </div>
        <div className="frame-9">
          <div className="text-wrapper-2">Más información</div>
          <div className="frame-10">
            <div className="text-wrapper-3">Política de organización</div>
            <div className="text-wrapper-4">Política de calidad</div>
            <div className="text-wrapper-4">Política de privacidad</div>
            <div className="text-wrapper-4">Términos y condiciones</div>
          </div>
        </div>
        <div className="frame-11">
          {hasFrame1 && (
            <div className="frame-6">
              <div className="text-wrapper-2">Verificar certificado</div>
              <ButtonPrimary className="design-component-instance-node" empresa="eco" text="Validar certificado" />
            </div>
          )}

          <div className="frame-6">
            <div className="text-wrapper-2">Redes Sociales</div>
            <img className="frame-12" alt="Frame" src="https://c.animaapp.com/8tseAcR4/img/frame-2724-1.svg" />
          </div>
        </div>
      </div>
      <div className="frame-13">
        <div className="mask-group-wrapper">
          {hasMaskGroup && (
            <img
              className="mask-group-2"
              alt="Mask group"
              src="https://c.animaapp.com/8tseAcR4/img/mask-group-7@2x.png"
            />
          )}
        </div>
        {hasDiv1 && <p className="text-wrapper-4">Copyright © 2023 - Powered by Ecoambiental Group</p>}
      </div>
    </div>
  );
};

Footer.propTypes = {
  hasFrame: PropTypes.bool,
  hasDiv: PropTypes.bool,
  visible: PropTypes.bool,
  hasFrame1: PropTypes.bool,
  hasMaskGroup: PropTypes.bool,
  hasDiv1: PropTypes.bool,
};
