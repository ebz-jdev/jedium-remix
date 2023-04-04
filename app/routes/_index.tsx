import type { V2_MetaFunction } from "@remix-run/node";
import Header from "libs/shared/header";

export const meta: V2_MetaFunction = () => [{ title: "Remix Notes" }];

export default function Index() {
  return (
    <>
      <Header />
    </>
  );
}
