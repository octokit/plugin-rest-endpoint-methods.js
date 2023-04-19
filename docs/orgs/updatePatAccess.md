---
name: Update the access a fine-grained personal access token has to organization resources
example: octokit.rest.orgs.updatePatAccess({ org, pat_id, action })
route: POST /organizations/{org}/personal-access-tokens/{pat_id}
scope: orgs
type: API method
---

# Update the access a fine-grained personal access token has to organization resources

Updates the access an organization member has to organization resources via a fine-grained personal access token. Limited to revoking the token's existing access. Limited to revoking a token's existing access. Only GitHub Apps can call this API,
using the `organization_personal_access_tokens: write` permission.

**Note**: Fine-grained PATs are in public beta. Related APIs, events, and functionality are subject to change.

```js
octokit.rest.orgs.updatePatAccess({
  org,
  pat_id,
  action,
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

The unique identifier of the fine-grained personal access token.

</td></tr>
<tr><td>action</td><td>yes</td><td>

Action to apply to the fine-grained personal access token.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/orgs#update-the-access-a-fine-grained-personal-access-token-has-to-organization-resources).
