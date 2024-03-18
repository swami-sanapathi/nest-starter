export function getCurrentDate() {
  return new Date();
}

export function getISODateString() {
  return getCurrentDate().toISOString();
}

export function getUTCDateString() {
  return getCurrentDate().toUTCString();
}

export function getLocalDateString() {
  return getCurrentDate().toLocaleString();
}
