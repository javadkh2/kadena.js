import type { IKeyPair, SignCommand } from '@kadena/types';

import { base64UrlDecodeArr } from './base64UrlDecodeArr';
import { binToHex } from './binToHex';
import { toTweetNaclSecretKey } from './toTweetNaclSecretKey';

import nacl from 'tweetnacl';

/**
 Sign a hash using key pair

 * @alpha
*/
export function signHash(
  hash: string,
  { secretKey, publicKey }: IKeyPair,
): SignCommand {
  const hshBin = base64UrlDecodeArr(hash);
  const sigBin = nacl.sign.detached(
    hshBin,
    toTweetNaclSecretKey({ secretKey, publicKey }),
  );
  return { hash, sig: binToHex(sigBin), pubKey: publicKey };
}
