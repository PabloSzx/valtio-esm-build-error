import { proxy, useSnapshot } from "valtio";

export const data = proxy({
  n: 0,
});

export const useData = () => useSnapshot(data);

typeof window !== "undefined" &&
  setInterval(() => {
    ++data.n;
  }, 1000);
