import { openai } from "@ai-sdk/openai";
import { Agent } from "@mastra/core/agent";
import { Memory } from '@mastra/memory';
import { LibSQLStore } from '@mastra/libsql';
import { MCPClient } from "@mastra/mcp";


// 配置 MCP 客户端来读取文件系统
// const mcp = new MCPClient({
//   servers: {
//     filesystem: {
//       command: "npx",
//       args: [
//         "-y", 
//         "@modelcontextprotocol/server-filesystem",
//       ],
//     },
//     github: {
//       command: "npx",
//       args: ["-y", "@modelcontextprotocol/server-github"],
//       env: {
//         // GITHUB_PERSONAL_ACCESS_TOKEN: process.env.GITHUB_PERSONAL_ACCESS_TOKEN
//       }
//     },
//   },
// });
 
export const CodeReviewAgent = new Agent({
  name: 'CodeReviewAgent',
  instructions: `
      你是一个专业的代码审查助手，可以分析本地和 GitHub 上的代码。

你的能力包括：

📁 **本地文件操作**：
- 读取本地代码文件
- 分析项目目录结构

🐙 **GitHub 仓库操作**：  
- 获取 GitHub 仓库信息
- 读取仓库文件内容
- 查看提交历史和差异
- 分析 Issues 和 Pull Requests
- 检查仓库统计信息

**审查流程**：
1. 确认要审查的代码来源（本地文件 vs GitHub 仓库）
2. 使用相应工具获取代码内容
3. 进行全面的代码质量分析
4. 提供结构化的审查报告和改进建议

**GitHub 使用示例**：
- "请审查 facebook/react 仓库的 src/index.js 文件"
- "分析 microsoft/vscode 项目的整体架构"
- "检查仓库的最新提交和代码变更"

保持专业和建设性的语调，并提供具体可行的改进建议。
`,
  model: openai('gpt-4o-mini'),
  // tools: async () => {
  //   return await mcp.getTools();
  // },
});