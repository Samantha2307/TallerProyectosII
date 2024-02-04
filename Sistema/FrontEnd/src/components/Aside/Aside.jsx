import PropTypes from "prop-types";
import React from "react";
import { Link } from "../Link";
import "./style.css";

export const Aside = ({
  empresa,
  expand,
  className,
  maskGroup = "https://c.animaapp.com/8tseAcR4/img/mask-group-2@2x.png",
  divClassName,
  text = "Eco Ambiental",
  linkText = "Inicio",
  linkDivClassName,
  linkText1 = "Especialización",
  visible = true,
  visible1 = true,
  visible2 = true,
  visible3 = true,
}) => {
  return (
    <div className={`aside expand-${expand} ${className}`}>
      <div className="logo">
        <img
          className={`mask-group empresa-0-${empresa} expand-1-${expand}`}
          alt="Mask group"
          src={
            expand && empresa === "acm"
              ? "https://c.animaapp.com/8tseAcR4/img/mask-group-5@2x.png"
              : empresa === "ghamec"
              ? "https://c.animaapp.com/8tseAcR4/img/mask-group-4@2x.png"
              : empresa === "eco"
              ? maskGroup
              : "https://c.animaapp.com/8tseAcR4/img/mask-group-6@2x.png"
          }
        />
        <div className={`ACM-ingenieros empresa-1-${empresa} expand-2-${expand} ${divClassName}`}>
          {empresa === "acm" && <>ACM Ingenieros</>}

          {empresa === "ghamec" && <>Ghamec</>}

          {empresa === "eco" && <>{text}</>}
        </div>
      </div>
      <div className="nav-bar">
        <Link
          className="link-2"
          divClassName={`${!expand && "class"}`}
          empresa={empresa === "acm" ? "acm" : empresa === "ghamec" ? "ghamec" : "eco"}
          group="https://c.animaapp.com/8tseAcR4/img/group-2640-59@2x.png"
          stateProp="default"
          text={empresa === "eco" ? linkText : "Inicio"}
        />
        <Link
          className="link-2"
          divClassName={`${!expand && "class-2"}`}
          empresa={empresa === "ghamec" ? "ghamec" : empresa === "eco" ? "eco" : "acm"}
          group="https://c.animaapp.com/8tseAcR4/img/group-2640-58@2x.png"
          stateProp="default"
          text="Cursos"
        />
        <Link
          className="link-2"
          divClassName={`${!expand && ["acm", "ghamec"].includes(empresa) && "class-2"} ${
            empresa === "eco" && linkDivClassName
          }`}
          empresa={empresa === "ghamec" ? "ghamec" : empresa === "eco" ? "eco" : "acm"}
          group={
            empresa === "eco"
              ? "https://c.animaapp.com/8tseAcR4/img/group-2640-29@2x.png"
              : "https://c.animaapp.com/8tseAcR4/img/group-2640-57@2x.png"
          }
          stateProp="default"
          text={empresa === "eco" ? linkText1 : "Planes"}
        />
        {empresa === "eco" && (
          <>
            <>
              {visible && (
                <Link
                  className="link-2"
                  divClassName={`${!expand && "class-2"}`}
                  empresa="eco"
                  group="https://c.animaapp.com/8tseAcR4/img/group-2640-57@2x.png"
                  stateProp="default"
                  text="Planes"
                />
              )}
            </>
            <>
              {visible1 && (
                <Link
                  className="link-2"
                  divClassName={`${!expand && "class-3"}`}
                  empresa="eco"
                  group="https://c.animaapp.com/8tseAcR4/img/group-2640-56@2x.png"
                  stateProp="default"
                  text="Promociones"
                />
              )}
            </>
            <>
              {visible2 && (
                <Link
                  className="link-2"
                  divClassName={`${!expand && "class-4"}`}
                  empresa="eco"
                  group="https://c.animaapp.com/8tseAcR4/img/group-2640-55@2x.png"
                  stateProp="default"
                  text="Empresas"
                />
              )}
            </>
          </>
        )}

        <Link
          className="link-2"
          divClassName={`${!expand && empresa === "eco" && "class-5"} ${
            !expand && ["acm", "ghamec"].includes(empresa) && "class-3"
          }`}
          empresa={empresa === "acm" ? "acm" : empresa === "ghamec" ? "ghamec" : "eco"}
          group={
            empresa === "eco"
              ? "https://c.animaapp.com/8tseAcR4/img/group-2640-54@2x.png"
              : "https://c.animaapp.com/8tseAcR4/img/group-2640-56@2x.png"
          }
          stateProp="default"
          text={empresa === "eco" ? "Certificados" : "Promociones"}
        />
        {empresa === "eco" && (
          <>
            <>
              {visible3 && (
                <Link
                  className="link-2"
                  divClassName={`${!expand && "class-6"}`}
                  empresa="eco"
                  group="https://c.animaapp.com/8tseAcR4/img/group-2640-53@2x.png"
                  stateProp="default"
                  text="Nosotros"
                />
              )}
            </>
          </>
        )}

        {["acm", "ghamec"].includes(empresa) && (
          <>
            <Link
              className="link-2"
              divClassName={`${!expand && "class-4"}`}
              empresa={empresa === "ghamec" ? "ghamec" : "acm"}
              group="https://c.animaapp.com/8tseAcR4/img/group-2640-55@2x.png"
              stateProp="default"
              text="Empresas"
            />
            <Link
              className="link-2"
              divClassName={`${!expand && "class-5"}`}
              empresa={empresa === "ghamec" ? "ghamec" : "acm"}
              group="https://c.animaapp.com/8tseAcR4/img/group-2640-54@2x.png"
              stateProp="default"
              text="Certificados"
            />
            <Link
              className="link-2"
              divClassName={`${!expand && "class-6"}`}
              empresa={empresa === "ghamec" ? "ghamec" : "acm"}
              group="https://c.animaapp.com/8tseAcR4/img/group-2640-53@2x.png"
              stateProp="default"
              text="Nosotros"
            />
          </>
        )}
      </div>
    </div>
  );
};

Aside.propTypes = {
  empresa: PropTypes.oneOf(["ghamec", "acm", "eco"]),
  expand: PropTypes.bool,
  maskGroup: PropTypes.string,
  text: PropTypes.string,
  linkText: PropTypes.string,
  linkText1: PropTypes.string,
  visible: PropTypes.bool,
  visible1: PropTypes.bool,
  visible2: PropTypes.bool,
  visible3: PropTypes.bool,
};
