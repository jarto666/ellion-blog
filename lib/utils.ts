export const formatDate = (date: string) => {
  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return formattedDate;
};

export const mapLanguageNameForRendering = (lang: string) => {
  switch (lang) {
    case "sh":
      return "bash";
    default:
      return "c";
  }
};
