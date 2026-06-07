import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "리드제일 (Brasley Byun) - 링크드인 전략가";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #FAF9F7 0%, #F0EDE8 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "#F0EDE8",
              borderRadius: "999px",
              padding: "6px 16px",
              fontSize: "14px",
              color: "#8B7355",
            }}
          >
            Favikon-selected LinkedIn Ambassador in Korea
          </div>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 700,
              color: "#2C2520",
              letterSpacing: "-0.02em",
            }}
          >
            리드제일
          </div>
          <div
            style={{
              fontSize: "20px",
              color: "#8B7355",
            }}
          >
            링크드인 전략가 · 작가 · Brasley Byun
          </div>
          <div
            style={{
              display: "flex",
              gap: "32px",
              marginTop: "24px",
              fontSize: "16px",
              color: "#6B5E50",
            }}
          >
            <span>팔로워 30,000+</span>
            <span>조회수 130만+</span>
            <span>저서 2권</span>
            <span>강연 10회</span>
          </div>
          <div
            style={{
              marginTop: "16px",
              fontSize: "14px",
              color: "#A09688",
            }}
          >
            leadjaeil.vercel.app
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
