---
name: Delete attestations by subject digest
example: octokit.rest.orgs.deleteAttestationsBySubjectDigest({ org, subject_digest })
route: DELETE /orgs/{org}/attestations/digest/{subject_digest}
scope: orgs
type: API method
---

# Delete attestations by subject digest

Delete an artifact attestation by subject digest.

```js
octokit.rest.orgs.deleteAttestationsBySubjectDigest({
  org,
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
    <tr><td>org</td><td>yes</td><td>

The organization name. The name is not case sensitive.

</td></tr>
<tr><td>subject_digest</td><td>yes</td><td>

Subject Digest

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/attestations#delete-attestations-by-subject-digest).
