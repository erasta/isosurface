import { surfaceNets } from "./libm/surfacenets.js";
import { marchingCubes } from "./libm/marchingcubes.js";
import { marchingTetrahedra } from "./libm/marchingtetrahedra.js";

export const isosurface = {
    surfaceNets: surfaceNets,
    marchingCubes: marchingCubes,
    marchingTetrahedra: marchingTetrahedra
};
