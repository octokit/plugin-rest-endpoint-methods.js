---
name: Create or update a repository secret
example: octokit.rest.actions.createOrUpdateRepoSecret({ owner, repo, secret_name })
route: PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}
scope: actions
type: API method
---

# Create or update a repository secret

Creates or updates a repository secret with an encrypted value. Encrypt your secret using
[LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use
this endpoint.

#### Example encrypting a secret using Node.js

Encrypt your secret using the [tweetsodium](https://github.com/github/tweetsodium) library.

```
const sodium = require('tweetsodium');

const key = "base64-encoded-public-key";
const value = "plain-text-secret";

// Convert the message and key to Uint8Array's (Buffer implements that interface)
const messageBytes = Buffer.from(value);
const keyBytes = Buffer.from(key, 'base64');

// Encrypt using LibSodium.
const encryptedBytes = sodium.seal(messageBytes, keyBytes);

// Base64 the encrypted secret
const encrypted = Buffer.from(encryptedBytes).toString('base64');

console.log(encrypted);
```

#### Example encrypting a secret using Python

Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/latest/public/#nacl-public-sealedbox) with Python 3.

```
from base64 import b64encode
from nacl import encoding, public

def encrypt(public_key: str, secret_value: str) -> str:
  """Encrypt a Unicode string using the public key."""
  public_key = public.PublicKey(public_key.encode("utf-8"), encoding.Base64Encoder())
  sealed_box = public.SealedBox(public_key)
  encrypted = sealed_box.encrypt(secret_value.encode("utf-8"))
  return b64encode(encrypted).decode("utf-8")
```

#### Example encrypting a secret using C#

Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.

```
var secretValue = System.Text.Encoding.UTF8.GetBytes("mySecret");
var publicKey = Convert.FromBase64String("2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=");

var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);

Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox));
```

#### Example encrypting a secret using Ruby

Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.

```ruby
require "rbnacl"
require "base64"

key = Base64.decode64("+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=")
public_key = RbNaCl::PublicKey.new(key)

box = RbNaCl::Boxes::Sealed.from_public_key(public_key)
encrypted_secret = box.encrypt("my_secret")

# Print the base64 encoded secret
puts Base64.strict_encode64(encrypted_secret)
```

```js
octokit.rest.actions.createOrUpdateRepoSecret({
  owner,
  repo,
  secret_name,
});
```

## Parameters

<table>
  <thead>
    <tr>
      <th>name</th>
      <th>required</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>owner</td><td>yes</td><td>

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>secret_name</td><td>yes</td><td>

The name of the secret.

</td></tr>
<tr><td>encrypted_value</td><td>no</td><td>

Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get a repository public key](https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#get-a-repository-public-key) endpoint.

</td></tr>
<tr><td>key_id</td><td>no</td><td>

ID of the key you used to encrypt the secret.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#create-or-update-a-repository-secret).
