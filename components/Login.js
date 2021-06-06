import Image from "next/image";
import { signIn } from "next-auth/client";

function Login() {
  return (
    <div className="grid place-items-center">
      <Image
        src="https://links.papareact.com/t4i"
        width={300}
        height={300}
        objectFit="contain"
      />

      <h1
        onClick={signIn}
        className="p-5 bg-blue-500 rounded-full text-white cursor-pointer text-center hover:bg-white hover:text-black hover:border-2"
      >
        Login with Facebook
      </h1>
    </div>
  );
}

export default Login;
