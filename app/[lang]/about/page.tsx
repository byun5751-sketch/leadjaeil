import type { Metadata } from "next";
import { Briefcase, GraduationCap, Radio, Sparkles, Target } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";
import { getData } from "@/lib/get-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const title = lang === "ko" ? "프로필" : "About";
  const description =
    lang === "ko"
      ? "변재일 프로필 -- 경력, 학력, 채널, 강점, 핵심 역량"
      : "About Brasley Byun -- career, education, channels, strengths, competencies";
  return { title, description };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = getTranslations(lang as Lang);
  const { careers, channels } = getData(lang as Lang);

  const strengths =
    lang === "ko"
      ? ["최상화", "행동", "존재감", "정리", "배움"]
      : ["Maximizer", "Activator", "Significance", "Arranger", "Learner"];

  const strengthDesc =
    lang === "ko"
      ? "강점 진단 기반으로, 흩어진 것을 정리하고 더 나은 형태로 끌어올리는 데 특화되어 있습니다."
      : "Specialized in organizing scattered elements and elevating them to better forms.";

  const competencies =
    lang === "ko"
      ? [
          {
            title: "비즈니스 개발",
            desc: "파트너십 발굴, 외부 협업 리서치, 이벤트\xB7브랜드 협업 기획",
          },
          {
            title: "세일즈 오퍼레이션",
            desc: "계약 파이프라인 관리, 연체 추적, 프로세스 병목 식별",
          },
          {
            title: "마케팅 오퍼레이션",
            desc: "B2B PR, 콘텐츠 기획\xB7배포, 글로벌 콘텐츠 현지화",
          },
          {
            title: "데이터 인텔리전스",
            desc: "경쟁사\xB7시장 분석, 리포트 작성, 의사결정 지원",
          },
          {
            title: "프로젝트 관리",
            desc: "일정 관리, 이해관계자 조율, 회의 운영, 프로세스 문서화",
          },
        ]
      : [
          {
            title: "Business Development",
            desc: "Partnership discovery, external collaboration research, event and brand collaboration planning",
          },
          {
            title: "Sales Operations",
            desc: "Contract pipeline management, overdue tracking, process bottleneck identification",
          },
          {
            title: "Marketing Operations",
            desc: "B2B PR, content planning and distribution, global content localization",
          },
          {
            title: "Data Intelligence",
            desc: "Competitor and market analysis, report writing, decision support",
          },
          {
            title: "Project Management",
            desc: "Schedule management, stakeholder coordination, meeting facilitation, process documentation",
          },
        ];

  const education =
    lang === "ko"
      ? {
          university: "중앙대학교",
          major: "국제물류학과 / 경영학과",
          period: "2019.03 ~ 2024.02",
          gpa: "4.41 / 4.50",
          honors: "조기졸업 \xB7 차석졸업",
          scholarships: "Curiosity Project Team 장학생 1기 / 정수장학회 55기",
          highschool: "안동 풍산고등학교 (2016.03 ~ 2019.02)",
        }
      : {
          university: "Chung-Ang University",
          major: "International Logistics / Business Administration",
          period: "2019.03 ~ 2024.02",
          gpa: "4.41 / 4.50",
          honors: "Early Graduation, Salutatorian",
          scholarships: "Curiosity Project Team Scholar 1st / Jeongsu Scholarship 55th",
          highschool: "Andong Pungsan High School (2016.03 ~ 2019.02)",
        };

  return (
    <div className="site-shell py-16 md:py-24">
      <p className="text-[11px] font-medium uppercase tracking-widest text-text-tertiary">
        {t.aboutPage.eyebrow}
      </p>
      <h1 className="mt-2 font-serif text-4xl text-text">{t.aboutPage.title}</h1>

      <div className="mt-6">
        <div>
          <h2 className="font-serif text-2xl text-text">
            {lang === "ko" ? "변재일 (Brasley Byun)" : "Brasley Byun"}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary">
            {lang === "ko"
              ? "흩어진 정보와 프로세스를 구조화하고, 이해관계자를 조율해 실행 가능한 결과로 연결하는 비즈니스 개발\xB7운영 전문가입니다. 동시에 팔로워 2만+의 링크드인 크리에이터이자 두 권의 책을 낸 작가입니다."
              : "A BD and operations professional who structures scattered information and processes, coordinates stakeholders, and connects everything to actionable results. Also a LinkedIn creator with 20K+ followers and author of two books."}
          </p>
          <p className="mt-2 text-xs font-medium text-accent">
            {lang === "ko"
              ? "파비콘(Favikon) 선정 국내 유일 링크드인 앰버서더"
              : "Favikon-selected LinkedIn Ambassador in Korea"}
          </p>
        </div>
      </div>

      {/* Career */}
      <section className="mt-16">
        <div className="flex items-center gap-2">
          <Briefcase size={18} className="text-accent" />
          <h2 className="text-lg font-semibold text-text">{t.aboutPage.career}</h2>
        </div>
        <div className="mt-6 space-y-4">
          {careers.map((c) => (
            <div
              key={c.company}
              className="flex flex-col gap-1 rounded-xl border border-border bg-surface p-5 sm:flex-row sm:items-start sm:justify-between"
            >
              <div>
                <h3 className="font-semibold text-text">{c.company}</h3>
                <p className="text-sm text-text-secondary">{c.role}</p>
                <p className="mt-1 text-xs text-text-tertiary">{c.desc}</p>
              </div>
              <span className="shrink-0 text-xs text-accent">{c.period}</span>
            </div>
          ))}
          <p className="text-xs text-text-tertiary">
            {lang === "ko"
              ? "* 글로벌 기업 3곳 모두 링크드인을 통해 채용"
              : "* All 3 global companies recruited through LinkedIn"}
          </p>
        </div>
      </section>

      {/* Education */}
      <section className="mt-16">
        <div className="flex items-center gap-2">
          <GraduationCap size={18} className="text-accent" />
          <h2 className="text-lg font-semibold text-text">{t.aboutPage.education}</h2>
        </div>
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <h3 className="font-semibold text-text">{education.university}</h3>
          <p className="mt-1 text-sm text-text-secondary">{education.major}</p>
          <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
            <div>
              <span className="text-text-tertiary">{lang === "ko" ? "기간" : "Period"}</span>
              <p className="text-text">{education.period}</p>
            </div>
            <div>
              <span className="text-text-tertiary">{lang === "ko" ? "학점" : "GPA"}</span>
              <p className="text-text">{education.gpa}</p>
            </div>
            <div>
              <span className="text-text-tertiary">{lang === "ko" ? "졸업" : "Honors"}</span>
              <p className="text-text">{education.honors}</p>
            </div>
            <div>
              <span className="text-text-tertiary">{lang === "ko" ? "장학" : "Scholarships"}</span>
              <p className="text-text">{education.scholarships}</p>
            </div>
          </div>
          <p className="mt-4 text-xs text-text-tertiary">{education.highschool}</p>
        </div>
      </section>

      {/* Channels */}
      <section className="mt-16">
        <div className="flex items-center gap-2">
          <Radio size={18} className="text-accent" />
          <h2 className="text-lg font-semibold text-text">{t.aboutPage.channels}</h2>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {channels.map((ch) => (
            <a
              key={ch.name}
              href={ch.url === "#" ? undefined : ch.url}
              target={ch.url === "#" ? undefined : "_blank"}
              rel={ch.url === "#" ? undefined : "noopener noreferrer"}
              className="flex items-center justify-between rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent-light"
            >
              <div>
                <p className="text-sm font-medium text-text">{ch.name}</p>
                <p className="text-xs text-text-tertiary">{ch.handle}</p>
              </div>
              <span className="text-sm font-semibold text-accent">{ch.followers}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Strengths */}
      <section className="mt-16">
        <div className="flex items-center gap-2">
          <Sparkles size={18} className="text-accent" />
          <h2 className="text-lg font-semibold text-text">{t.aboutPage.strengths}</h2>
        </div>
        <div className="mt-6">
          <div className="flex flex-wrap gap-2">
            {strengths.map((s) => (
              <span
                key={s}
                className="rounded-full bg-accent-bg px-3 py-1.5 text-sm font-medium text-accent"
              >
                {s}
              </span>
            ))}
          </div>
          <p className="mt-3 text-sm text-text-secondary">{strengthDesc}</p>
        </div>
      </section>

      {/* Competencies */}
      <section className="mt-16">
        <div className="flex items-center gap-2">
          <Target size={18} className="text-accent" />
          <h2 className="text-lg font-semibold text-text">{t.aboutPage.competencies}</h2>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {competencies.map((c) => (
            <div
              key={c.title}
              className="rounded-xl border border-border bg-surface p-5"
            >
              <h3 className="text-sm font-semibold text-text">{c.title}</h3>
              <p className="mt-1 text-sm text-text-secondary">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
