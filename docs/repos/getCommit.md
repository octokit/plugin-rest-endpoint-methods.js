# Get a single commit

Returns the contents of a single commit reference. You must have `read` access for the repository to use this endpoint.

You can pass the appropriate [media type](https://developer.github.com/v3/media/#commits-commit-comparison-and-pull-requests) to fetch `diff` and `patch` formats. Diffs with binary data will have no `patch` property.

To return only the SHA-1 hash of the commit reference, you can provide the `sha` custom [media type](https://developer.github.com/v3/media/#commits-commit-comparison-and-pull-requests) in the `Accept` header. You can use this endpoint to check if a remote reference's SHA-1 hash is the same as your local reference's SHA-1 hash by providing the local SHA-1 reference as the ETag.

**Signature verification object**

The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:

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
octokit.repos.getCommit({
  owner,
  repo,
  ref,
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

owner parameter

</td></tr>
<tr><td>repo</td><td>yes</td><td>

repo parameter

</td></tr>
<tr><td>ref</td><td>yes</td><td>

ref parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/commits/#get-a-single-commit).
