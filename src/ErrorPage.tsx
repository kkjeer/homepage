import { Stack, Text } from "@fluentui/react";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <Stack
      id="error-page"
      verticalAlign="center"
      horizontalAlign="center"
      tokens={{ childrenGap: 28 }}
      style={{ width: "100vw", height: "100vh" }}
    >
      <Text style={{ fontSize: 52, fontWeight: 500, fontFamily: "Consolas" }}>
        Oops!
      </Text>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/" style={{ fontSize: 24 }}>
        Home
      </Link>
    </Stack>
  );
}
