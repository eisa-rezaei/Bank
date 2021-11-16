const size = {
  tablet: "768px",
  laptop: "1024px",
};

export const device = {
  phone: `(max-width: ${size.tablet})`,
  tablet: `(min-width: ${size.tablet}) and (max-width: ${size.laptop})`,
};
