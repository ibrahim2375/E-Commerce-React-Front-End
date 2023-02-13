export const truncate = (text, l) => {
    return text.length > l ? text.slice(0, l) + "..." : text;
};