import { readFileSync } from "fs";

export const getNextVersion =  () => {
    const code = readFileSync("node_modules/next/package.json", "utf-8");
    return JSON.parse(code).version;
}