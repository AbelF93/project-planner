
export function daysStay(dueDateStr) {
  const dueDateObj = new Date(dueDateStr);
  const now = new Date();
  const timeStay = dueDateObj.getTime() - now.getTime();
  const daysStay = Math.ceil(timeStay / (1000 * 60 * 60 * 24));
  return daysStay;
}
