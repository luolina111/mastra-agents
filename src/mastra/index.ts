// 入口文件最顶部，第一行就加
globalThis.___MASTRA_TELEMETRY___ = true;

import { Mastra } from "@mastra/core/mastra";
import { CodeReviewAgent } from "./agents/codeReview-agent";
import { CloudflareDeployer } from "@mastra/deployer-cloudflare";

export const mastra = new Mastra({
  agents: { CodeReviewAgent },
  deployer: new CloudflareDeployer({
    scope: process.env.SCOPE,
    projectName: "mastra-cr-agent-server",
  }),
});

