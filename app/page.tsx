import { Slot } from "@plinth-pages/core";
// plinth:imports:start
import { GitHubStats } from "@plinth-pages/github-stats";
import { LeetCodeStats } from "@plinth-pages/leetcode-stats";
import { VisitorCounter } from "@plinth-pages/visitor-counter";
// plinth:imports:end
import { About } from "@/components/sections/About";
import { Education, Experience } from "@/components/sections/Career";
import { Contact, SocialLinks } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Stats } from "@/components/sections/Stats";
import { profile } from "@/content/profile";

// Everything here is yours to restyle and rearrange. The <Slot> elements are where installed
// integrations appear: keep each one, exactly once, and let Plinth manage what goes inside it.

export default function Page() {
  return (
    <main className="pb-16">
      <Hero />
      <Slot name="heroAfter"></Slot>

      <About />
      <Stats />
      <Skills />

      <Slot name="beforeProjects"></Slot>
      <Projects />
      <Slot name="afterProjects">
        {/* plinth:github-stats:start */}
        <GitHubStats showTopRepos={true} username={"sumitverma77"} />
        {/* plinth:github-stats:end */}
        {/* plinth:leetcode-stats:start */}
        <LeetCodeStats username={"sumit_verma_77"} />
        {/* plinth:leetcode-stats:end */}
      </Slot>

      <Experience />
      <Education />
      <Slot name="sidebar"></Slot>

      <SocialLinks />
      <Slot name="beforeContact"></Slot>
      <Contact />
      <Slot name="contact"></Slot>

      <footer className="mx-auto mt-12 flex w-full max-w-3xl flex-col gap-4 border-t border-line px-6 pt-8 text-sm text-muted">
        <Slot name="footer">
          {/* plinth:visitor-counter:start */}
          <VisitorCounter
            endpoint={"https://api.plinthpages.me"}
            label={"visitors"}
            siteId={"cmu5lh4a6000mmk0x59ww0qq8"}
          />
          {/* plinth:visitor-counter:end */}
        </Slot>
        <p>
          © {new Date().getFullYear()} {profile.name}
          {profile.location ? ` · ${profile.location}` : ""}
        </p>
      </footer>
    </main>
  );
}
