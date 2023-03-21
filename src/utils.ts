export const formatString = (str: string | undefined): string => {
	if (!str) return "";
	const newStr = str[0].toUpperCase() + str.slice(1);

	return newStr.replace(/-/g, " ");
};
