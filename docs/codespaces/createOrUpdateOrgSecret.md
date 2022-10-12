---
name: Create or update an organization secret
example: octokit.rest.codespaces.createOrUpdateOrgSecret({ org, secret_name, visibility })
route: PUT /organizations/{org}/codespaces/secrets/{secret_name}
scope: codespaces
type: API method
---

# Create or update an organization secret

Creates or updates an organization secret with an encrypted value. Encrypt your secret using
[LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
token with the `admin:org` scope to use this endpoint.

#### Example encrypting a secret using Node.js

Encrypt your secret using the [libsodium-wrappers](https://www.npmjs.com/package/libsodium-wrappers) library.

```
// Written with ❤️ by PSJ and free to use under The Unlicense.
const sodium=require('libsodium-wrappers')
const secret = 'plain-text-secret' // replace with secret before running the script.
const key = 'base64-encoded-public-key' // replace with the Base64 encoded public key.

//Check if libsodium is ready and then proceed.

sodium.ready.then( ()=>{

// Convert Secret & Base64 key to Uint8Array.
let binkey= sodium.from_base64(key, sodium.base64_variants.ORIGINAL) //Equivalent of Buffer.from(key, 'base64')
let binsec= sodium.from_string(secret) // Equivalent of Buffer.from(secret)

//Encrypt the secret using LibSodium
let encBytes= sodium.crypto_box_seal(binsec,binkey) // Similar to tweetsodium.seal(binsec,binkey)

// Convert encrypted Uint8Array to Base64
let output=sodium.to_base64(encBytes, sodium.base64_variants.ORIGINAL) //Equivalent of Buffer.from(encBytes).toString('base64')

console.log(output)
});
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
octokit.rest.codespaces.createOrUpdateOrgSecret({
  org,
  secret_name,
  visibility,
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
    <tr><td>org</td><td>yes</td><td>

The organization name. The name is not case sensitive.

</td></tr>
<tr><td>secret_name</td><td>yes</td><td>

The name of the secret.

</td></tr>
<tr><td>encrypted_value</td><td>no</td><td>

The value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get an organization public key](https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#get-an-organization-public-key) endpoint.

</td></tr>
<tr><td>key_id</td><td>no</td><td>

The ID of the key you used to encrypt the secret.

</td></tr>
<tr><td>visibility</td><td>yes</td><td>

Which type of organization repositories have access to the organization secret. `selected` means only the repositories specified by `selected_repository_ids` can access the secret.

</td></tr>
<tr><td>selected_repository_ids</td><td>no</td><td>

An array of repository IDs that can access the organization secret. You can only provide a list of repository IDs when the `visibility` is set to `selected`. You can manage the list of selected repositories using the [List selected repositories for an organization secret](https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#list-selected-repositories-for-an-organization-secret), [Set selected repositories for an organization secret](https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#set-selected-repositories-for-an-organization-secret), and [Remove selected repository from an organization secret](https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#remove-selected-repository-from-an-organization-secret) endpoints.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#create-or-update-an-organization-secret).
