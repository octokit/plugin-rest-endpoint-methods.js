---
name: List repositories requested to be accessed by a fine-grained personal access token
example: octokit.rest.orgs.listPatGrantRequestRepositories({ org, pat_request_id })
route: GET /orgs/{org}/personal-access-token-requests/{pat_request_id}/repositories
scope: orgs
type: API method
---

# List repositories requested to be accessed by a fine-grained personal access token

Lists the repositories a fine-grained personal access token request is requesting access to.

Only GitHub Apps can use this endpoint.

```js
octokit.rest.orgs.listPatGrantRequestRepositories({
  org,
  pat_request_id,
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
<tr><td>pat_request_id</td><td>yes</td><td>

Unique identifier of the request for access via fine-grained personal access token.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>page</td><td>no</td><td>

The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/personal-access-tokens#list-repositories-requested-to-be-accessed-by-a-fine-grained-personal-access-token).
