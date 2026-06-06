import type { Lang } from "./i18n";
import { books, activities, channels, careers } from "./data";
import { booksKo, activitiesKo, channelsKo, careersKo } from "./data-ko";

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
