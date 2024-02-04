export const binaryToBase64 = (binaryData: Buffer): string => {
  const base64String = binaryData.toString('base64');
  return base64String;
};

export const base64ToBinary = (base64String: string): Buffer => {
  const binaryData: Buffer = Buffer.from(base64String, 'base64');
  return binaryData;
};
