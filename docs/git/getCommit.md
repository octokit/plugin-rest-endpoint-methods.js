---
name: Get a commit
example: octokit.rest.git.getCommit({ owner, repo, commit_sha })
route: GET /repos/{owner}/{repo}/git/commits/{commit_sha}
scope: git
type: API method
---

# Get a commit

Gets a Git [commit object](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects).

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
octokit.rest.git.getCommit({
  owner,
  repo,
  commit_sha,
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

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>commit_sha</td><td>yes</td><td>

The SHA of the commit.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/git#get-a-commit).
