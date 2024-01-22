import { MoveRight } from "lucide-react";
import { React } from "react";

export default function Projects() {
  return (
    <div class="mx-5 lg:mx-80 lg:px-12 align-left text-zinc-200 pt-4 pb-12">
      <div className="p-5 border rounded-xl border-zinc-600">
        <h1 className="text-2xl font-bold text-zinc-200">Projects</h1>
        <hr class="h-px mt-1 mb-5 bg-zinc-700 border-0" />
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-2.5">
          <div className="border border-zinc-700 rounded-xl my-auto p-5 h-full flex flex-col justify-between">
            <div>
              <p className="text-zinc-200 text-xl font-semibold">SiteCheer</p>
              <hr class="h-px mt-1 mb-1 bg-zinc-700 border-0" />
              <p className="text-zinc-200 text-sm">
                SiteCheer is a web dev agency built on a low
                monthly-subscription model.
              </p>
            </div>
            <div>
              <button>
                <a href="https://sitecheer.com">
                  <MoveRight />
                </a>
              </button>
            </div>
          </div>
          <div className="border border-zinc-700 rounded-xl my-auto p-5 h-full flex flex-col justify-between">
            <div className="mb-5">
              <p className="text-zinc-200 text-xl font-semibold">Nowadayz</p>
              <hr class="h-px mt-1 mb-1 bg-zinc-700 border-0" />
              <p className="text-zinc-200 text-sm">
                Social media for people who hate social media. Check in on your
                friends and see what they are working on, where they are, what
                they have been thinking about, and more.
              </p>
            </div>
            <div>
              <button>
                <a href="https://nowadayz.vercel.app/">
                  <MoveRight />
                </a>
              </button>
            </div>
          </div>
          <div className="border border-zinc-700 rounded-xl my-auto p-5 h-full flex flex-col justify-between">
            <div>
              <p className="text-zinc-200 text-xl font-semibold">
                Clean & Honest
              </p>
              <hr class="h-px mt-1 mb-1 bg-zinc-700 border-0" />
              <p className="text-zinc-200 text-sm">
                A blog geared towards clean, non-toxic, and sustainable living.
              </p>
            </div>
            <div>
              <button>
                <a href="https://www.cleanandhonest.com/">
                  <MoveRight />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
