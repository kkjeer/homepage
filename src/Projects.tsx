import { Stack, Text } from "@fluentui/react";
import { useParams } from "react-router-dom";
import { COLORS, STICKY_HEADER_HEIGHT } from "./constants";
import { StickyHeader } from "./StickyHeader";
import { Image } from "./Image";
import { Tag } from "./Homepage";

export function Projects() {
  let { projectId } = useParams();

  return (
    <>
      <StickyHeader title="Projects" />
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
          id="projects-container"
          horizontal
          wrap
          verticalAlign="start"
          horizontalAlign="start"
          tokens={{ childrenGap: 24 }}
          grow
        >
          {PROJECTS.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </Stack>
      </Stack>
    </>
  );
}

const PROJECTS: ProjectProps[] = [
  {
    title: "Infinite Groups",
    link: "infinite-groups",
    description:
      "Uses ideas from abstract algebra to test whether a given boolean function and a given integer function form an integer group or not. Models both function types as expression trees.",
    category: "Math",
    tags: ["Python"],
  },
  {
    title: "Math Structures",
    link: "math-structures",
    description:
      "Representations of finite groups and n-dimensional vector fields. Uses expression trees and Linq methods to implement partial derivatives and set operations.",
    category: "Math",
    tags: ["C#"],
  },
  {
    title: "Vector Visualizer",
    link: "vector-visualizer",
    description:
      "Qt application to graph vectors, vector-valued functions, and vector fields. Includes a parser for a subset of mathematical expressions. Implements operations such as cross product and curl.",
    category: "Math",
    tags: ["C++"],
  },
  {
    title: "Tutor-Complete",
    link: "tutor-complete",
    description:
      "Educational game and Intelligent Tutoring System for Languages and Automata. Uses graph similarity and Markov decision process to automatically generate hints for automata exercises.",
    category: "Education",
    tags: ["JavaScript", "Three.js"],
  },
  {
    title: "eLogicTutor",
    link: "elogictutor",
    description:
      "Educational game for propositional logic. Uses Bayesian Knowledge Tracing to model students' progress. Includes activities for learning logical rules and completing partially filled in proofs.",
    category: "Education",
    tags: ["JavaScript"],
  },
  {
    title: "SVG Modeling",
    link: "svg-modeling",
    description:
      "Tool to create poseable and static characters. Includes utilities for constructing SVG paths and filters. Implements extensible classes for character elements (face, arms, legs, etc.) that respond to rig objects.",
    category: "Animation",
    tags: ["TypeScript", "React"],
  },
  {
    title: "Dummy project 1",
    link: "dummy-project",
    description: "Debugging",
    category: "Debugging",
    tags: ["debugging"],
  },
  {
    title: "Dummy project 2",
    link: "dummy-project",
    description: "Debugging",
    category: "Debugging",
    tags: ["debugging"],
  },
  {
    title: "Dummy project 3",
    link: "dummy-project",
    description: "Debugging",
    category: "Debugging",
    tags: ["debugging"],
  },
  {
    title: "Dummy project 4",
    link: "dummy-project",
    description: "Debugging",
    category: "Debugging",
    tags: ["debugging"],
  },
  {
    title: "Dummy project 5",
    link: "dummy-project",
    description: "Debugging",
    category: "Debugging",
    tags: ["debugging"],
  },
];

interface ProjectProps {
  title: string;
  link: string;
  description: string;
  category: string;
  tags: string[];
}

function Project({ title, link, description, category, tags }: ProjectProps) {
  return (
    <a
      target="_blank"
      href={`https://github.com/kkjeer/${link}`}
      className="card"
    >
      <Stack horizontal style={{ width: 470, height: 220 }}>
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
          <Image
            src={link}
            style={{
              width: 140,
              height: 75,
              borderRadius: 3,
              border: "2px solid #e7e7e7aa",
            }}
          />
        </Stack>
        <Stack verticalAlign="space-between" style={{ padding: 9 }}>
          <Stack tokens={{ childrenGap: 18 }}>
            <Text style={{ fontSize: 18, fontWeight: 500, color: "#242424" }}>
              {title}
            </Text>
            <Text style={{ fontSize: 14, lineHeight: 1.4 }}>{description}</Text>
          </Stack>
          <Stack horizontal verticalAlign="center" tokens={{ childrenGap: 9 }}>
            <Stack
              styles={{
                root: {
                  background: COLORS.palette.navy + "33",
                  border: `1px solid ${COLORS.palette.navy}`,
                  borderRadius: 9,
                  padding: "6px 9px",
                },
              }}
            >
              <Text style={{ fontSize: 14, fontFamily: "Consolas" }}>
                {category}
              </Text>
            </Stack>
            {tags.map((tag) => (
              <Tag key={tag} text={tag} size="small" />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </a>
  );
}
