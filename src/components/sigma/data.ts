import arc from "@/assets/arc.jpg";
import monolith from "@/assets/monolith.jpg";
import sable from "@/assets/sable.jpg";
import form from "@/assets/form.jpg";
import linear from "@/assets/linear.jpg";
import walnut from "@/assets/walnut.jpg";
import travertine from "@/assets/travertine.jpg";
import boucle from "@/assets/boucle.jpg";
import steel from "@/assets/steel.jpg";

export const products = [
  { no: "01", name: "Arc Chair", material: "Oak / Bouclé", price: "$2,450", dims: "78 × 82 × 74 cm", desc: "A single bent line of oak, holding a seat that refuses to be sharp.", img: arc },
  { no: "02", name: "Monolith Sofa", material: "Italian Leather / Walnut", price: "$4,800", dims: "280 × 94 × 72 cm", desc: "Low, long and unhurried. A sofa that sets the horizon of a room.", img: monolith },
  { no: "03", name: "Sable Table", material: "Travertine / Brushed Bronze", price: "$3,200", dims: "140 × 80 × 34 cm", desc: "Raw-edged stone resting on a bronze drum. Weight, made quiet.", img: sable },
  { no: "04", name: "Form Lounge", material: "Ash / Wool", price: "$3,900", dims: "172 × 64 × 70 cm", desc: "One continuous gesture, from head to heel. Made for the long afternoon.", img: form },
  { no: "05", name: "Linear Console", material: "Walnut / Stone", price: "$2,950", dims: "220 × 42 × 78 cm", desc: "A horizon line for the wall. Nothing more, deliberately.", img: linear },
];

export const materials = [
  { name: "Walnut", copy: "Warm, dense and quietly expressive. Selected for the depth it develops over time.", img: walnut },
  { name: "Travertine", copy: "Every surface carries its own variation. No two pieces read exactly the same.", img: travertine },
  { name: "Bouclé", copy: "Soft texture against structured form.", img: boucle },
  { name: "Brushed Steel", copy: "Light moves across it slowly. A cool line in a warm room.", img: steel },
];
