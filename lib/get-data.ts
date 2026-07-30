import type { Lang } from "./i18n";
import { books, activities, channels, careers } from "./data";
import { booksKo, activitiesKo, channelsKo, careersKo } from "./data-ko";
import { servicePages } from "./service-pages";
import { servicePagesKo } from "./service-pages-ko";
import { reviews } from "./reviews";
import { reviewsKo } from "./reviews-ko";

export function getData(lang: Lang) {
  if (lang === "ko") {
    return {
      books: booksKo,
      activities: activitiesKo,
      channels: channelsKo,
      careers: careersKo,
    };
  }
  return {
    books,
    activities,
    channels,
    careers,
  };
}

export function getReviews(lang: Lang) {
  return lang === "ko" ? reviewsKo : reviews;
}

export function getServicePages(lang: Lang) {
  return lang === "ko" ? servicePagesKo : servicePages;
}

export function getServicePage(lang: Lang, slug: string) {
  return getServicePages(lang).find((page) => page.slug === slug);
}
