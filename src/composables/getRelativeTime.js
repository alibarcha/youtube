// formatRelativeTime.js
export function getRelativeTime(publishedAtString) {
    const publishAt = new Date(publishedAtString);
    const now = new Date();
    
    // Convert milliseconds to seconds
    const seconds = Math.floor((now - publishAt) / 1000);

    const intervals = [
        { key: "year", value: 31536000 },
        { key: "month", value: 2592000 },
        { key: "week", value: 604800 },
        { key: "day", value: 86400 },
        { key: "hour", value: 3600 },
        { key: "minute", value: 60 },
        { key: "second", value: 1 }
    ];

    let biggestInterval = intervals.find(interval => seconds >= interval.value);
    if (!biggestInterval) { 
        return "just now"; 
    }

    const count = Math.floor(seconds / biggestInterval.value);

    // Handle pluralization
    const suffix = count === 1 ? "" : "s";

    return `${count} ${biggestInterval.key}${suffix} ago`;
}
