# SecureLog

## Overview
SecureLog is a full stack web application providing encryption and decryption services. You can deploy SecureLog locally on your machine using docker-compose.

```bash
docker-compose up -d
```

The app is served on port 8080. If hosting locally, please visit `http://localhost:8080` on your machine.

## Encryption and Decryption Services
A payload can be encrypted/decrypted at the appropriate `/encrypt` or `/decrypt` route. Please note that valid keys are base64 encoded 32-byte strings. A key that does not fit this criteria will not be accepted. An example key pair is provided below.

### Example Key Pair
- Public Key: `PdoQ/IZXeCSU+MrrC4znTYFlncbcq6rNUg2/ZeyXOgM=`
- Private Key: `FFDSdyzUbEq34fs4C+3Zar9P3YmtMxt+i+MhwZMqc/M=`

To generate your own public/private key pairs, install the packages at `./server/requirements.txt` and run the following Python code:

```py
from base64 import b64encode
from nacl.public import PrivateKey

private_key = PrivateKey.generate()
public_key = private_key.public_key

print({
	"private_key": b64encode(bytes(private_key)).decode(),
        "public_key": b64encode(bytes(public_key)).decode()
})
```

## Logs
A log of every encryption/decryption event is stored in a PostgreSQL database. These logs can be viewed in a paginated manner at the `/logs` route.

## References
- Challenge Description: found [here](https://wiki.sitblueprint.com/books/application-challenges-fall-2025/page/developer-challenge).
- SecureLog logo: sourced from [stock images](https://stock.adobe.com/images/sl-letter-initial-logo-design-template-vector-illustration/434377853).
