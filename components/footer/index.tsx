import * as React from 'react';
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, IconButton, Typography } from "@mui/material";

import { GridContainer, GridItem } from "../grid";
// import logoOGTIC from "../../stories/assets/logoOGTIC.png";
// import logoGOB from "../../stories/assets/logoGOB.png";
// import DivGrow from "../elements/divGrow";

import { theme } from "../../theme";

export interface IProps {
  logoDO: any;
  logoDEV: any;
}

export const Footer = ({ logoDO, logoDEV }: IProps) => {
  return (
    <>
      <Box style={{ padding: "75px 25px", background: theme.palette.primary.main }}>
        <div
          style={{
            width: "100%",
            maxWidth: "1400px",
            margin: "auto",
            padding: "0px 24px",
          }}
        >
          <GridContainer spacing={4}>
            <GridItem md={12} lg={3}>
              <div style={{ display: "flex" }}>
                <img src={logoDO} alt="logo" width="241" height="90" />
              </div>
            </GridItem>
            <GridItem md={12} lg={9}>
              <GridContainer>
                <GridItem md={6} lg={3}>
                  <Typography fontWeight="500" fontSize={16} color="white">
                    CONÓCENOS
                  </Typography>
                  <br />
                  <Typography color="white" fontWeight="400" fontSize="16">
                    Oficina Gubernamental de Tecnologías de la Información y
                    Comunicación (OGTIC)
                  </Typography>
                </GridItem>

                <GridItem md={6} lg={3}>
                  <Typography fontWeight="500" fontSize={16} color="white">
                    CONTÁCTANOS
                  </Typography>
                  <br />
                  <Typography color="white" fontWeight="400" fontSize="16">
                    Tel: (809)-286-1009
                  </Typography>
                  <Typography color="white" fontWeight="400" fontSize="16">
                    Fax: (809)-732-5465
                  </Typography>
                  <Typography color="white" fontWeight="400" fontSize="16">
                    info@ogtic.gob.do
                  </Typography>
                </GridItem>

                <GridItem md={6} lg={3}>
                  <Typography fontWeight="500" fontSize={16} color="white">
                    BÚSCANOS
                  </Typography>
                  <br />
                  <Typography color="white" fontWeight="400" fontSize="16">
                    Oficina Gubernamental de Tecnologías de la Información y
                    Comunicación (OGTIC) Av. Rómulo Betancourt #311, Edificio
                    Corporativo Vista 311, Santo Domingo, República Dominicana.
                  </Typography>
                </GridItem>

                <GridItem md={6} lg={3}>
                  <Typography fontWeight="500" fontSize={16} color="white">
                    INFÓRMATE
                  </Typography>
                  <br />
                  <Typography color="white" fontWeight="400" fontSize="16">
                    Términos de Uso Política de Privacidad Preguntas Frecuentes
                  </Typography>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </div>
      </Box>

      <div style={{ background: "white", padding: "12.5px 25px" }}>
        <div
          style={{
            width: "100%",
            maxWidth: "1400px",
            margin: "auto",
            padding: "0px 24px",
          }}
        >
          <GridContainer>
            <GridItem md={6} lg={6}>
              <div style={{ marginTop: "8px" }}>
                <Typography variant="caption" fontWeight="600" color="primary">
                  © {new Date().getFullYear()} Todos los Derechos Reservados.
                  Desarrollado por
                </Typography>
                <img
                  style={{ marginBottom: "-10px", marginLeft: "5px", cursor: "pointer" }}
                  src={logoDEV}
                  alt="logo ogtic"
                  width="55"
                  height="29"
                  onClick={() => window.open("https://ogtic.gob.do/")}
                />
              </div>
            </GridItem>

            <GridItem md={6} lg={6}>
              <div>
                <div style={{ display: "flex" }}>
                  <Typography
                    sx={{ margin: "auto", marginRight: "10px" }}
                    variant="body2"
                    fontWeight="bold"
                    color="primary"
                  >
                    SÍGUENOS
                  </Typography>

                  <IconButton color="primary">
                    <FacebookIcon />
                  </IconButton>

                  <IconButton color="primary">
                    <YouTubeIcon />
                  </IconButton>

                  <IconButton color="primary">
                    <TwitterIcon />
                  </IconButton>

                  <IconButton color="primary">
                    <InstagramIcon />
                  </IconButton>
                </div>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </>
  );
}