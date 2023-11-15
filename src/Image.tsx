import React from "react";

interface ImageProps {
  src: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  id?: string;
  className?: string;
}

function modifyImageNmae(src: string) {
  return src.replaceAll(" ", "-").replaceAll("'", "_");
}

export function Image({ src, ...rest }: ImageProps) {
  const modifiedImg = modifyImageNmae(src);
  let amazonSrc = `https://swcsektcimages.s3.us-west-2.amazonaws.com/portfolio/${modifiedImg}`;
  if (!amazonSrc.includes(".png") && !amazonSrc.includes(".jpg")) {
    amazonSrc += ".png";
  }
  return <img src={amazonSrc} alt="" {...rest} />;
}
