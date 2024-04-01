function isLeap(year) {
  if ((input % 4) != 0) {
    return "Not Leap";
  } else if ((input % 4) == 0 && (input % 100) != 0) {
    return "Leap";
  } else if ((input % 400) != 0) {
    return "Not Leap";
  } else {
    return "Leap";
  }
}

isLeap(2000);
