import React from "react";
import { Link, Stack } from "@fluentui/react";
import { Image } from "./Image";

export function Header() {
  return (
    <Stack
      horizontal
      verticalAlign="center"
      gap={24}
      style={{
        width: "100vw",
        background: "#e7e7e7",
        padding: "6px 12px",
      }}
    >
      <Image
        src="Profile_graybackground"
        style={{ width: 40, height: 40, borderRadius: "999pc" }}
      />
      <Link href="https://github.com/kkjeer" target="blank">
        GitHub
      </Link>
      <Link href="https://linkedin.com/in/kkjeer" target="blank">
        LinkedIn
      </Link>
    </Stack>
  );
}
