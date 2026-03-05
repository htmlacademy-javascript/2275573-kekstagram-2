const getMinutes = (string) => {
  const time = string.split(':');
  return Number(time[0]) * 60 + Number(time[1]);
};

const checkTime = (start, end, meeting, duration) => {
  const startOfDay = getMinutes(start);
  const endOfDay = getMinutes(end);
  const startOfMeeting = getMinutes(meeting);
  const endOfMeeting = startOfMeeting + duration;
  return startOfMeeting >= startOfDay && endOfMeeting <= endOfDay;
};

checkTime('08:00', '17:30', '14:00', 90);
checkTime('8:00', '17:30', '08:00', 900);
