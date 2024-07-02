import NavBar from "./components/NavBar";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <>
      <Toaster />
      <main className="">
        <NavBar />
      </main>
    </>
  );
}
