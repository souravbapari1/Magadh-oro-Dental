import { headers } from "next/headers";

const Canonical = async () => {
  const header = await headers();
  return (
    <link
      rel="canonical"
      href={`https://magadhorodental.com${header.get("x-url")}`}
    />
  );
};

export default Canonical;
