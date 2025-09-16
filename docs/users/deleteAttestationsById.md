---
name: Delete attestations by ID
example: octokit.rest.users.deleteAttestationsById({ username, attestation_id })
route: DELETE /users/{username}/attestations/{attestation_id}
scope: users
type: API method
---

# Delete attestations by ID

Delete an artifact attestation by unique ID that is associated with a repository owned by a user.

```js
octokit.rest.users.deleteAttestationsById({
  username,
  attestation_id,
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
<tr><td>attestation_id</td><td>yes</td><td>

Attestation ID

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/users/attestations#delete-attestations-by-id).
