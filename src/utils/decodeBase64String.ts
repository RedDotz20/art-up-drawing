import base64 from 'base64-js';

export function decodeBase64(data: string): typeof uint8Array {
  const uint8Array = base64.toByteArray(data.split(',')[1]);

  return uint8Array;
}
