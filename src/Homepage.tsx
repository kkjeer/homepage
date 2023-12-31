import { Stack, Text } from "@fluentui/react";
import { COLORS } from "./constants";
import { Image } from "./Image";
import { Link } from "react-router-dom";
import { Contacts } from "./Contacts";
import { Molecules } from "./Molecules";
import { Hexagons } from "./Hexagons";

const BIO_WIDTH = "40vw";
const LINKS_WIDTH = 250;
const BIO_LINKS_GAP = "8vw";
const TOTAL_WIDTH = `calc(${BIO_WIDTH} + ${BIO_LINKS_GAP} + ${LINKS_WIDTH}px)`;

const DO_MOLECULES = false;

export function Homepage() {
  return (
    <>
      {false && <Molecules />}
      {false && <Molecules flipped />}
      <Hexagons />
      <Hexagons flipped />
      <Stack
        id="fullscreen"
        verticalAlign="center"
        horizontalAlign="center"
        style={{
          width: TOTAL_WIDTH,
          background: "transparent",
          zIndex: 9999,
          position: "fixed",
          left: "50vw",
          top: "50vh",
          transform: "translate(-50%, -50%)",
        }}
        tokens={{ childrenGap: 9 }}
      >
        <Stack
          id="header"
          horizontal
          horizontalAlign="space-between"
          style={{
            width: TOTAL_WIDTH,
          }}
        >
          <Stack horizontal tokens={{ childrenGap: 18 }}>
            {false && (
              <Image
                src="Profile_tanbackground"
                style={{ width: 65, height: 65, borderRadius: "999pc" }}
              />
            )}
            <Text style={{ fontSize: 24 }}>Hi, I'm</Text>
          </Stack>
          <Contacts />
        </Stack>
        <Stack
          id="innercontents"
          horizontal
          tokens={{ childrenGap: BIO_LINKS_GAP }}
        >
          <Stack
            id="nameandbio"
            horizontalAlign="start"
            verticalAlign="center"
            tokens={{ childrenGap: 12 }}
            style={{ width: BIO_WIDTH }}
          >
            <Text className="linear-wipe">KATHERINE KJEER</Text>
            <Stack id="bio" horizontal tokens={{ childrenGap: 24 }}>
              <div
                className="vertical-border"
                style={{
                  width: 9,
                  borderRadius: "999pc",
                }}
              />
              <Text style={{ fontSize: 18, lineHeight: 1.6 }}>
                I'm a frontend web developer and compiler engineer with 6 years
                of experience. I'm passionate about building{" "}
                <span className="highlight">productivity tools</span> such as
                component libraries, developing{" "}
                <span className="highlight">educational technology</span> such
                as intelligent tutoring systems, and using{" "}
                <span className="highlight">math</span> to solve challenging
                technical problems.
              </Text>
            </Stack>
            <Stack id="skills" horizontal tokens={{ childrenGap: 16 }}>
              <Tag text="TypeScript" />
              <Tag text="React" />
              <Tag text="C++" />
            </Stack>
          </Stack>
          <Stack
            id="linkcsontainer"
            style={{ width: LINKS_WIDTH }}
            tokens={{ childrenGap: 12 }}
          >
            <SideLink href="/experience" text="work experience" />
            <SideLink href="/projects" text="projects" />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

interface SideLinkProps {
  href: string;
  text: string;
}

export function SideLink({ href, text }: SideLinkProps) {
  return (
    <Link to={href} className="side-link">
      <Stack horizontal verticalAlign="center" tokens={{ childrenGap: 12 }}>
        <div className="link-line" />
        <Text className="link-text">{text}</Text>
      </Stack>
    </Link>
  );
}

export function BigText({ text }: { text: string }) {
  return (
    <Stack verticalAlign="center" horizontalAlign="center">
      <Text className="linear-wipe">{text.toUpperCase()}</Text>
    </Stack>
  );
}

export function Tag({
  text,
  size = "medium",
}: {
  text: string;
  size?: "small" | "medium";
}) {
  let fontSize = 14;
  switch (size) {
    case "small":
      fontSize = 12;
      break;
  }

  return (
    <Stack className="tag">
      <Text style={{ fontSize, fontFamily: "Consolas" }}>{text}</Text>
    </Stack>
  );
}
