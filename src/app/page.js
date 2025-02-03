import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AbleVideo from "../ui/components/AbleVideo";
import styles from "./page.module.css";

export default function Home() {
  return (
    <Container>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        spacing={2}
      >
        <Box flex={1} p={2} minWidth={"80%"}>
          <Typography variant="h1" component="h1" gutterBottom>
            Módulo 3 - Composición y encuadre
          </Typography>
          <Typography variant="h3" component="h3">
            El Círculo Cromático – Aprende sobre los colores
          </Typography>
          <AbleVideo />

          <Typography variant="h4" gutterBottom>
            El Círculo Cromático en Fotografía 📸🎨
          </Typography>

          <Typography variant="h6">
            El círculo cromático es un <strong>círculo de colores</strong> que
            nos ayuda a entender cómo los colores se combinan y cómo los podemos
            usar en fotografía para crear imágenes con más armonía.
          </Typography>

          <Paper sx={{ padding: 3, marginBottom: 4 }}>
            <Typography variant="h6" gutterBottom>
              1. ¿Qué es el círculo cromático?
            </Typography>
            <Typography variant="body1">
              El círculo cromático es una herramienta visual que muestra los
              colores y sus combinaciones. Nos ayuda a hacer fotos más bonitas
              utilizando el color de manera creativa.
            </Typography>
            <Typography variant="body1">
              📌 Ejemplo: Si usas colores que combinan bien, la foto se ve más
              atractiva.
            </Typography>
          </Paper>

          <Paper sx={{ padding: 3, marginBottom: 4 }}>
            <Typography variant="h6" gutterBottom>
              2. Los colores en fotografía
            </Typography>
            <Typography variant="body1">
              En fotografía, usamos los colores del círculo cromático para crear
              diferentes sensaciones en las fotos.
            </Typography>
            <List>
              <ListItem>Colores primarios: Rojo, Azul y Amarillo.</ListItem>
              <ListItem>
                Colores secundarios: Naranja, Verde y Violeta.
              </ListItem>
            </List>
          </Paper>

          <Paper sx={{ padding: 3, marginBottom: 4 }}>
            <Typography variant="h6" gutterBottom>
              3. Colores cálidos y fríos en fotografía 🌞❄️
            </Typography>
            <Typography variant="body1">
              Los colores cálidos y fríos nos ayudan a crear diferentes
              emociones en nuestras fotos.
            </Typography>
            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              gap={2}
            >
              <Box flex={1} p={2} bgcolor="#f5f5f5" borderRadius={2}>
                <Typography variant="body1">
                  <strong>Colores cálidos</strong>: Rojo, Naranja, Amarillo. Nos
                  dan sensación de <strong>calor, energía y emoción</strong>.
                </Typography>
                <Typography variant="body1">
                  📸 Ejemplo: Una puesta de sol con colores cálidos, como
                  naranja y rojo, nos da una sensación de{" "}
                  <strong>tranquilidad</strong> y <strong>pasión</strong>.
                </Typography>
              </Box>
              <Box flex={1} p={2} bgcolor="#f5f5f5" borderRadius={2}>
                <Typography variant="body1">
                  <strong>Colores fríos</strong>: Azul, Verde, Violeta. Nos dan
                  sensación de <strong>frescor, calma y paz</strong>.
                </Typography>
                <Typography variant="body1">
                  📸 Ejemplo: Una foto del mar o de un bosque, con muchos tonos
                  azules y verdes, nos da una sensación de{" "}
                  <strong>relajación</strong> y <strong>paz</strong>.
                </Typography>
              </Box>
            </Box>
          </Paper>

          <Paper sx={{ padding: 3, marginBottom: 4 }}>
            <Typography variant="h6" gutterBottom>
              4. Colores complementarios en fotografía 🔴🟢
            </Typography>
            <Typography variant="body1">
              Los colores complementarios son los que están opuestos en el
              círculo cromático. Cuando los ponemos juntos, se ven muy bien y
              hacen que la foto resalte más.
            </Typography>
            <List>
              <ListItem>
                Rojo y Verde: Son opuestos y se ven geniales juntos.
              </ListItem>
              <ListItem>Azul y Naranja: ¡También se ven muy bien!</ListItem>
              <ListItem>
                Amarillo y Violeta: Combinan y crean contraste.
              </ListItem>
            </List>
            <Typography variant="body1">
              📸 Ejemplo: Si tienes un fondo verde (como una planta) y una
              persona con ropa roja, los dos colores se complementan y hacen que
              la foto se vea más interesante.
            </Typography>
          </Paper>

          <Paper sx={{ padding: 3, marginBottom: 4 }}>
            <Typography variant="h6" gutterBottom>
              5. Colores análogos en fotografía 🎨
            </Typography>
            <Typography variant="body1">
              Los colores análogos son los que están cerca unos de otros en el
              círculo cromático. Usarlos en fotos crea una sensación de armonía
              y suavidad.
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Rojo, Naranja, Amarillo: Crea una foto cálida." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Azul, Verde, Violeta: Da una sensación de paz." />
              </ListItem>
            </List>
            <Typography variant="body1">
              📸 Ejemplo: Si tomas una foto de un paisaje con tonos de naranja y
              amarillo, la foto se verá cálida y armoniosa.
            </Typography>
          </Paper>

          <Paper sx={{ padding: 3, marginBottom: 4 }}>
            <Typography variant="h6" gutterBottom>
              6. Usar el círculo cromático para hacer fotos creativas 🌈
            </Typography>
            <Typography variant="body1">
              Experimenta con los colores para mejorar tus fotos. Aquí hay
              algunas ideas:
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Crear contraste con colores complementarios." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Crear armonía con colores análogos." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Jugar con la luz para resaltar colores." />
              </ListItem>
            </List>
            <Typography variant="body1">
              📸 Recuerda: No hay reglas fijas. ¡Diviértete y experimenta con
              los colores!
            </Typography>
          </Paper>

          <Paper sx={{ padding: 3, marginBottom: 4 }}>
            <Typography variant="h6" gutterBottom>
              7. Consejos para Usar el Círculo Cromático de Forma Creativa 🎨✨
            </Typography>
            <Typography variant="body1">
              A continuación te damos algunos consejos para usar el círculo
              cromático de manera más creativa en fotografía:
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Explora nuevos contrastes y combinaciones de colores para destacar detalles importantes." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Usa el círculo cromático para crear fotos con diferentes estilos y emociones." />
              </ListItem>
              <ListItem>
                <ListItemText primary="No tengas miedo de experimentar. Mezcla colores que normalmente no usarías juntos para ver qué sucede." />
              </ListItem>
            </List>
            <Typography variant="body1">
              📸 Recuerda, la creatividad no tiene límites. ¡Usa el círculo
              cromático para hacer fotos únicas y expresivas!
            </Typography>
          </Paper>
        </Box>
        <Box flex={1} p={2}>
          <aside>
            {Array.from({ length: 5 }, (_, moduleIndex) => (
              <Accordion key={moduleIndex} defaultExpanded={moduleIndex === 2}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Módulo {moduleIndex + 1}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {Array.from({ length: 3 }, (_, classIndex) => (
                    <Typography
                      key={classIndex}
                      variant="body2"
                      component="p"
                      gutterBottom
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
