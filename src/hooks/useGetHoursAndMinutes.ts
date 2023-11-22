const useGetHoursAndMinutes = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const time = `${hours} : ${minutes}`;

  return time;
};

export default useGetHoursAndMinutes;
