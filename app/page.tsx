import { ClientCompoenent } from "./ClientCompoenent";
import packageJson from "../package.json"
import { getReactVersion } from "./react-version";

export default async function Home() {
  return <>
    <h1>Next: {packageJson.dependencies["next"]}</h1>
    <h2>React: {await getReactVersion()}</h2>
    <ClientCompoenent />
  </>
}
