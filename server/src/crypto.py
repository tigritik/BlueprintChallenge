from base64 import b64decode, b64encode

from nacl.public import PrivateKey, PublicKey, SealedBox


def encrypt_payload(key: str, payload: str) -> str:
    try:
        key_bytes = b64decode(key)
        public_key = PublicKey(key_bytes)
        box = SealedBox(public_key)
        encrypted_bytes = box.encrypt(payload.encode())
        return b64encode(encrypted_bytes).decode()
    except Exception as e:
        raise ValueError from e


def decrypt_payload(key: str, payload: str) -> str:
    try:
        key_bytes = b64decode(key)
        private_key = PrivateKey(key_bytes)
        box = SealedBox(private_key)
        decrypted_bytes = box.decrypt(b64decode(payload))
        return decrypted_bytes.decode()
    except Exception as e:
        raise ValueError from e
