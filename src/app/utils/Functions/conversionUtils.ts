export const binaryToDecimal = (binary: string): number | string => {
  if (!/^[01]+$/.test(binary)) return "Invalid binary number";
  return parseInt(binary, 2);
};

export const decimalToBinary = (decimal: string): string | string => {
  const num = parseInt(decimal, 10);
  return isNaN(num) ? "Invalid decimal number" : num.toString(2);
};

export const decimalToHex = (decimal: string): string | string => {
  const num = parseInt(decimal, 10);
  return isNaN(num) ? "Invalid decimal number" : num.toString(16).toUpperCase();
};
export const hexToDecimal = (hex: string): string => {
  const trimmedHex = hex.trim();
  if (!/^[\da-fA-F]+$/.test(trimmedHex)) return "Invalid hexadecimal number";

  const decimalValue = parseInt(trimmedHex, 16);
  return decimalValue.toString();
};

export const binaryToHex = (binary: string): string | string => {
  if (!/^[01]+$/.test(binary)) return "Invalid binary number";
  return parseInt(binary, 2).toString(16).toUpperCase();
};
export const hexToBinary = (hex: string): string => {
  const trimmedHex = hex.trim();
  if (!/^[\da-fA-F]+$/.test(trimmedHex)) return "Invalid hexadecimal number";

  const decimalValue = parseInt(trimmedHex, 16);
  return decimalValue.toString(2);
};
