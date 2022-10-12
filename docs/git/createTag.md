---
name: Create a tag object
example: octokit.rest.git.createTag({ owner, repo, tag, message, object, type, tagger.name, tagger.email })
route: POST /repos/{owner}/{repo}/git/tags
scope: git
type: API method
---

# Create a tag object

Note that creating a tag object does not create the reference that makes a tag in Git. If you want to create an annotated tag in Git, you have to do this call to create the tag object, and then [create](https://docs.github.com/enterprise-cloud@latest//rest/reference/git#create-a-reference) the `refs/tags/[tag]` reference. If you want to create a lightweight tag, you only have to [create](https://docs.github.com/enterprise-cloud@latest//rest/reference/git#create-a-reference) the tag reference - this call would be unnecessary.

**Signature verification object**

The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:

| Name        | Type      | Description                                                                                      |
| ----------- | --------- | ------------------------------------------------------------------------------------------------ |
| `verified`  | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified.                  |
| `reason`    | `string`  | The reason for verified value. Possible values and their meanings are enumerated in table below. |
| `signature` | `string`  | The signature that was extracted from the commit.                                                |
| `payload`   | `string`  | The value that was signed.                                                                       |

These are the possible values for `reason` in the `verification` object:

| Value                    | Description                                                                                                                       |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| `expired_key`            | The key that made the signature is expired.                                                                                       |
| `not_signing_key`        | The "signing" flag is not among the usage flags in the GPG key that made the signature.                                           |
| `gpgverify_error`        | There was an error communicating with the signature verification service.                                                         |
| `gpgverify_unavailable`  | The signature verification service is currently unavailable.                                                                      |
| `unsigned`               | The object does not include a signature.                                                                                          |
| `unknown_signature_type` | A non-PGP signature was found in the commit.                                                                                      |
| `no_user`                | No user was associated with the `committer` email address in the commit.                                                          |
| `unverified_email`       | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
| `bad_email`              | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature.             |
| `unknown_key`            | The key that made the signature has not been registered with any user's account.                                                  |
| `malformed_signature`    | There was an error parsing the signature.                                                                                         |
| `invalid`                | The signature could not be cryptographically verified using the key whose key-id was found in the signature.                      |
| `valid`                  | None of the above errors applied, so the signature is considered to be verified.                                                  |

```js
octokit.rest.git.createTag({
        owner,
repo,
tag,
message,
object,
type,
tagger.name,
tagger.email
      })
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
<tr><td>tag</td><td>yes</td><td>

The tag's name. This is typically a version (e.g., "v0.0.1").

</td></tr>
<tr><td>message</td><td>yes</td><td>

The tag message.

</td></tr>
<tr><td>object</td><td>yes</td><td>

The SHA of the git object this is tagging.

</td></tr>
<tr><td>type</td><td>yes</td><td>

The type of the object we're tagging. Normally this is a `commit` but it can also be a `tree` or a `blob`.

</td></tr>
<tr><td>tagger</td><td>no</td><td>

An object with information about the individual creating the tag.

</td></tr>
<tr><td>tagger.name</td><td>yes</td><td>

The name of the author of the tag

</td></tr>
<tr><td>tagger.email</td><td>yes</td><td>

The email of the author of the tag

</td></tr>
<tr><td>tagger.date</td><td>no</td><td>

When this object was tagged. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/git#create-a-tag-object).
