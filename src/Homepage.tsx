import { Stack, Text } from "@fluentui/react";
import { COLORS } from "./constants";
import { Image } from "./Image";
import { Link } from "react-router-dom";
import { Contacts } from "./Contacts";

export function Homepage() {
  return (
    <Stack
      id="fullscreen"
      verticalAlign="center"
      horizontalAlign="center"
      style={{
        width: "100vw",
        height: "100vh",
        background: COLORS.background.light,
      }}
      tokens={{ childrenGap: 14 }}
    >
      <Stack
        id="header"
        horizontal
        horizontalAlign="space-between"
        style={{ width: "calc(40vw + 10vw + 250px)" }}
      >
        <Stack horizontal tokens={{ childrenGap: 18 }}>
          <Image
            src="Profile_graybackground"
            style={{ width: 45, height: 45, borderRadius: "999pc" }}
          />
          <Text style={{ fontSize: 24 }}>Hi, I'm</Text>
        </Stack>
        <Contacts />
      </Stack>
      <Stack id="innercontents" horizontal tokens={{ childrenGap: "10vw" }}>
        <Stack
          id="nameandbio"
          horizontalAlign="start"
          verticalAlign="center"
          tokens={{ childrenGap: 12 }}
          style={{ width: "40vw" }}
        >
          <Text className="linear-wipe">KATHERINE KJEER</Text>
          <Stack id="bio" horizontal tokens={{ childrenGap: 24 }}>
            <div
              style={{
                width: 9,
                background:
                  "linear-gradient(to bottom, #003058 0%, #16c6cc 100%)",
                borderRadius: "999pc",
              }}
            />
            <Text style={{ fontSize: 18, lineHeight: 1.6 }}>
              I'm a frontend web developer and compiler engineer with 6 years of
              experience. I'm passionate about building{" "}
              <span className="highlight">productivity tools</span> such as
              component libraries, developing{" "}
              <span className="highlight">educational technology</span> such as
              intelligent tutoring systems, and using{" "}
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
          style={{ width: 250 }}
          tokens={{ childrenGap: 12 }}
        >
          <SideLink href="/experience" text="work experience" />
          <SideLink href="/projects" text="projects" />
        </Stack>
      </Stack>
    </Stack>
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
    <Stack
      styles={{
        root: {
          background: COLORS.palette.turquoise + "33",
          border: `1px solid ${COLORS.palette.turquoise}`,
          borderRadius: "999pc",
          padding: "6px 9px",
        },
      }}
    >
      <Text style={{ fontSize, fontFamily: "Consolas" }}>{text}</Text>
    </Stack>
  );
}
