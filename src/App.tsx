import React from "react";
import { Stack, Text } from "@fluentui/react";
import { Header } from "./Header";
import { Divider } from "./Divider";
import { COLORS, PROJECTS } from "./constants";
import { Project } from "./Project";

export function App() {
  return (
    <Stack
      gap={24}
      style={{
        width: "100vw",
        height: "100vh",
        background: COLORS.background.light,
      }}
    >
      <Header />
      <Stack horizontalAlign="center">
        <Stack
          styles={{
            root: {
              maxWidth: "50vw",
              selectors: {
                "> span": { maxWidth: 800, fontSize: 14, lineHeight: "140%" },
              },
            },
          }}
          gap={12}
        >
          <Text>
            <span style={{ fontWeight: 500 }}>Background:</span> Senior Software
            Engineer with experience in web development (TypeScript), compiler
            development (C++), and mentoring junior computer science
            professionals.
          </Text>
          <Text>
            <span style={{ fontWeight: 500 }}>Strengths:</span> Building new
            applications, contributing to developer-facing tools such as
            component libraries, and analyzing problems using abstract math and
            logic.
          </Text>
          <Text>
            <span style={{ fontWeight: 500 }}>Technical Skills:</span>{" "}
            TypeScript, React, C++, Clang, LLVM
          </Text>
          <Text>
            <span style={{ fontWeight: 500 }}>Direction:</span> Motivated by
            software engineer roles in educational technology or developer
            productivity.
          </Text>
        </Stack>
      </Stack>

      <Divider text="Projects" />
      <Stack
        horizontal
        wrap
        gap={24}
        style={{ overflow: "hidden auto", padding: "0px 36px" }}
      >
        {PROJECTS.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </Stack>
    </Stack>
  );
}
