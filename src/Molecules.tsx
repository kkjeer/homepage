import { Stack } from "@fluentui/react";
import { COLORS } from "./constants";
import { useEffect, useState } from "react";
import { rotatePoint } from "./math";

const W = 0.4;
const H = 0.6;

export function Molecules({ flipped = false }: { flipped?: boolean }) {
  const [width, setWidth] = useState(W * window.innerWidth);
  const [height, setHeight] = useState(H * window.innerHeight);

  const adjust = () => {
    setWidth(W * window.innerWidth);
    setHeight(H * window.innerHeight);
  };

  const resizeHandler = () => {
    function handleResize() {
      adjust();
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  };

  useEffect(() => resizeHandler());

  window.addEventListener("resize", adjust);

  const getAtomById = (id: string) => {
    for (const i in ATOMS) {
      if (ATOMS[i].id === id) {
        return ATOMS[i];
      }
    }
    return undefined;
  };

  const renderLines = (atom: IAtom) => {
    return (
      <>
        {atom.links.map((id) => {
          const a = getAtomById(id);
          if (!a) return <></>;
          return (
            <line
              className="light-neutral"
              x1={`${atom.x}%`}
              y1={`${atom.y}%`}
              x2={`${a.x}%`}
              y2={`${a.y}%`}
              strokeWidth={2}
            />
          );
        })}
      </>
    );
  };

  return (
    <svg
      className="molecule"
      style={{
        position: "fixed",
        [flipped ? "bottom" : "top"]: 0,
        [flipped ? "right" : "left"]: 0,
        width,
        height,
        transform: flipped ? "scale(-1, -1)" : "",
        zIndex: -1,
      }}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMinYMin meet"
    >
      {ATOMS.map((atom) => renderLines(atom))}
      {ATOMS.map((atom) => (
        <circle
          id={`atom-${flipped ? "flipped-" : ""}${atom.id}`}
          className={atom.color}
          r={atom.r}
          cx={`${atom.x}%`}
          cy={`${atom.y}%`}
        />
      ))}
    </svg>
  );
}

interface IAtom {
  id: string;
  x: number;
  y: number;
  r: number;
  color: string;
  links: string[];
}

interface IHexagon {
  id: string;
  cx: number;
  cy: number;
  dxSmall: number;
  dxLarge: number;
  dy: number;
  theta?: number;
  links?: { [key: number]: string[] };
  leafAtoms?: { [key: number]: { dx: number; dy: number }[] };
}

function hexagon({
  id,
  cx,
  cy,
  dxSmall,
  dxLarge,
  dy,
  theta = 0,
  links = {},
  leafAtoms = {},
}: IHexagon) {
  const atoms: IAtom[] = [];

  const addAtom = (n: number, x: number, y: number) => {
    let next = (n + 1) % 6;
    if (next === 0) next = 6;
    const p = rotatePoint(x, y, cx, cy, theta);
    const extraLinks = links[n] ?? [];
    atoms.push({
      id: `${id}${n}`,
      ...p,
      r: 10,
      color: "dark-color",
      links: [`${id}${next}`, ...extraLinks],
    });

    const leaves = leafAtoms[n] ?? [];
    for (const i in leaves) {
      const { dx, dy } = leaves[i];
      const p1 = rotatePoint(x + dx, y + dy, cx, cy, theta);
      atoms.push({
        id: `${id}${n}-leaf${i}`,
        ...p1,
        r: 8,
        color: "light-color",
        links: [`${id}${n}`],
      });
    }
  };

  addAtom(1, cx + dxSmall, cy - dy);
  addAtom(2, cx + dxLarge, cy);
  addAtom(3, cx + dxSmall, cy + dy);
  addAtom(4, cx - dxSmall, cy + dy);
  addAtom(5, cx - dxLarge, cy);
  addAtom(6, cx - dxSmall, cy - dy);

  return atoms;
}

const ATOMS: IAtom[] = [
  ...hexagon({
    id: "r",
    cx: 84,
    cy: 18,
    dxSmall: 4,
    dxLarge: 7,
    dy: 8,
    theta: 0,
    leafAtoms: {
      1: [{ dx: 3, dy: -5 }],
      2: [{ dx: 5, dy: 0 }],
      3: [{ dx: 3, dy: 5 }],
    },
  }),
  ...hexagon({
    id: "r1",
    cx: 66,
    cy: 33,
    dxSmall: 4,
    dxLarge: 7,
    dy: 8,
    links: { 1: ["r5"], 2: ["r4"] },
  }),
];
