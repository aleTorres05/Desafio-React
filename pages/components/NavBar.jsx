import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [token, setToken] = useState("");
  useEffect(() => {
    const tkn = localStorage.getItem("token");
    setToken(tkn);
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex flex-row border-b-2 fixed h-[55px] w-[100%] p-2">
      <button
        className="flex flex-col justify-center mr-2 items-center md:hidden"
        onClick={handleClick}
      >
        <img
          className="h-[25px] w-[25px]"
          src="https://img.icons8.com/?size=100&id=36389&format=png&color=000000"
          alt=""
        />
      </button>
      <div className="flex flex-row grow justify-start ml-0">
        <img
          className="h-[40px] w-[45px] md:h-[45px] md:w-[50px] md:mr-2"
          src="https://media.dev.to/cdn-cgi/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
          alt="logo"
        />
        <input
          className="hidden md:block w-[85%] lg:w-[100%] h-[100%] border-2 rounded-md md:mt-1 p-3"
          type="text"
          placeholder="Search..."
        />
      </div>
      <div
        onClick={() => {
          router.push("/Login");
        }}
        className="flex flex-row md:flex-1 justify-end"
      >
        {!token && (
          <button className="hidden  md:block md:w-[35%] lg:w-[30%] xl:w-[20%] p-1 mr-1 hover:text-[#8892ff] hover:rounded hover:bg-[#3B49DF] hover:bg-opacity-15">
            <Link href="/login">Log in</Link>
          </button>
        )}

        <img
          className="h-[25px] w-[25px] mt-2 mr-2 md:hidden "
          src="https://img.icons8.com/?size=100&id=132&format=png&color=000000"
          alt="Search"
        />
        <button className="border-2 rounded-md  w-[100%] md:w-[52%] xl:w-[30%]  h-[100%] md:p-1 border-[#3B49DF] text-[#3B49DF]  hover:bg-[#3B49DF] hover:text-white">
          <Link href="/register">Create account</Link>
        </button>
      </div>
    </nav>
  );
}
