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
              // stroke={COLORS.palette.mediumGray}
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
          // className={`atom-${atom.id}`}
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
    id: "center",
    x: 50,
    y: 50,
    r: 15,
    // color: COLORS.palette.navy,
    color: "dark-color",
    links: [],
  },
  {
    id: "upperright",
    x: 85,
    y: 18,
    r: 13,
    // color: COLORS.palette.turquoise,
    color: "light-color",
    links: ["ur1", "ur2", "ur3"],
  },
  {
    id: "ur1",
    x: 95,
    y: 5,
    r: 6,
    color: "dark-neutral",
    links: [],
  },
  {
    id: "ur2",
    x: 95,
    y: 15,
    r: 6,
    color: "dark-neutral",
    links: [],
  },
  {
    id: "ur3",
    x: 95,
    y: 25,
    r: 6,
    color: "dark-neutral",
    links: [],
  },
];
