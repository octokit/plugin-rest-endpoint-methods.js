---
name: List repositories a fine-grained personal access token has access to
example: octokit.rest.orgs.listPatGrantRepositories({ org, pat_id })
route: GET /orgs/{org}/personal-access-tokens/{pat_id}/repositories
scope: orgs
type: API method
---

# List repositories a fine-grained personal access token has access to

Lists the repositories a fine-grained personal access token has access to. Only GitHub Apps can call this API,
using the `organization_personal_access_tokens: read` permission.

**Note**: Fine-grained PATs are in public beta. Related APIs, events, and functionality are subject to change.

```js
octokit.rest.orgs.listPatGrantRepositories({
  org,
  pat_id,
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
<tr><td>pat_id</td><td>yes</td><td>

Unique identifier of the fine-grained personal access token.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/personal-access-tokens#list-repositories-a-fine-grained-personal-access-token-has-access-to).
