import { React } from "react";
import headshot from "../img/headshot.png";

export default function HomeAbout() {
  return (
    <div class="lg:mx-40 xl:mx-80 align-left px-12 text-zinc-400 pt-4 pb-12">
      <div className="p-5 border rounded-xl border-zinc-800">
        <h1 className="text-2xl font-bold text-zinc-200">Experience</h1>
        <hr class="h-px my-1 bg-zinc-700 border-0" />
        <p className="mt-3 text-xl">
          <p className="text-zinc-200">Software Engineer</p>
          <div className="flex text-base">
            <a target="_blank" href="https://tokentax.co/" className="my-auto">
              TokenTax
            </a>
            <p>&nbsp;| Jul 2022 - Present</p>
          </div>
        </p>
        <p className="mt-3 text-xl">
          <p className="text-zinc-200">Account Executive</p>
          <div className="flex text-base">
            <a target="_blank" href="https://momence.com/" className="my-auto">
              Momence
            </a>
            <p>&nbsp;| Nov 2021 - Mar 2022</p>
          </div>
        </p>
        <p className="mt-3 text-xl">
          <p className="text-zinc-200">
            Sr. Business Development Representative
          </p>
          <div className="flex text-base">
            <a
              target="_blank"
              href="https://www.infor.com/"
              className="my-auto"
            >
              Infor
            </a>
            <p>&nbsp;| Jun 2019 - Nov 2021</p>
          </div>
        </p>
      </div>
    </div>
  );
}
