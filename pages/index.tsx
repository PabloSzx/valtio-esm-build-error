import { useData } from "../data";
export default function Page() {
  const { n } = useData();
  return <p>Hello World! {n}</p>;
}
