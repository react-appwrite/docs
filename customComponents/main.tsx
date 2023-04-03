import { Check } from "lucide-react";
import Image from "next/image";
import VercelLogo from "public/images/vercel.svg";

export default function DisplayComponents() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col items-center w-full">
        <h1 className="flex flex-col items-center mb-4 text-4xl font-black 2xl:px-30 text-slate-900 dark:text-white md:text-6xl lg:mb-8 lg:text-center lg:leading-tight">
          <Image
            src="/static/logo.png"
            alt="React Appwrite Logo"
            width={100}
            height={100}
          />
          React Appwrite
        </h1>
        <p className="font-bold text-slate-600 dark:text-slate-100 lg:text-center lg:text-lg">
          Gorgeous library for integrating React with Appwrite.
        </p>
      </div>
      <div className="flex flex-row items-center justify-center w-full gap-2">
        <a href="https://www.npmjs.com/package/react-appwrite">
          <img
            alt="Latest npm version"
            src="https://img.shields.io/npm/v/react-appwrite?color=blue"
          />
        </a>
        <a href="https://github.com/sanny-io/react-appwrite/blob/main/LICENSE">
          <img
            alt="MIT license"
            src="https://img.shields.io/github/license/sanny-io/react-appwrite?color=success"
          />
        </a>
        <a href="https://github.com/sanny-io/react-appwrite/issues">
          <img
            alt="GitHub issues"
            src="https://img.shields.io/github/issues/sanny-io/react-appwrite"
          />
        </a>
      </div>

      <a
        href="https://vercel.com?utm_source=react-appwrite&utm_campaign=oss"
        className="self-center"
      >
        <Image
          src={VercelLogo}
          className="mt-4"
          alt="Powered by Vercel"
        />
      </a>
    </div>
  );
}
