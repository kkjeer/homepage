import { Stack, Text } from "@fluentui/react";
import { useParams } from "react-router-dom";
import { COLORS } from "./constants";
import { BigText } from "./Homepage";

export function Projects() {
  let { projectId } = useParams();

  return (
    <Stack
      style={{
        width: "100vw",
        height: "100vh",
        background: COLORS.background.light,
      }}
    >
      <BigText text="Projects" />
    </Stack>
  );
}
