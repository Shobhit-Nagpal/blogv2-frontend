export default function formatDate(dateStr) {
    const dateObj = new Date(dateStr);

    const suffixes = ["th", "st", "nd", "rd"];
    const day = dateObj.getUTCDate();
    const daySuffix = suffixes[(day % 10 > 3) ? 0 : (day % 100 - day % 10 !== 10) ? day % 10 : 0];

    const month = dateObj.toLocaleString('en-US', { month: 'short', timeZone: 'UTC' });
    const year = dateObj.getUTCFullYear();

    return `${day}${daySuffix} ${month}, ${year}`;
}

