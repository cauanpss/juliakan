// importa o "objeto" de cada projeto e exporta todos os projetos

import dataClippings from "./dataClippings";
import dataBau from "./dataBau";
import dataBlanca from "./dataBlanca";
import dataCreacionConRayosAstrales from "./dataCreacionConRayosAstrales";
import dataHorizons from "./dataHorizons";
import dataImaginarySpaces from "./dataImaginarySpaces";
import dataTela from "./dataTela";

export const projectDetails = {
    clippings: dataClippings,
    bau: dataBau,
    blanca: dataBlanca,
    creacionConRayosAstrales: dataCreacionConRayosAstrales,
    horizons: dataHorizons,
    imaginarySpaces: dataImaginarySpaces,
    tela: dataTela,
};
