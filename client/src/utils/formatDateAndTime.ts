export function formatDateAndTime(dateString: string): string {
  const date = new Date(dateString);

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);

  return formattedDate;
}
