export const linePointX = (x: number, y: number, slope: number, dx: number) => {
  const dy = slope * dx;
  return { x: x + dx, y: y + dy };
};

export const linePointY = (x: number, y: number, slope: number, dy: number) => {
  const dx = (1 / slope) * dy;
  return { x: x + dx, y: y + dy };
};

export function degreesToRadians(theta: number) {
  return (theta * Math.PI) / 180;
}

export function rotatePoint(
  x: number,
  y: number,
  cx: number,
  cy: number,
  theta: number
) {
  let rx = x - cx;
  let ry = y - cy;

  const angle = degreesToRadians(theta);

  const xnew = rx * Math.cos(angle) - ry * Math.sin(angle);
  const ynew = rx * Math.sin(angle) + ry * Math.cos(angle);

  rx = xnew + cx;
  ry = ynew + cy;

  return { x: rx, y: ry };
}