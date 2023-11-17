export const COLORS = {
  primary: {
    dark: "#004473",
    medium: "#0467ac",
    light: "#5F9aae",
  },
  background: {
    dark: "#d8d8d8",
    mediumLightX1: "#e3e3e3",
    medium: "#e7e7e7",
    light: "#f0f0f0",
  },
  palette: {
    turquoise: "#16c6cc",
    navy: "#003058",
    mediumGray: "#545454",
    darkGray: "#242424"
  }
};

export const STICKY_HEADER_HEIGHT = 60;

export interface IProject {
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  link: string;
}

export const PROJECT_WIDTH = 225;
export const PROJECT_HEIGHT = 300;

export const PROJECTS: IProject[] = [
  {
    title: "Infinite Groups",
    subtitle:
      "Uses ideas from abstract algebra to test whether a given boolean function and a given integer function form an integer group or not. Models both function types as expression trees.",
    category: "Math",
    tags: ["Python"],
    link: "https://github.com/kkjeer/infinite-groups",
  },
  {
    title: "Math Structures",
    subtitle:
      "Representations of finite groups and n-dimensional vector fields. Uses expression trees and Linq methods to implement partial derivatives and set operations.",
    category: "Math",
    tags: ["C#"],
    link: "https://github.com/kkjeer/math-structures",
  },
  {
    title: "Vector Visualizer",
    subtitle:
      "Qt application to graph vectors, vector-valued functions, and vector fields. Includes a parser for a subset of mathematical expressions. Implements operations such as cross product and curl.",
    category: "Math",
    tags: ["C++"],
    link: "https://github.com/kkjeer/vector-visualizer",
  },
  {
    title: "Tutor-Complete",
    subtitle:
      "Educational game and Intelligent Tutoring System for Languages and Automata. Uses graph similarity and Markov decision process to automatically generate hints for automata exercises.",
    category: "Education",
    tags: ["JavaScript", "Three.js"],
    link: "https://github.com/kkjeer/tutor-complete",
  },
  {
    title: "eLogicTutor",
    subtitle:
      "Educational game for propositional logic. Uses Bayesian Knowledge Tracing to model students' progress. Includes activities for learning logical rules and completing partially filled in proofs.",
    category: "Education",
    tags: ["JavaScript"],
    link: "https://github.com/kkjeer/elogictutor",
  },
  {
    title: "SVG Modeling",
    subtitle:
      "Tool to create poseable and static characters. Includes utilities for constructing SVG paths and filters. Implements extensible classes for character elements (face, arms, legs, etc.) that respond to rig objects.",
    category: "SVG",
    tags: ["TypeScript"],
    link: "https://github.com/kkjeer/svg-modeling",
  },
];
