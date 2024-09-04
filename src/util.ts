export const formatDate = (date: Date) => {
  const month = new Intl.DateTimeFormat("en", {
    timeZone: "UTC",
    month: "long",
  }).format(date);
  const day = new Intl.DateTimeFormat(undefined, {
    timeZone: "UTC",
    day: "2-digit",
  }).format(date);
  const year = date.getUTCFullYear();
  return `${day} ${month} ${year}`;
};
