---
name: Delete attestations in bulk
example: octokit.rest.orgs.deleteAttestationsBulk({ org, subject_digests, attestation_ids })
route: POST /orgs/{org}/attestations/delete-request
scope: orgs
type: API method
---

# Delete attestations in bulk

Delete artifact attestations in bulk by either subject digests or unique ID.

```js
octokit.rest.orgs.deleteAttestationsBulk({
  org,
  subject_digests,
  attestation_ids,
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
<tr><td>subject_digests</td><td>yes</td><td>

List of subject digests associated with the artifact attestations to delete.

</td></tr>
<tr><td>attestation_ids</td><td>yes</td><td>

List of unique IDs associated with the artifact attestations to delete.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/attestations#delete-attestations-in-bulk).
