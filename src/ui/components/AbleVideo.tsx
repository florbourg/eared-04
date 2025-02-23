"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { Box } from "@mui/material";

const AbleVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [ablePlayerLoaded, setAblePlayerLoaded] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && window.jQuery && window.AblePlayer && videoRef.current) {
      new window.AblePlayer(videoRef.current);
    }
  }, [isClient, ablePlayerLoaded]);

  if (!isClient) return null; // Evita la hidratación en SSR

  return (
    <Box mb={5}>
      {/* Cargar jQuery primero */}
      <Script
        src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
        crossOrigin="anonymous"
        onLoad={() => console.log("✅ jQuery cargado")}
      />
      <Script
        src="
        https://cdn.jsdelivr.net/npm/js-cookie@3.0.5/dist/js.cookie.min.js
        "
        onLoad={() => console.log("✅ jQuery cookies cargado")}
      />

      {/* Cargar Able Player después de jQuery */}
      <Script
        src="https://ableplayer.github.io/ableplayer/build/ableplayer.min.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log("✅ Able Player cargado");
          setAblePlayerLoaded(true);
        }}
      />

      {/* Estilos de Able Player */}
      <link
        rel="stylesheet"
        href="https://ableplayer.github.io/ableplayer/build/ableplayer.min.css"
      />
      <link
        rel="stylesheet"
        href="https://ableplayer.github.io/ableplayer/thirdparty/fontawesome/css/all.min.css"
      />

      <video ref={videoRef} id="video1" playsInline>
        <source
          type="video/mp4"
          src="/eared-04/CirculoCromatico.mp4"
        />
        <track
          kind="captions"
          src="/eared-04/subs_Es.vtt"
          srcLang="es"
          label="Subtítulos Español"
        />
        <track
          kind="descriptions"
          src="/eared-04/audiodescripcion.vtt"
          srcLang="es"
          label="Audiodescripción"
        />
      </video>
    </Box>
  );
};

export default AbleVideo;
