import type { Metadata } from "next";
import { Mail, MessageCircle } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";
import { alternatesFor, SITE_URL, WEB3FORMS_ACCESS_KEY } from "@/lib/site";

const KAKAO_URL = "https://open.kakao.com/o/sypM9TBh";
const EMAIL_URL = "mailto:leadjaeil@gmail.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isKo = lang === "ko";
  return {
    title: isKo ? "문의하기" : "Inquiries",
    description: isKo
      ? "강연, 협업, 인터뷰, 워크숍 문의를 남겨주세요."
      : "Speaking, collaboration, interview, and workshop inquiries.",
    alternates: alternatesFor(lang, "/contact"),
  };
}

const field =
  "mt-2 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-text placeholder:text-text-tertiary focus:border-accent focus:outline-none";
const labelText = "text-sm font-medium text-text";
const hintText = "mt-1 text-xs text-text-tertiary";

function Label({
  children,
  hint,
  optional,
}: {
  children: React.ReactNode;
  hint?: string;
  optional?: string;
}) {
  return (
    <>
      <span className={labelText}>
        {children}
        {optional && (
          <span className="ml-1.5 text-xs font-normal text-text-tertiary">
            ({optional})
          </span>
        )}
      </span>
      {hint && <span className={hintText}>{hint}</span>}
    </>
  );
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isKo = lang === "ko";
  const t = getTranslations(lang as Lang).contactPage;

  const labels = {
    email: isKo ? "이메일 보내기" : "Send an email",
    kakao: isKo ? "카카오톡" : "KakaoTalk",
  };

  return (
    <div className="site-shell py-16 md:py-24">
      <p className="text-[11px] font-medium uppercase tracking-widest text-text-tertiary">
        {t.eyebrow}
      </p>
      <h1 className="mt-2 font-serif text-4xl text-text">{t.title}</h1>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-text-secondary">{t.desc}</p>

      {WEB3FORMS_ACCESS_KEY ? (
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="mt-10 max-w-2xl rounded-2xl border border-border bg-surface p-6 md:p-8"
        >
          <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
          <input
            type="hidden"
            name="subject"
            value={
              isKo
                ? "[leadjaeil.com] 새 문의가 도착했습니다"
                : "[leadjaeil.com] New inquiry"
            }
          />
          <input
            type="hidden"
            name="redirect"
            value={`${SITE_URL}/${lang}/contact/sent`}
          />
          {/* Honeypot: real people never tick a field they cannot see. */}
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          <fieldset>
            <legend className={labelText}>{t.typeLabel}</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {t.types.map((type, i) => (
                <label
                  key={type}
                  className="cursor-pointer rounded-full border border-border bg-bg px-4 py-2 text-sm text-text-secondary transition-colors has-[:checked]:border-accent has-[:checked]:bg-accent-bg has-[:checked]:font-medium has-[:checked]:text-accent"
                >
                  <input
                    type="radio"
                    name="inquiry_type"
                    value={type}
                    defaultChecked={i === 0}
                    required
                    className="sr-only"
                  />
                  {type}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <label className="flex flex-col">
              <Label>{t.nameLabel}</Label>
              <input type="text" name="name" required className={field} />
            </label>
            <label className="flex flex-col">
              <Label>{t.emailLabel}</Label>
              <input type="email" name="email" required className={field} />
            </label>
            <label className="flex flex-col sm:col-span-2">
              <Label optional={t.optional}>{t.orgLabel}</Label>
              <input type="text" name="organization" className={field} />
            </label>
          </div>

          <div className="mt-5 grid gap-5">
            <label className="flex flex-col">
              <Label hint={t.topicHint}>{t.topicLabel}</Label>
              <input type="text" name="topic" className={field} />
            </label>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col">
                <Label hint={t.scheduleHint}>{t.scheduleLabel}</Label>
                <input type="text" name="schedule" className={field} />
              </label>
              <label className="flex flex-col">
                <Label hint={t.audienceHint}>{t.audienceLabel}</Label>
                <input type="text" name="audience" className={field} />
              </label>
            </div>
            <label className="flex flex-col">
              <Label hint={t.budgetHint}>{t.budgetLabel}</Label>
              <input type="text" name="budget" className={field} />
            </label>
          </div>

          <fieldset className="mt-8">
            <legend className={labelText}>{t.formatLabel}</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {t.formats.map((format, i) => (
                <label
                  key={format}
                  className="cursor-pointer rounded-full border border-border bg-bg px-4 py-2 text-sm text-text-secondary transition-colors has-[:checked]:border-accent has-[:checked]:bg-accent-bg has-[:checked]:font-medium has-[:checked]:text-accent"
                >
                  <input
                    type="radio"
                    name="format"
                    value={format}
                    defaultChecked={i === 2}
                    className="sr-only"
                  />
                  {format}
                </label>
              ))}
            </div>
          </fieldset>

          <label className="mt-8 flex flex-col">
            <Label optional={t.optional}>{t.messageLabel}</Label>
            <textarea name="message" rows={5} className={field} />
          </label>

          <button
            type="submit"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-highlight px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-text"
          >
            {t.submit}
          </button>
          <p className="mt-4 text-xs leading-relaxed text-text-tertiary">{t.privacy}</p>
        </form>
      ) : (
        <div className="mt-10 max-w-2xl rounded-2xl border border-border bg-surface p-8">
          <h2 className="font-serif text-xl text-text">{t.fallbackTitle}</h2>
          <p className="mt-2 text-sm text-text-secondary">{t.fallbackDesc}</p>
        </div>
      )}

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href={EMAIL_URL}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-accent-light hover:text-accent"
        >
          <Mail size={15} />
          {labels.email}
        </a>
        <a
          href={KAKAO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-accent-light hover:text-accent"
        >
          <MessageCircle size={15} />
          {labels.kakao}
        </a>
      </div>
    </div>
  );
}
