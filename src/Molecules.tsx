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

const linePointX = (x: number, y: number, slope: number, dx: number) => {
  const dy = slope * dx;
  return { x: x + dx, y: y + dy };
};

const linePointY = (x: number, y: number, slope: number, dy: number) => {
  const dx = (1 / slope) * dy;
  return { x: x + dx, y: y + dy };
};

const octagon = (
  id: string,
  cx: number,
  cy: number,
  slope: number,
  perp: number,
  dxSmall: number,
  dxLarge: number
) => {
  const makeAtom = (n: number, p: { x: number; y: number }) => {
    let next = (n + 1) % 6;
    if (next === 0) next = 6;
    return {
      id: `${id}${n}`,
      ...p,
      r: 10,
      color: "dark-color",
      links: [`${id}${next}`],
    };
  };
  const atoms: IAtom[] = [];

  // upper atoms - 1 and 6
  const { x: ux, y: uy } = linePointY(cx, cy, perp, -8);
  const p1 = linePointX(ux, uy, slope, dxSmall);
  atoms.push(makeAtom(1, p1));
  const p6 = linePointX(ux, uy, slope, -dxSmall);
  atoms.push(makeAtom(6, p6));

  // center atoms - 2 and 5
  const p2 = linePointX(cx, cy, slope, dxLarge);
  atoms.push(makeAtom(2, p2));
  const p5 = linePointX(cx, cy, slope, -dxLarge);
  atoms.push(makeAtom(5, p5));

  // lower atoms - 3 and 4
  const { x: lx, y: ly } = linePointY(cx, cy, perp, 8);
  const p3 = linePointX(lx, ly, slope, dxSmall);
  atoms.push(makeAtom(3, p3));
  const p4 = linePointX(lx, ly, slope, -dxSmall);
  atoms.push(makeAtom(4, p4));

  if (false) {
    atoms.push({
      id: `${id}center`,
      x: cx,
      y: cy,
      r: 10,
      color: "light-color",
      links: [],
    });
    atoms.push({
      id: `${id}upper`,
      x: ux,
      y: uy,
      r: 10,
      color: "light-color",
      links: [],
    });
    atoms.push({
      id: `${id}lower`,
      x: lx,
      y: ly,
      r: 10,
      color: "light-color",
      links: [],
    });
  }

  return atoms;
};

const makeOctagon = (
  id: string,
  x1: number,
  y1: number,
  dx6: number,
  dy6: number,
  dx2: number,
  dy2: number
) => {
  const atoms: IAtom[] = [];
  atoms.push({
    id: `${id}1`,
    x: x1,
    y: y1,
    r: 10,
    color: "dark-color",
    links: [`${id}2`],
  });
  atoms.push({
    id: `${id}2`,
    x: x1 + dx2,
    y: y1 + dy2,
    r: 10,
    color: "dark-color",
    links: [`${id}3`],
  });
  // atoms.push({
  //   id: `${id}3`,
  //   x: x1,
  //   y: y1,
  //   r: 10,
  //   color: "dark-color",
  //   links: [`${id}2`],
  // });
  atoms.push({
    id: `${id}5`,
    x: x1 + dx6 - dx2,
    y: y1 + dy6 + dy2,
    r: 10,
    color: "dark-color",
    links: [`${id}6`],
  });
  atoms.push({
    id: `${id}6`,
    x: x1 + dx6,
    y: y1 + dy6,
    r: 10,
    color: "dark-color",
    links: [`${id}1`],
  });
  return atoms;
};

// r1-r6: dx: 6, dy: 2
// r2-r5: dx: 12, dy: 2
// r3-r4: dx: 6, dy: 2

// dx6: -6, dy6: -2, dx2: 2, dy2: 8
// r1-r2: dx: 2: dy: 8
// r1-r3: dx: -2, dy: 16
// r1-r4: dx: -8, dy: 14
// r1-r5: dx: -10, dy: 6
// r1-r6: dx: -6, dy: -2
const ATOMS: IAtom[] = [
  // {
  //   id: "r1",
  //   x: 88,
  //   y: 15,
  //   r: 10,
  //   color: "dark-color",
  //   links: ["r2"],
  // },
  // {
  //   id: "r2",
  //   x: 90,
  //   y: 23,
  //   r: 10,
  //   color: "dark-color",
  //   links: ["r3"],
  // },
  // {
  //   id: "r3",
  //   x: 86,
  //   y: 31,
  //   r: 10,
  //   color: "dark-color",
  //   links: ["r4"],
  // },
  // {
  //   id: "r4",
  //   x: 80,
  //   y: 29,
  //   r: 10,
  //   color: "dark-color",
  //   links: ["r5"],
  // },
  // {
  //   id: "r5",
  //   x: 78,
  //   y: 21,
  //   r: 10,
  //   color: "dark-color",
  //   links: ["r6"],
  // },
  // {
  //   id: "r6",
  //   x: 82,
  //   y: 13,
  //   r: 10,
  //   color: "dark-color",
  //   links: ["r1"],
  // },
  ...octagon("rtest", 84, 22, 0.4, -20, 3, 5.4),
  ...octagon("c", 65, 28, 0.4, -20, 3, 5.4),
  // ...makeOctagon("test", 30, 30, -6, -2, 2, 8),
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
