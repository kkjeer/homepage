import { Stack } from "@fluentui/react";
import { COLORS } from "./constants";
import { useEffect, useState } from "react";

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
          id={`atom-${flipped && "flipped-"}${atom.id}`}
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

const ATOMS: IAtom[] = [
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
