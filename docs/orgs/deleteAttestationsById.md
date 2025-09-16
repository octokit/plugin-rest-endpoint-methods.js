---
name: Delete attestations by ID
example: octokit.rest.orgs.deleteAttestationsById({ org, attestation_id })
route: DELETE /orgs/{org}/attestations/{attestation_id}
scope: orgs
type: API method
---

# Delete attestations by ID

Delete an artifact attestation by unique ID that is associated with a repository owned by an org.

```js
octokit.rest.orgs.deleteAttestationsById({
  org,
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
    <tr><td>org</td><td>yes</td><td>

The organization name. The name is not case sensitive.

</td></tr>
<tr><td>attestation_id</td><td>yes</td><td>

Attestation ID

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/attestations#delete-attestations-by-id).
