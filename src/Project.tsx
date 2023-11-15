import React from "react";
import { Link, Stack, Text } from "@fluentui/react";
import { COLORS, IProject, PROJECT_HEIGHT, PROJECT_WIDTH } from "./constants";

interface ProjectProps {
  project: IProject;
}

export function Project({ project }: ProjectProps) {
  return (
    <Stack
      id={`project-${project.title}`}
      gap={24}
      verticalAlign="space-between"
      style={{
        background: COLORS.background.medium,
        height: PROJECT_HEIGHT,
        width: PROJECT_WIDTH,
        borderRadius: 10,
        overflow: "hidden",
      }}
    >
      <Stack
        horizontalAlign="center"
        style={{
          padding: "6px 0px",
          background: COLORS.background.dark,
          borderBottom: `1px solid ${COLORS.primary.medium}`,
        }}
      >
        <Text variant="mediumPlus">{project.title}</Text>
      </Stack>
      <Stack verticalAlign="start" grow style={{ padding: "0px 12px" }}>
        <Text style={{ lineHeight: "150%" }}>{project.subtitle}</Text>
      </Stack>
      <Stack gap={6}>
        <Link
          href={project.link}
          target="blank"
          style={{ marginLeft: 6, fontSize: 12 }}
        >
          View on GitHub
        </Link>
        <Stack
          id={`project-${project.title}-tags`}
          horizontal
          horizontalAlign="start"
          gap={8}
          style={{
            padding: "6px 6px",
            background: COLORS.background.mediumLightX1,
          }}
        >
          <Stack
            key={`project-${project.title}-category`}
            style={{
              border: `1px solid ${COLORS.primary.medium}`,
              padding: "2px 8px",
              borderRadius: 4,
            }}
          >
            <Text variant="small">{project.category}</Text>
          </Stack>
          {project.tags.map((tag) => (
            <Stack
              key={`project-${project.title}-tag-${tag}`}
              style={{
                border: `1px solid ${COLORS.primary.light}`,
                padding: "2px 8px",
                borderRadius: 20,
              }}
            >
              <Text variant="small">{tag}</Text>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
