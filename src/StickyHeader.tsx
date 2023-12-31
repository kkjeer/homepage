import { Stack, Text } from "@fluentui/react";
import { Link, useLocation } from "react-router-dom";
import { BigText } from "./Homepage";
import { STICKY_HEADER_HEIGHT } from "./constants";
import { Contacts } from "./Contacts";
import { renderHexagon } from "./Hexagons";

interface StickyHeaderProps {
  title: string;
}

export function StickyHeader({ title }: StickyHeaderProps) {
  return (
    <Stack
      className="sticky-header"
      horizontal
      horizontalAlign="space-between"
      verticalAlign="center"
      tokens={{ childrenGap: 18 }}
      style={{
        position: "sticky",
        top: 0,
        width: "100vw",
        height: STICKY_HEADER_HEIGHT,
        padding: "3px 9px",
        background: "transparent",
      }}
    >
      <Stack horizontal verticalAlign="center" tokens={{ childrenGap: 36 }}>
        <Stack
          id="nav-home-link"
          horizontal
          verticalAlign="center"
          tokens={{ childrenGap: 18 }}
        >
          <Link to="/">
            <Stack
              className="home-link"
              verticalAlign="center"
              horizontalAlign="center"
            >
              <svg
                height="25px"
                width="25px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 59.365 59.365"
              >
                <path
                  d="M58.363,26.632l-9.681-8.989V6.365h-8v3.849L29.682,0L1.002,26.632c-0.404,0.376-0.428,1.009-0.052,1.414
	c0.375,0.404,1.008,0.427,1.414,0.052l4.319-4.011v3.278v32h16V35.302c0-1.07,0.867-1.937,1.937-1.937h10.126
	c1.07,0,1.937,0.867,1.937,1.937v24.063h16v-32v-3.278l4.319,4.011c0.192,0.179,0.437,0.267,0.681,0.267
	c0.269,0,0.536-0.107,0.732-0.319C58.791,27.641,58.767,27.008,58.363,26.632z"
                />
              </svg>
            </Stack>
          </Link>
          <BigText text={title} />
        </Stack>
        <Stack horizontal verticalAlign="center" tokens={{ childrenGap: 18 }}>
          <NavLink href="/experience" text="work experience" />
          <NavLink href="/projects" text="projects" />
        </Stack>
      </Stack>
      <Contacts />
    </Stack>
  );
}

interface NavLinkProps {
  href: string;
  text: string;
}

export function NavLink({ href, text }: NavLinkProps) {
  const { pathname } = useLocation();
  const isActive = pathname === href;

  const width = 40;
  const height = 0.8 * width;

  return (
    <Link to={href} className={`nav-link${isActive ? " nav-link-active" : ""}`}>
      <Stack horizontal verticalAlign="center" tokens={{ childrenGap: 3 }}>
        <svg
          className="hexagon"
          style={{
            width,
            height,
          }}
          viewBox={`0 0 ${width} ${height}`}
          preserveAspectRatio="xMinYMin meet"
        >
          {renderHexagon(
            { x: 50, y: 50, dxSmall: 20 },
            0,
            false,
            isActive,
            width,
            height
          )}
        </svg>
        <Text className="link-text">{text}</Text>
      </Stack>
    </Link>
  );
}
