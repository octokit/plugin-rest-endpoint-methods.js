---
name: Create a commit
example: octokit.rest.git.createCommit({ owner, repo, message, tree, author.name, author.email })
route: POST /repos/{owner}/{repo}/git/commits
scope: git
type: API method
---

# Create a commit

Creates a new Git [commit object](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects).

**Signature verification object**

The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:

| Name        | Type      | Description                                                                                          |
| ----------- | --------- | ---------------------------------------------------------------------------------------------------- |
| `verified`  | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified.                      |
| `reason`    | `string`  | The reason for verified value. Possible values and their meanings are enumerated in the table below. |
| `signature` | `string`  | The signature that was extracted from the commit.                                                    |
| `payload`   | `string`  | The value that was signed.                                                                           |

These are the possible values for `reason` in the `verification` object:

| Value                    | Description                                                                                                                     |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| `expired_key`            | The key that made the signature is expired.                                                                                     |
| `not_signing_key`        | The "signing" flag is not among the usage flags in the GPG key that made the signature.                                         |
| `gpgverify_error`        | There was an error communicating with the signature verification service.                                                       |
| `gpgverify_unavailable`  | The signature verification service is currently unavailable.                                                                    |
| `unsigned`               | The object does not include a signature.                                                                                        |
| `unknown_signature_type` | A non-PGP signature was found in the commit.                                                                                    |
| `no_user`                | No user was associated with the `committer` email address in the commit.                                                        |
| `unverified_email`       | The `committer` email address in the commit was associated with a user, but the email address is not verified on their account. |
| `bad_email`              | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature.           |
| `unknown_key`            | The key that made the signature has not been registered with any user's account.                                                |
| `malformed_signature`    | There was an error parsing the signature.                                                                                       |
| `invalid`                | The signature could not be cryptographically verified using the key whose key-id was found in the signature.                    |
| `valid`                  | None of the above errors applied, so the signature is considered to be verified.                                                |

```js
octokit.rest.git.createCommit({
        owner,
repo,
message,
tree,
author.name,
author.email
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

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>message</td><td>yes</td><td>

The commit message

</td></tr>
<tr><td>tree</td><td>yes</td><td>

The SHA of the tree object this commit points to

</td></tr>
<tr><td>parents</td><td>no</td><td>

The SHAs of the commits that were the parents of this commit. If omitted or empty, the commit will be written as a root commit. For a single parent, an array of one SHA should be provided; for a merge commit, an array of more than one should be provided.

</td></tr>
<tr><td>author</td><td>no</td><td>

Information about the author of the commit. By default, the `author` will be the authenticated user and the current date. See the `author` and `committer` object below for details.

</td></tr>
<tr><td>author.name</td><td>yes</td><td>

The name of the author (or committer) of the commit

</td></tr>
<tr><td>author.email</td><td>yes</td><td>

The email of the author (or committer) of the commit

</td></tr>
<tr><td>author.date</td><td>no</td><td>

Indicates when this commit was authored (or committed). This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.

</td></tr>
<tr><td>committer</td><td>no</td><td>

Information about the person who is making the commit. By default, `committer` will use the information set in `author`. See the `author` and `committer` object below for details.

</td></tr>
<tr><td>committer.name</td><td>no</td><td>

The name of the author (or committer) of the commit

</td></tr>
<tr><td>committer.email</td><td>no</td><td>

The email of the author (or committer) of the commit

</td></tr>
<tr><td>committer.date</td><td>no</td><td>

Indicates when this commit was authored (or committed). This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.

</td></tr>
<tr><td>signature</td><td>no</td><td>

The [PGP signature](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) of the commit. GitHub adds the signature to the `gpgsig` header of the created commit. For a commit signature to be verifiable by Git or GitHub, it must be an ASCII-armored detached PGP signature over the string commit as it would be written to the object database. To pass a `signature` parameter, you need to first manually create a valid PGP signature, which can be complicated. You may find it easier to [use the command line](https://git-scm.com/book/id/v2/Git-Tools-Signing-Your-Work) to create signed commits.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/git#create-a-commit).
