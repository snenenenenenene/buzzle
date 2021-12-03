import { useEffect } from "react";
import { useRouter } from "next/router";
import HomeBottomBar from "./bottomBar/HomeBottomBar";
import SettingsBottomBar from "./bottomBar/SettingsBottomBar";

export default function BottomBar() {
  const { asPath } = useRouter();
  const settings = asPath === "/account";
  return <div>{settings ? <SettingsBottomBar /> : <HomeBottomBar />}</div>;
}
