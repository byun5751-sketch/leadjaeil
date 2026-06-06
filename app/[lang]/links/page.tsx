import type { Metadata } from "next";
import type { Lang } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const title = lang === "ko" ? "소셜 미디어" : "Social Media";
  const description =
    lang === "ko"
      ? "리드제일의 소셜 미디어 채널 모음"
      : "Lead Jaeil's social media channels";
  return { title, description };
}

const links = [
  {
    name: "LinkedIn",
    nameEn: "LinkedIn",
    url: "https://www.linkedin.com/in/lifesightseeing/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "네이버 블로그",
    nameEn: "Naver Blog",
    url: "https://blog.naver.com/lifesightseeing",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />
      </svg>
    ),
  },
  {
    name: "스레드",
    nameEn: "Threads",
    url: "https://www.threads.com/@lifesightseeing",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.29 3.276-1.06 1.318-2.632 2.01-4.674 2.062h-.02c-1.6-.043-2.906-.595-3.886-1.643-.874-.935-1.356-2.133-1.397-3.466.078-2.851 1.956-4.598 4.862-4.73 1.037-.05 1.987.058 2.83.315-.14-.69-.42-1.236-.838-1.629-.56-.526-1.39-.805-2.4-.808h-.025c-.863.002-1.593.248-2.168.73l-1.345-1.55C8.456 4.507 9.674 4.1 11.038 4.095h.04c1.544.008 2.78.527 3.606 1.416.39.418.686.906.888 1.434.217-.022.44-.036.665-.042l.007.002c2.12.07 3.8.86 4.85 2.282.944 1.277 1.22 2.878.797 4.63-.548 2.264-1.82 3.94-3.672 4.843-1.478.721-3.267 1.14-5.29 1.243-.343.017-.684.026-1.02.03-.187.003-.376.003-.563.002h-.008c-.102 0-.207-.002-.312-.004l-.14-.003zm-.367-8.03c-1.815.084-2.732 1.003-2.775 2.527.024.765.286 1.394.788 1.878.565.545 1.39.834 2.372.863 1.39-.036 2.395-.467 3.07-1.306.522-.648.864-1.553.99-2.61-.856-.357-1.862-.565-2.987-.53l-.092.003c-.466.022-.914.076-1.365.175z" />
      </svg>
    ),
  },
  {
    name: "뉴스레터 (한국어)",
    nameEn: "Newsletter (Korean)",
    url: "https://maily.so/leadjaeil",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    name: "뉴스레터 (영어) Substack",
    nameEn: "Newsletter (English) Substack",
    url: "https://leadjaeil.substack.com/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
      </svg>
    ),
  },
  {
    name: "유튜브",
    nameEn: "YouTube",
    url: "https://www.youtube.com/@user-leadjaeil",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "Favikon Content",
    nameEn: "Favikon Content",
    url: "https://app.favikon.com/profile/65f5b2516a10e4b0787d4588/content/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

export default async function LinksPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isKo = lang === "ko";

  return (
    <div className="site-shell py-16 md:py-24">
      <div className="mx-auto max-w-md">
        <p className="text-center text-[11px] font-medium uppercase tracking-widest text-text-tertiary">
          {isKo ? "소셜 미디어" : "Social Media"}
        </p>
        <h1 className="mt-2 text-center font-serif text-3xl text-text">
          {isKo ? "리드제일의 소셜 미디어" : "Lead Jaeil's Social Media"}
        </h1>
        <p className="mt-3 text-center text-sm text-text-secondary">
          {isKo
            ? "아래 채널에서 리드제일을 만나보세요."
            : "Connect with Lead Jaeil on these channels."}
        </p>

        <div className="mt-10 flex flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-border bg-surface px-5 py-4 transition-all hover:border-accent-light hover:shadow-sm"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-bg text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                {link.icon}
              </span>
              <span className="text-sm font-medium text-text group-hover:text-accent">
                {isKo ? link.name : link.nameEn}
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-auto shrink-0 text-text-tertiary transition-transform group-hover:translate-x-0.5 group-hover:text-accent"
              >
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </a>
          ))}
        </div>

        <details className="mt-12 rounded-xl border border-border bg-surface-warm">
          <summary className="cursor-pointer select-none px-5 py-4 text-sm font-medium text-text-secondary transition-colors hover:text-text">
            {isKo
              ? "버튼이 안 눌릴 때 (링크 직접 복사)"
              : "If buttons don't work (copy links directly)"}
          </summary>
          <div className="border-t border-border px-5 py-4">
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.url}>
                  <p className="text-xs font-medium text-text">
                    {isKo ? link.name : link.nameEn}
                  </p>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0.5 block break-all text-xs text-accent underline"
                  >
                    {link.url}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </details>
      </div>
    </div>
  );
}
