import { React } from "react";
import headshot from "../img/headshot.png";

export default function HomeAbout() {
  return (
    <div class="mx-80 align-left px-12 text-gray-300 py-6">
      <div className="pt-8">
        <h1 className="text-2xl font-bold">Experience</h1>
        <p className="mt-3 flex text-xl">
          <a href="www.tokentax.co" className="my-auto">
            TokenTax
          </a>
        </p>
        <p className="mt-3 flex my-auto">
          <a className="my-auto">@tom-champlin</a>
        </p>
      </div>
      <hr className="mt-5"></hr>
      <p className="mt-3 flex my-auto">
        <a className="my-auto">tomchamplin1@gmail.com</a>
      </p>
    </div>
  );
}
