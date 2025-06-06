import Link from "next/link";
import React from "react";

export default function Projects() {
  return (
    <div className="mx-5 lg:mx-80 lg:px-12 align-left text-zinc-200 pt-4 pb-12">
      <div className="p-5 border rounded-xl border-zinc-600">
        <h1 className="text-2xl font-bold text-zinc-200 text-left">Projects</h1>
        <hr className="h-px mt-1 mb-5 bg-zinc-700 border-0" />
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-2.5">
          <Link
            href="https://www.penpalai.xyz/"
            className="border border-zinc-700 rounded-xl my-auto p-5 h-full flex flex-col justify-between"
          >
            <div className="mb-5">
              <p className="text-zinc-200 text-xl font-semibold">PenpalAI</p>
              <hr className="h-px mt-1 mb-1 bg-zinc-700 border-0" />
              <p className="text-zinc-200 text-sm">
                Unlock your imagination with AI-powered writing prompts.
              </p>
            </div>
          </Link>
          <Link
            href="https://www.cleanandhonest.com/"
            className="border border-zinc-700 rounded-xl my-auto p-5 h-full flex flex-col justify-between"
          >
            <div>
              <p className="text-zinc-200 text-xl font-semibold">
                Clean & Honest
              </p>
              <hr className="h-px mt-1 mb-1 bg-zinc-700 border-0" />
              <p className="text-zinc-200 text-sm">
                A blog geared towards clean, non-toxic, and sustainable living.
              </p>
            </div>
          </Link>
          <Link
            href="https://sitecheer.com"
            className="border border-zinc-700 rounded-xl my-auto p-5 h-full flex flex-col justify-between"
          >
            <div>
              <p className="text-zinc-200 text-xl font-semibold">SiteCheer</p>
              <hr className="h-px mt-1 mb-1 bg-zinc-700 border-0" />
              <p className="text-zinc-200 text-sm">
                A web dev agency built on a low monthly-subscription model.
              </p>
            </div>
          </Link>
          <Link
            href="https://faithjobs.work"
            className="border border-zinc-700 rounded-xl my-auto p-5 h-full flex flex-col justify-between"
          >
            <div>
              <p className="text-zinc-200 text-xl font-semibold">
                Faithjobs.work
              </p>
              <hr className="h-px mt-1 mb-1 bg-zinc-700 border-0" />
              <p className="text-zinc-200 text-sm">
                A job board for faith-based organizations.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
