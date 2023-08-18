import { ClientCompoenent } from "./ClientCompoenent";
import { getReactVersion } from "./react-version";
import { getNextVersion } from "./next-version";

export default async function Home() {
  return <>
    <h1>Next: { getNextVersion()}</h1>
    <h2>React: {await getReactVersion()}</h2>
    <ClientCompoenent />
  </>
}
