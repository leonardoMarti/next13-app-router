import { Suspense } from "react";

import { Github } from "@/components/github-profile";
import { LongWaitComponent } from "@/components/long-wait-components";

export default function Home() {
  return (
    <div>
      <h1>Home!</h1>

      <Suspense fallback={<p>Carregando LongWaitComponent...</p>}>
        <LongWaitComponent />
      </Suspense>

      <Suspense fallback={<p>Carregando GitHub...</p>}>
        <Github />
      </Suspense>
    </div>
  );
}
