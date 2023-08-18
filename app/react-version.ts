import { readFile } from "fs/promises";

// read from dist/compiled/react/cjs/react.development.js
// parse `var ReactVersion = '18.3.0-canary-1cea38448-20230530';`
export const getReactVersion = async () => {
    const code = await readFile("node_modules/next/dist/compiled/react/cjs/react.development.js", "utf-8");
    const match = code.match(/var ReactVersion = '(.*)';/);
    if (!match) {
        return "unknown";
    }
    return match[1];
}