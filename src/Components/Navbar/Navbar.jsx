"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  //console.log("pathname = ", pathname);

  // useEffect(() => {
  //   console.log("mounting");
  // });

  return (
    <header className="bg-slate-100 flex justify-center items-center shadow-md px-7 mb-5">
      <Link
        href="/"
        className={`py-3 px-5 hover:bg-gray-300 cursor-pointer border-x ${
          pathname === "/" && "bg-green-400"
        }`}
      >
        Home
      </Link>

      <Link
        href="/modal1"
        className={`py-3 px-5 hover:bg-gray-300 cursor-pointer border-x ${
          pathname === "/modal1" && "bg-green-400"
        }`}
      >
        Modal 1
      </Link>

      <Link
        href="/modal2"
        className={`py-3 px-5 hover:bg-gray-300 cursor-pointer border-x ${
          pathname === "/modal2" && "bg-green-400"
        }`}
      >
        Modal 2
      </Link>

      <Link
        href="/accordian"
        className={`py-3 px-5 hover:bg-gray-300 cursor-pointer border-x ${
          pathname === "/accordian" && "bg-green-400"
        }`}
      >
        Accordian
      </Link>
    </header>
  );
}

export default Navbar;
