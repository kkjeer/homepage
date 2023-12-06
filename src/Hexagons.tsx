import { useEffect, useState } from "react";
import { rotatePoint } from "./math";

const W = 0.4;
const H = 0.6;

export function Hexagons({ flipped = false }: { flipped?: boolean }) {
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

  // const renderHexagon = (hex: IHexagon, idx: number) => {
  //   const positions = makeHexagonPositions(hex);
  //   return (
  //     <>
  //       {positions.map((pos, i) => {
  //         const next = positions[(i + 1) % 6];
  //         return (
  //           <line
  //             key={`hexline-${idx}-${i}-${flipped ? "flipped" : ""}`}
  //             id={`hexline-${idx}-${i}-${flipped ? "flipped" : ""}`}
  //             x1={`${pos.x}%`}
  //             y1={`${pos.y}%`}
  //             x2={`${next.x}%`}
  //             y2={`${next.y}%`}
  //             strokeWidth={hex.thickness ?? 1}
  //             className={hex.color ?? "light-neutral"}
  //             opacity={hex.opacity ?? 1}
  //           />
  //         );
  //       })}
  //     </>
  //   );
  // };

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
      {HEXAGONS.map((hex, idx) => renderHexagon(hex, idx, flipped))}
    </svg>
  );
}

export function renderHexagon(
  hex: IHexagon,
  idx: number,
  flipped: boolean = false,
  full: boolean = false,
  width: number = 100,
  height: number = 100
) {
  const positions = makeHexagonPositions(hex);

  if (full) {
    let d = `M ${(positions[0].x * width) / 100} ${
      (positions[0].y * height) / 100
    } `;
    for (let i = 1; i < positions.length; ++i) {
      d += `L ${(positions[i].x * width) / 100} ${
        (positions[i].y * height) / 100
      } `;
    }
    d += `L ${(positions[0].x * width) / 100} ${
      (positions[0].y * height) / 100
    }z`;
    return <path d={d} />;
  }

  return (
    <>
      {positions.map((pos, i) => {
        const next = positions[(i + 1) % 6];
        return (
          <line
            key={`hexline-${idx}-${i}-${flipped ? "flipped" : ""}`}
            id={`hexline-${idx}-${i}-${flipped ? "flipped" : ""}`}
            x1={`${pos.x}%`}
            y1={`${pos.y}%`}
            x2={`${next.x}%`}
            y2={`${next.y}%`}
            strokeWidth={hex.thickness ?? 1}
            className={hex.color ?? "light-neutral"}
            opacity={hex.opacity ?? 1}
          />
        );
      })}
    </>
  );
}

export interface IHexagon {
  x: number;
  y: number;
  dxSmall?: number;
  dxLarge?: number;
  dy?: number;
  theta?: number;
  color?: string;
  thickness?: number;
  opacity?: number;
}

const r = 3.3;
const big = 7 / 4;
const h = 2;

function makeHexagonPositions({
  x: cx,
  y: cy,
  dxSmall = r,
  dxLarge = big * dxSmall,
  dy = h * dxSmall,
  theta = 0,
}: IHexagon) {
  const positions: { x: number; y: number }[] = [];

  const addPos = (x: number, y: number) => {
    const p = rotatePoint(x, y, cx, cy, theta);
    positions.push(p);
  };

  addPos(cx + dxSmall, cy - dy);
  addPos(cx + dxLarge, cy);
  addPos(cx + dxSmall, cy + dy);
  addPos(cx - dxSmall, cy + dy);
  addPos(cx - dxLarge, cy);
  addPos(cx - dxSmall, cy - dy);

  return positions;
}

const dx = 3 * r;
const dy = (18 / 8) * (h * r);
const x = 4.5;
const y = 7;
function hex(col: number, row: number, rest: Partial<IHexagon> = {}) {
  const cx = x;
  const cy = col % 2 === 0 ? y : y - 0.5 * dy;
  return {
    x: cx + col * dx,
    y: cy + row * dy,
    ...rest,
  };
}

const HEXAGONS: IHexagon[] = [
  // column
  hex(0, 0),
  hex(0, 1),
  hex(0, 2),
  hex(0, 3),
  hex(0, 4),
  // column
  hex(1, 0),
  hex(1, 1),
  hex(1, 2),
  hex(1, 3),
  hex(1, 4),
  // column
  hex(2, 0),
  hex(2, 1),
  hex(2, 2),
  // column
  hex(3, 0),
  hex(3, 1),
  hex(3, 2),
  hex(3, 3),
  // column
  hex(4, 0),
  hex(4, 1),
  // column
  hex(5, 0),
  hex(5, 1),
  hex(5, 2),
  // column
  hex(6, 0),
  // column
  hex(7, 0),
  hex(7, 1),
];
