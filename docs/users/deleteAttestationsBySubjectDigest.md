---
name: Delete attestations by subject digest
example: octokit.rest.users.deleteAttestationsBySubjectDigest({ username, subject_digest })
route: DELETE /users/{username}/attestations/digest/{subject_digest}
scope: users
type: API method
---

# Delete attestations by subject digest

Delete an artifact attestation by subject digest.

```js
octokit.rest.users.deleteAttestationsBySubjectDigest({
  username,
  subject_digest,
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
    <tr><td>username</td><td>yes</td><td>

The handle for the GitHub user account.

</td></tr>
<tr><td>subject_digest</td><td>yes</td><td>

Subject Digest

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/users/attestations#delete-attestations-by-subject-digest).
