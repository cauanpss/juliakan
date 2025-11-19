// importa o "objeto" de cada projeto e exporta todos os projetos

import dataClippings from "./dataClippings";
import dataBau from "./dataBau";
import dataBlanca from "./dataBlanca";
import dataCreacionConRayosAstrales from "./dataCreacionConRayosAstrales";
import dataHorizons from "./dataHorizons";
import dataImaginarySpaces from "./dataImaginarySpaces";
import dataTela from "./dataTela";

//ordem de export dita a ordem de exibição dos hovercards
export const projectDetails = {
    bau: dataBau,
    imaginarySpaces: dataImaginarySpaces,
    blanca: dataBlanca,
    creacionConRayosAstrales: dataCreacionConRayosAstrales,
    clippings: dataClippings,
    horizons: dataHorizons,
    tela: dataTela,
};
