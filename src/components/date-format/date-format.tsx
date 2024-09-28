export function getDateFormat(dateString: any) {
  const [year, month, day] = dateString.split("-");
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${day} ${monthNames[parseInt(month) - 1]} ${year}`;
}

export function getTimeFormat(timeString: any) {
  const [hours, minutes] = timeString.split(":").map(Number);
  const isPM = hours >= 12;
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const period = isPM ? "PM" : "AM";

  return `${formattedHours}:${minutes.toString().padStart(2, "0")} ${period}`;
}
