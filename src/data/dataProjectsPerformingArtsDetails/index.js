// importa o "objeto" de cada projeto e exporta todos os projetos

import dataExpografiaDiane from "./dataExpografiaDiane";
import dataMoraesMoreira from "./dataMoraesMoreira";
import dataObdr from "./dataObdr";
import dataPedroArcanjo from "./dataPedroArcanjo";
import dataPropaganda from "./dataPropaganda";
import dataRemediosVard from "./dataRemediosVard";

//ordem de export dita a ordem de exibição dos hovercards
export const projectDetails = {
    expografiaDiane: dataExpografiaDiane,
    moraesMoreira: dataMoraesMoreira,
    obdr: dataObdr,
    pedroArcanjo: dataPedroArcanjo,
    propaganda: dataPropaganda,
    remediosVards: dataRemediosVard,
};
