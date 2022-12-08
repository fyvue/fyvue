import { SSRRender } from "@fy-/core";
import { createApp } from "./main";

export async function render(url: string) {
  return await SSRRender(createApp, url);
}
