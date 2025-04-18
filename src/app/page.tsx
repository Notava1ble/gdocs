import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Link href={"/documents/123"}>
        <Button>Click me</Button>
      </Link>
    </div>
  );
};
export default Home;
