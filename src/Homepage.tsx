import { Stack, Text } from "@fluentui/react";
import { COLORS } from "./constants";
import { Image } from "./Image";
import { Link } from "react-router-dom";

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
          <Text style={{ fontSize: 28 }}>Hi, I'm</Text>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 18 }}>
          <Stack
            className="contact-link"
            verticalAlign="center"
            horizontalAlign="center"
          >
            <a
              href="mailto:katherine.kjeer@gmail.com?subject=Mail from kkjeer/homepage"
              target="_blank"
            >
              <svg
                fill="#666"
                height="20px"
                width="20px"
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 643 465"
              >
                <path d="M39 3.4C31.6 5.1 27.5 7 21.4 11.6 11.2 19.3 5 29.2 3 41.1c-.8 4.5-1 61.4-.8 195.9.3 185.8.3 189.6 2.3 195 4.5 12.6 15.8 24.2 28.2 29.1 5 1.9 8.2 2.3 23.1 2.7l17.2.4V292.6c0-94.4.3-171.6.6-171.6.4 0 56.5 39.8 124.6 88.5l124 88.6 123.6-88.3c67.9-48.6 123.9-88.5 124.4-88.6.4-.2.8 76.8.8 171.2V464h15.3c16.2 0 21.9-1 30.3-5.1 11.3-5.6 21.7-19.2 24.3-31.7.8-3.8 1.1-59.8 1.1-194.5 0-166.8-.2-190-1.5-195.2-4.7-17.7-19.3-31.2-37.6-34.6-5.4-1-7-.9-9.2.2-1.4.8-62.9 44.7-136.6 97.6-73.7 53-134.5 96.3-135 96.3-.6 0-60.8-42.8-133.8-95.2C115.2 49.4 54 5.6 52.1 4.3c-3.8-2.6-5.2-2.7-13.1-.9z"></path>
              </svg>
            </a>
          </Stack>
          <Stack
            className="contact-link"
            verticalAlign="center"
            horizontalAlign="center"
          >
            <a href="https://www.github.com/kkjeer/" target="_blank">
              <svg
                fill="#666"
                height="20px"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 120.78 117.79"
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path
                      // class="cls-1"
                      d="M60.39 0A60.39 60.39 0 0 0 41.3 117.69c3 .56 4.12-1.31 4.12-2.91 0-1.44-.05-6.19-.08-11.24C28.54 107.19 25 96.42 25 96.42c-2.75-7-6.71-8.84-6.71-8.84-5.48-3.75.41-3.67.41-3.67 6.07.43 9.26 6.22 9.26 6.22 5.39 9.23 14.13 6.57 17.57 5 .55-3.9 2.11-6.56 3.84-8.07C36 85.55 21.85 80.37 21.85 57.23A23.35 23.35 0 0 1 28.08 41c-.63-1.52-2.7-7.66.58-16 0 0 5.07-1.62 16.61 6.19a57.36 57.36 0 0 1 30.25 0C87 23.42 92.11 25 92.11 25c3.28 8.32 1.22 14.46.59 16a23.34 23.34 0 0 1 6.21 16.21c0 23.2-14.12 28.3-27.57 29.8 2.16 1.87 4.09 5.55 4.09 11.18 0 8.08-.06 14.59-.06 16.57 0 1.61 1.08 3.49 4.14 2.9A60.39 60.39 0 0 0 60.39 0Z"
                    ></path>
                    <path
                      // class="cls-2"
                      d="M22.87 86.7c-.13.3-.6.39-1 .19s-.69-.61-.55-.91.61-.39 1-.19.69.61.54.91ZM25.32 89.43c-.29.27-.85.14-1.24-.28a.92.92 0 0 1-.17-1.25c.3-.27.84-.14 1.24.28s.47 1 .17 1.25ZM27.7 92.91c-.37.26-1 0-1.35-.52s-.37-1.18 0-1.44 1 0 1.35.51.37 1.19 0 1.45ZM31 96.27a1.13 1.13 0 0 1-1.59-.27c-.53-.49-.68-1.18-.34-1.54s1-.27 1.56.23.68 1.18.33 1.54ZM35.46 98.22c-.15.47-.82.69-1.51.49s-1.13-.76-1-1.24.82-.7 1.51-.49 1.13.76 1 1.24ZM40.4 98.58c0 .5-.56.91-1.28.92s-1.3-.38-1.31-.88.56-.91 1.29-.92 1.3.39 1.3.88ZM45 97.8c.09.49-.41 1-1.12 1.12s-1.35-.17-1.44-.66.42-1 1.12-1.12 1.35.17 1.44.66Z"
                    ></path>
                  </g>
                </g>
              </svg>
            </a>
          </Stack>
          <Stack
            className="contact-link"
            verticalAlign="center"
            horizontalAlign="center"
          >
            <a href="https://www.linkedin.com/in/kkjeer/" target="_blank">
              <svg
                fill="#666"
                height="20px"
                width="20px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 310 310"
                // xml:space="preserve"
              >
                <g id="XMLID_801_">
                  <path
                    id="XMLID_802_"
                    d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
		C77.16,101.969,74.922,99.73,72.16,99.73z"
                  />
                  <path
                    id="XMLID_803_"
                    d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
		c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
                  />
                  <path
                    id="XMLID_804_"
                    d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
		c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
		c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
		C310,145.43,300.549,94.761,230.454,94.761z"
                  />
                </g>
              </svg>
            </a>
          </Stack>
        </Stack>
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