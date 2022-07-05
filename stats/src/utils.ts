export const parseDate = (dateString: string): Date => {
  const [day, month, year] = dateString.split('/');
  return new Date(+year, +month - 1, +day);
};
