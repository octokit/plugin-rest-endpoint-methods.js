---
name: Get all custom property values for a repository
example: octokit.rest.repos.customPropertiesForReposGetRepositoryValues({ owner, repo })
route: GET /repos/{owner}/{repo}/properties/values
scope: repos
type: API method
---

# Get all custom property values for a repository

Gets all custom property values that are set for a repository.
Users with read access to the repository can use this endpoint.

```js
octokit.rest.repos.customPropertiesForReposGetRepositoryValues({
  owner,
  repo,
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/repos/custom-properties#get-all-custom-property-values-for-a-repository).
