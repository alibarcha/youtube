

// format views

export function formatViewCount(viewCount) {
    if (isNaN(viewCount)) {
        return viewCount;
    }
    if (viewCount >= 1000000) {
        return (viewCount / 1000000).toFixed(1) + 'M'
    }
    else if (viewCount >= 1000) {
        return (viewCount / 1000).toFixed(1) + 'K'
    }
    else {
        return viewCount;
    }
}