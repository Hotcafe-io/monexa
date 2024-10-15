import { createCipheriv, createDecipheriv, randomBytes } from 'crypto';

const algorithm = 'aes-256-cbc';

const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY || '';
if (secretKey.length !== 64) {
    throw new Error('SECRET_KEY environment variable must be 64 hexadecimal characters long.');
}
const key = Buffer.from(secretKey, 'hex');

export function decryptData(encryptedData: string): string {
    const [ivHex, encryptedText] = encryptedData.split(':');
    const iv = Buffer.from(ivHex, 'hex');
    const decipher = createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}