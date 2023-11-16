import { Stack, Text } from "@fluentui/react";
import { useParams } from "react-router-dom";
import { StickyHeader } from "./StickyHeader";
import { COLORS, STICKY_HEADER_HEIGHT } from "./constants";
import { Image } from "./Image";
import { Tag } from "./Homepage";

export function Experience() {
  let { projectId } = useParams();

  return (
    <>
      <StickyHeader title="Experience" />
      <Stack
        horizontalAlign="center"
        style={{
          width: "100vw",
          height: "100vh",
          background: COLORS.background.light,
          padding: 20,
          paddingTop: STICKY_HEADER_HEIGHT + 20,
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        <Stack
          id="experience-container"
          horizontal
          wrap
          verticalAlign="start"
          horizontalAlign="start"
          tokens={{ childrenGap: 24 }}
          grow
        >
          {ROLES.map((role) => (
            <Role key={role.title} {...role} />
          ))}
        </Stack>
      </Stack>
    </>
  );
}

const ROLES: RoleProps[] = [
  {
    title: "Senior Software Engineer",
    company: "Higharc",
    link: "https://higharc.com",
    start: "2022",
    end: "2023",
    description:
      "Created a new file browser page to enable customers to manage their own home plan documents. Led the development of an internal component library to increase scalability and testability of React components.",
    tags: ["TypeScript", "React"],
  },
  {
    title: "Software Engineer",
    company: "MathWorks",
    link: "https://mathworks.com",
    start: "2021",
    end: "2022",
    description:
      "Wrote a peephole optimization for function calls to compute matrix dimensions. Modified the C-style cast handler API to avoid a new type-checking error in gcc.",
    tags: ["C++"],
  },
  {
    title: "Software Engineer 2",
    company: "Microsoft (Checked C)",
    link: "https://www.checkedc.org/",
    start: "2019",
    end: "2021",
    description:
      "Modified the core bounds checker to track sets of equivalent expressions, reducing the amount of false positive warnings. Mentored a Ph.D. research intern in a project to detect free variables in bounds expressions. Co-presented a talk on Checked C at the 2020 LLVM Developers' Meeting.",
    tags: ["C++", "Clang/LLVM"],
  },
  {
    title: "Software Engineer",
    company: "Microsoft (Fabric Bot)",
    link: "https://portal.fabricbot.ms/",
    start: "2018",
    end: "2019",
    description:
      "Led the implementation of a feature allowing users to customize GitHub labels in imported tasks. Wrote two fundamental bot capabilities to respond to GitHub events and run tasks on a schedule. Implemented a system using Azure queues and Redis caches to handle GitHub requests at a large scale, enabling the number of onboarded repositories to grow from 7 to 98.",
    tags: ["TypeScript", "React", "Azure", "Redis", "GraphQL"],
  },
  {
    title: "Software Engineer",
    company: "Microsoft (Fluent UI)",
    link: "https://github.com/microsoft/fluentui",
    start: "2018",
    end: "2019",
    description:
      "Drove the implementation of the Stack component (abstract CSS flexbox). Mentored three Explorer (early university) interns in their project to build a Chrome Extension allowing users to build and track custom GitHub queries.",
    tags: ["TypeScript", "React"],
  },
];

interface RoleProps {
  title: string;
  company: string;
  link: string;
  start: string;
  end: string;
  description: string;
  tags: string[];
}

function Role({
  title,
  company,
  link,
  start,
  end,
  description,
  tags,
}: RoleProps) {
  return (
    <a target="_blank" href={link} className="card">
      <Stack horizontal style={{ width: 470, height: 260 }}>
        <Stack
          style={{
            padding: 9,
            paddingLeft: 6,
            paddingRight: 24,
            background: "#d0d0d0aa",
            borderTopLeftRadius: 9,
            borderBottomLeftRadius: 9,
          }}
        >
          <Stack horizontal verticalAlign="center" tokens={{ childrenGap: 3 }}>
            <Text>{start}</Text>
            <div
              style={{
                height: 1,
                width: 9,
                background: "black",
                borderRadius: "999pc",
              }}
            />
            <Text>{end}</Text>
          </Stack>
        </Stack>
        <Stack verticalAlign="space-between" style={{ padding: 9 }}>
          <Stack tokens={{ childrenGap: 18 }}>
            <Stack tokens={{ childrenGap: 9 }}>
              <Text style={{ fontSize: 18, fontWeight: 500, color: "#242424" }}>
                {company}
              </Text>
              <Text style={{ fontSize: 16, fontWeight: 500, color: "#242424" }}>
                {title}
              </Text>
            </Stack>

            <Text style={{ fontSize: 14, lineHeight: 1.4 }}>{description}</Text>
          </Stack>
          <Stack horizontal verticalAlign="center" tokens={{ childrenGap: 9 }}>
            {tags.map((tag) => (
              <Tag key={tag} text={tag} size="small" />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </a>
  );
}
