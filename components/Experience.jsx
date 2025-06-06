import { React } from "react";
import ttlogo from "@/img/tt-logo.png";
import momence from "@/img/momence-logo.png";
import infor from "@/img/infor-logo.png";
import epicor from "@/img/epicor-logo.png";
import Image from "next/image";

export default function HomeAbout() {
  return (
    <div className="mx-5 lg:mx-80 lg:px-12 align-left text-zinc-200 pt-4 pb-12 text-left">
      <div className="p-5 border rounded-xl border-zinc-600">
        <h1 className="text-2xl font-bold text-zinc-200">Experience</h1>
        <hr className="h-px my-1 bg-zinc-700 border-0" />
        <div className="flex mt-3">
          <Image
            className="w-8 h-8 z-50 rounded-full my-auto mr-2"
            src={epicor}
            alt="Epicor Logo"
          />
          <div className="text-xl">
            <p className="text-zinc-200">Solutions Developer</p>
            <div className="flex text-base">
              <a
                target="_blank"
                href="https://www.epicor.com/"
                className="my-auto"
                rel="noreferrer"
              >
                Epicor
              </a>
              <p>&nbsp;| 2023 - Present</p>
            </div>
          </div>
        </div>
        <div className="flex mt-3">
          <Image
            className="w-8 h-8 z-50 rounded-full my-auto mr-2"
            src={ttlogo}
            alt="TokenTax Logo"
          />
          <div className="text-xl">
            <p className="text-zinc-200">Software Engineer</p>
            <div className="flex text-base">
              <a
                target="_blank"
                href="https://tokentax.co/"
                className="my-auto"
                rel="noreferrer"
              >
                TokenTax
              </a>
              <p>&nbsp;| 2022 - 2023</p>
            </div>
          </div>
        </div>
        <div className="flex mt-3">
          <Image
            className="w-8 h-8 z-50 rounded-full my-auto mr-2"
            src={momence}
            alt="Momence Logo"
          />
          <div className="text-xl">
            <p className="text-zinc-200">Account Executive</p>
            <div className="flex text-base">
              <a
                target="_blank"
                href="https://momence.com/"
                className="my-auto"
                rel="noreferrer"
              >
                Momence
              </a>
              <p>&nbsp;| 2021 - 2022</p>
            </div>
          </div>
        </div>
        <div className="flex mt-3">
          <Image
            className="w-8 h-8 z-50 rounded-full my-auto mr-2"
            src={infor}
            alt="Infor Logo"
          />
          <div className="text-xl">
            <p className="text-zinc-200">
              Business Development Representative, Sr.
            </p>
            <div className="flex text-base">
              <a
                target="_blank"
                href="https://www.infor.com/"
                className="my-auto"
                rel="noreferrer"
              >
                Infor
              </a>
              <p>&nbsp;| 2019 - 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
