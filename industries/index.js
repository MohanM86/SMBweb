import elektriker from "./elektriker";
import snekker from "./snekker";
import rorlegger from "./rorlegger";
import maler from "./maler";
import taktekking from "./taktekking";
import renhold from "./renhold";
import frisor from "./frisor";
import tannlege from "./tannlege";
import bilverksted from "./bilverksted";
import hage from "./hage";

export const INDUSTRIES = [
  elektriker, snekker, rorlegger, maler, taktekking,
  renhold, frisor, tannlege, bilverksted, hage,
];

export const getIndustry = (id) => INDUSTRIES.find((i) => i.id === id);
