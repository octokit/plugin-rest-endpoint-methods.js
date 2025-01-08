---
name: Create an attestation
example: octokit.rest.repos.createAttestation({ owner, repo, bundle })
route: POST /repos/{owner}/{repo}/attestations
scope: repos
type: API method
---

# Create an attestation

Store an artifact attestation and associate it with a repository.

The authenticated user must have write permission to the repository and, if using a fine-grained access token, the `attestations:write` permission is required.

Artifact attestations are meant to be created using the [attest action](https://github.com/actions/attest). For more information, see our guide on [using artifact attestations to establish a build's provenance](https://docs.github.com/actions/security-guides/using-artifact-attestations-to-establish-provenance-for-builds).

```js
octokit.rest.repos.createAttestation({
  owner,
  repo,
  bundle,
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
<tr><td>bundle</td><td>yes</td><td>

The attestation's Sigstore Bundle.
Refer to the [Sigstore Bundle Specification](https://github.com/sigstore/protobuf-specs/blob/main/protos/sigstore_bundle.proto) for more information.

</td></tr>
<tr><td>bundle.mediaType</td><td>no</td><td>

</td></tr>
<tr><td>bundle.verificationMaterial</td><td>no</td><td>

</td></tr>
<tr><td>bundle.verificationMaterial.*</td><td>no</td><td>

</td></tr>
<tr><td>bundle.dsseEnvelope</td><td>no</td><td>

</td></tr>
<tr><td>bundle.dsseEnvelope.*</td><td>no</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/repos/repos#create-an-attestation).
