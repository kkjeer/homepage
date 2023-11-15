import React from "react";
import { Stack, Text } from "@fluentui/react";
import { COLORS } from "./constants";

interface DividerProps {
  text: string;
}

export function Divider({ text }: DividerProps) {
  return (
    <Stack
      horizontal
      verticalAlign="center"
      gap={12}
      style={{ padding: "0px 24px" }}
    >
      <Text variant="large" style={{ textAlign: "center" }}>
        {text}
      </Text>
      <Stack
        style={{
          flex: 1,
          height: 1,
          background: COLORS.primary.dark,
          borderRadius: "999pc",
        }}
      />
    </Stack>
  );
}
