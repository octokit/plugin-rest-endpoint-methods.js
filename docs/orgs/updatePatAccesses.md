---
name: Update the access to organization resources via fine-grained personal access tokens
example: octokit.rest.orgs.updatePatAccesses({ org, action, pat_ids })
route: POST /orgs/{org}/personal-access-tokens
scope: orgs
type: API method
---

# Update the access to organization resources via fine-grained personal access tokens

Updates the access organization members have to organization resources via fine-grained personal access tokens. Limited to revoking a token's existing access. Only GitHub Apps can call this API,
using the `organization_personal_access_tokens: write` permission.

**Note**: Fine-grained PATs are in public beta. Related APIs, events, and functionality are subject to change.

```js
octokit.rest.orgs.updatePatAccesses({
  org,
  action,
  pat_ids,
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
<tr><td>action</td><td>yes</td><td>

Action to apply to the fine-grained personal access token.

</td></tr>
<tr><td>pat_ids</td><td>yes</td><td>

The IDs of the fine-grained personal access tokens.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/personal-access-tokens#update-the-access-to-organization-resources-via-fine-grained-personal-access-tokens).
