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

const ATOMS_ALT: IAtom[] = [
  {
    id: "right",
    x: 95,
    y: 18,
    r: 10,
    color: "dark-color",
    links: ["right1-down"],
  },
  {
    id: "right1-down",
    x: 80,
    y: 30,
    r: 7,
    color: "light-color",
    links: [],
  },
  {
    id: "right1",
    x: 70,
    y: 21,
    r: 10,
    color: "dark-color",
    links: ["right1-down", "right1-up", "right2"],
  },
  {
    id: "right1-up",
    x: 78,
    y: 5,
    r: 8,
    color: "light-color",
    links: [],
  },
  {
    id: "right2",
    x: 60,
    y: 25,
    r: 12,
    color: "dark-color",
    links: ["right2-up", "right2-down", "right2-left", "right3"],
  },
  {
    id: "right2-up",
    x: 66,
    y: 9,
    r: 8,
    color: "light-color",
    links: ["right2-up-up"],
  },
  {
    id: "right2-up-up",
    x: 63,
    y: 3,
    r: 5,
    color: "light-color",
    links: [],
  },
  {
    id: "right2-down",
    x: 66,
    y: 37,
    r: 9,
    color: "light-color",
    links: [],
  },
  {
    id: "right2-left",
    x: 54,
    y: 19,
    r: 6,
    color: "light-color",
    links: [],
  },
  {
    id: "right3",
    x: 48,
    y: 40,
    r: 13,
    color: "dark-color",
    links: [
      "right3-up",
      "right3-left",
      "right3-right",
      "right3-side",
      "right4",
    ],
  },
  {
    id: "right3-up",
    x: 47.5,
    y: 31,
    r: 7,
    color: "light-color",
    links: [],
  },
  {
    id: "right3-left",
    x: 42,
    y: 46,
    r: 6,
    color: "light-color",
    links: [],
  },
  {
    id: "right3-right",
    x: 54,
    y: 48,
    r: 7,
    color: "light-color",
    links: [],
  },
  {
    id: "right3-side",
    x: 52.5,
    y: 40.5,
    r: 4,
    color: "light-color",
    links: [],
  },
  {
    id: "right4",
    x: 34,
    y: 24,
    r: 13,
    color: "dark-color",
    links: ["right4-up", "right4-right", "right4-down"],
  },
  {
    id: "right4-up",
    x: 34.5,
    y: 8,
    r: 8,
    color: "light-color",
    links: ["right4-up-up"],
  },
  {
    id: "right4-up-up",
    x: 31,
    y: 3,
    r: 4.5,
    color: "light-color",
    links: [],
  },
  {
    id: "right4-right",
    x: 45,
    y: 14,
    r: 8,
    color: "light-color",
    links: ["right4-right-right"],
  },
  {
    id: "right4-right-right",
    x: 48,
    y: 5,
    r: 3.5,
    color: "light-color",
    links: [],
  },
  {
    id: "right4-down",
    x: 30,
    y: 32,
    r: 7,
    color: "light-color",
    links: [],
  },
];
