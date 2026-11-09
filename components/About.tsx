import {
  SiAnthropic,
  SiBootstrap,
  SiCloudflare,
  SiCplusplus,
  SiCss,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGithub,
  SiGoogleanalytics,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiLaravel,
  SiMapbox,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPwa,
  SiReact,
  SiReactquery,
  SiRedis,
  SiSass,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";

import Image from "next/image";
import { IconType } from "react-icons";
import { FiCode } from "react-icons/fi";

const stackIcons: { name: string; icon: IconType }[] = [
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React Native", icon: SiReact },
  { name: "Flutter", icon: SiFlutter },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "PHP", icon: FiCode },
  { name: "Laravel", icon: SiLaravel },
  { name: "MySQL", icon: SiMysql },
  { name: "Firebase", icon: SiFirebase },
  { name: "Vite", icon: SiVite },
  { name: "React Query", icon: SiReactquery },
  { name: "PWA", icon: SiPwa },
  { name: "Sass", icon: SiSass },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "GitHub", icon: SiGithub },
  { name: "Docker", icon: SiDocker },
  { name: "Redis", icon: SiRedis },
  { name: "Socket.IO", icon: SiSocketdotio },
  { name: "Mapbox", icon: SiMapbox },
  { name: "Vercel", icon: SiVercel },
  { name: "Netlify", icon: SiNetlify },
  { name: "Postman", icon: SiPostman },
  { name: "Cloudflare", icon: SiCloudflare },
  { name: "Google Analytics", icon: SiGoogleanalytics },
  { name: "JWT", icon: SiJsonwebtokens },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS", icon: SiCss },
  { name: "C++", icon: SiCplusplus },
  { name: "Figma", icon: SiFigma },
  { name: "AI Agents", icon: SiAnthropic },
  { name: "OpenAI", icon: FiCode },
];
export default function About() {
  return (
    <>
      <section
        id="about"
        className="grid gap-8 border-t border-white/15 py-20 sm:grid-cols-2"
      >
        <div>
          <Image
            src="/abraham-isaiah.jpg"
            alt="Portrait of Abraham Isaiah"
            width={640}
            height={640}
            className="h-72 rounded-lg object-cover"
          />
        </div>
        <div>
          <p className="text-sm opacity-55">About</p>
          <p className="mt-4 text-xl leading-8 opacity-80">
            I build full-stack web and mobile products from idea to release,
            combining strong engineering fundamentals with a product-minded
            approach. I thrive in Agile teams, learn quickly, and use
            AI-assisted engineering to ship high-quality software faster.
          </p>
        </div>
      </section>

      <section className="overflow-hidden border-t border-white/15 py-8" aria-label="Tools and technologies">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
              {stackIcons.map(({ name, icon: Icon }, index) => (
                <span key={`${copy}-${index}`} className="mx-6 inline-flex items-center gap-2 whitespace-nowrap text-sm opacity-70">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                  {name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
