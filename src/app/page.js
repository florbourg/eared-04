import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Paper,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DownloadIcon from "@mui/icons-material/Download";
import AbleVideo from "../ui/components/AbleVideo";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        spacing={2}
      >
        <Box flex={1} p={2} minWidth={"80%"}>
          <Typography variant="h1" component="h1" tabIndex={-1}>
            Módulo 3 - Composición y encuadre
          </Typography>
          <Typography variant="h2" component="h2" gutterBottom tabIndex={-1}>
            El Círculo Cromático
          </Typography>
          <AbleVideo />
          <Button
            variant="contained"
            color="primary"
            startIcon={<DownloadIcon aria-hidden="true" />}
            aria-label="Descargar material de apoyo en formato PDF"
            href="/eared-04/Material_apoyo_circulo_cromatico.pdf"
            download
          >
            Descargar material de Apoyo en PDF
          </Button>
          <Paper sx={{ padding: 3, marginY: 4 }}>
            <Typography variant="h3" component="h3" gutterBottom tabIndex={-1}>
              El Círculo Cromático en Fotografía
            </Typography>

            <Typography variant="body1" gutterBottom>
              El círculo cromático es una representación visual y ordenada de
              los colores primarios, secundarios y terciarios distribuidos de
              forma circular. Suele graficarse a través de un círculo dividido
              en porciones de colores que se van mezclando como en degrade. Hay
              personas que también lo llaman rueda cromática o rueda de colores,
              aunque también puede encontrarse en forma de escala rectangular.
            </Typography>
          </Paper>

          <Paper sx={{ padding: 3, marginY: 4 }}>
            <Typography variant="h3" component="h3" gutterBottom tabIndex={-1}>
              ¿Para qué sirve el círculo cromático?
            </Typography>

            <Typography variant="body1" gutterBottom>
              Esta forma de ver los colores sirve para visualizar mejor sus
              tonos y matices. Nos permite entender cómo se vinculan los colores
              cuando tenemos como objetivo, por ejemplo, mostrar relaciones de
              armonía o contraste.
            </Typography>
          </Paper>

          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon aria-hidden="true" />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography variant="body2" component="h3" tabIndex={-1}>
                Colores primarios y secundarios
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" gutterBottom>
                Los colores primarios y secundarios son la representación más
                simple del círculo cromático. Los colores primarios son la base
                para obtener los colores secundarios. El círculo cromático
                también puede incluir colores terciarios, que son el resultado
                de mezclar los colores primarios y secundarios
              </Typography>
              <Typography variant="body2">Colores primarios</Typography>
              <div
                style={{ width: "100%", height: "400px", position: "relative" }}
                role="img"
                aria-label="Ejemplo visual de colores primarios"
              >
                <Image
                  title="Ejemplo visual de colores primarios en el círculo cromático"
                  src="/eared-04/primarios.png"
                  alt="Ejemplo visual de colores primarios en el círculo cromático"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <Typography variant="body2">Colores secundarios</Typography>
              <div
                style={{ width: "100%", height: "400px", position: "relative" }}
                role="img"
                aria-label="Ejemplo visual de colores secundarios"
              >
                <Image
                  title="Ejemplo visual de colores secundarios en el círculo cromático"
                  src="/eared-04/secundarios.png"
                  alt="Ejemplo visual de colores secundarios en el círculo cromático"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon aria-hidden="true" />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography variant="body2" component="h3" tabIndex={-1}>
                Colores complementarios y análogos
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                La relación de los colores, dentro del círculo cromático es en
                base a su posición y a las sensaciones que esas combinaciones
                generan.
              </Typography>
              <Typography variant="body1">
                Cuando dos colores son opuestos se los llama{" "}
                <strong>colores complementarios</strong> y generan un contraste
                fuerte y llamativo. Por ejemplo: Amarillo y Violeta.
              </Typography>
              <div
                style={{ width: "100%", height: "400px", position: "relative" }}
                role="img"
                aria-label="Ejemplo visual de colores complementarios"
              >
                <Image
                  title="Ejemplo visual de colores complementarios en el círculo cromático"
                  src="/eared-04/complementarios.png"
                  alt="Ejemplo visual de colores complementarios en el círculo cromático"
                  layout="fill"
                  objectFit="contain"
                />
              </div>

              <Typography variant="body1">
                Cuando los colores se encuentran uno al lado del otro se los
                llama <strong>colores análogos</strong> y como son colores
                cercanos, sabemos que se ven bien juntos. Por ejemplo: Azul y
                violeta.
              </Typography>
              <div
                style={{ width: "100%", height: "400px", position: "relative" }}
                role="img"
                aria-label="Ejemplo visual de colores análogos"
              >
                <Image
                  title="Ejemplo visual de colores análogos en el círculo cromático"
                  src="/eared-04/analogos.png"
                  alt="Ejemplo visual de colores análogos en el círculo cromático"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon aria-hidden="true" />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography variant="body2" component="h3" tabIndex={-1}>
                Tríadas y monocromos
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                Estas son formas de combinar colores que no siguen reglas por
                ubicación en el circulo cromático sino que se basa en la
                relación entre ellos mismos.
              </Typography>
              <Typography variant="body1">
                Cuando son tres colores y dentro del círculo cromático, todos
                guardan la misma distancia entre ellos, se los llama{" "}
                <strong>tríada</strong>. Esta combinación suele generar
                combinaciones balanceadas y vibrantes. Por ejemplo: Fucsia, Ocre
                y Turquesa.
              </Typography>
              <div
                style={{ width: "100%", height: "400px", position: "relative" }}
                role="img"
                aria-label="Ejemplo visual de tríada de colores"
              >
                <Image
                  title="Ejemplo visual de una triada de colores en el círculo cromático"
                  src="/eared-04/triada.png"
                  alt="Ejemplo visual de una triada de colores en el círculo cromático"
                  layout="fill"
                  objectFit="contain"
                />
              </div>

              <Typography variant="body1">
                Cuando se utilizan diferentes tonos y saturaciones de un solo
                color, esta forma de cimbinar se la llama{" "}
                <strong>monocromo</strong>. Esta combinación es ideal para
                generar armonía y simplicidad. Por ejemplo: Tonalidades del
                color Amarillo.
              </Typography>
              <div
                style={{ width: "100%", height: "400px", position: "relative" }}
                role="img"
                aria-label="Ejemplo visual de monocromo"
              >
                <Image
                  title="Ejemplo visual de un monocromo en el círculo cromático"
                  src="/eared-04/monocromo.png"
                  alt="Ejemplo visual de un monocromo en el círculo cromático"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </AccordionDetails>
          </Accordion>

          <Paper sx={{ padding: 3, marginY: 4 }}>
            <Typography variant="h3" component="h3" gutterBottom tabIndex={-1}>
              Resumen con información adicional
            </Typography>

            <Typography variant="body1" gutterBottom>
              El círculo cromático es una rueda de colores que muestra cómo se
              relacionan entre sí. Sirve para entender cómo combinarlos y qué
              efectos producen. Para crear una paleta de colores, es importante
              pensar en la sensación que queremos transmitir y elegir los
              colores adecuados. Aunque existen muchas reglas sobre el color,
              cada persona puede percibirlo de manera diferente según su
              cultura, su entorno y el contexto en el que se encuentre.
            </Typography>
          </Paper>
        </Box>

        <Box flex={1} p={2}>
          <aside>
            {Array.from({ length: 5 }, (_, moduleIndex) => (
              <Accordion key={moduleIndex} defaultExpanded={moduleIndex === 2}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon aria-hidden="true" />}
                  aria-controls={`menu${moduleIndex}-content`}
                  id={`menu${moduleIndex}-header`}
                >
                  <Typography>Módulo {moduleIndex + 1}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {Array.from({ length: 3 }, (_, classIndex) => (
                    <Typography
                      key={classIndex}
                      variant="body2"
                      component="p"
                      gutterBottom
                      color={
                        moduleIndex === 2 && classIndex === 1
                          ? "primary"
                          : "dark"
                      }
                    >
                      Clase {classIndex + 1}
                    </Typography>
                  ))}
                </AccordionDetails>
              </Accordion>
            ))}
          </aside>
        </Box>
      </Box>
    </Container>
  );
}
