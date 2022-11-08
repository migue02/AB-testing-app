export const hoursBetweenDates = (date1: Date, date2: Date): number => {
    const msBetweenDates = Math.abs(date1.getTime() - date2.getTime());
    return msBetweenDates / (60 * 60 * 1000);
}

export const daysBetweenDates = (date1: Date, date2: Date): number => {
    const msBetweenDates = Math.abs(date1.getTime() - date2.getTime());
    return msBetweenDates / (60 * 60 * 24);
}