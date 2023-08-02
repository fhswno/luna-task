export const getSalaryRange = (salary) => {
  if (salary === null) {
    return null;
  }

  const base = Math.floor(salary / 10000);
  return `${base * 10}k - ${base * 10 + 10}k`;
};

export const getExperienceRange = (experience) => {
  if (experience === null) {
    return null;
  }

  const base = Math.floor(experience);
  return `${base} - ${base + 1}y`;
};
