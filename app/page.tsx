import { ClientCompoenent } from "./ClientCompoenent";
import { dependencies } from "../package.json"

export default function Home() {
  return <>
    <h1>Next: {dependencies["next"]}</h1>
    <ClientCompoenent />
  </>
}
