import React from "react";
import { Container } from "./styled/Container";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}
