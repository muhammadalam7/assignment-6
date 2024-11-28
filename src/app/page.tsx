import Navbar from "./components/Navbar";
import First from "./components/First";
import SecondNav from "./components/SecondNav";
import Third from "./components/Third";
import Forth from "./components/Forth";
import Fifth from "./components/Fifth";
import Sixth from "./components/Sixth";
import Seventh from "./components/Seventh";
import Eighth from "./components/Eighth";

export default function Home() {
  return (
    <>
    <div className="overflow-x">
    <Navbar />
    <First />
    <SecondNav />
    <Third />
    <Forth />
    <Fifth />
    <Sixth />
    <Seventh />
    <Eighth />
    </div>
    </>
  );
}