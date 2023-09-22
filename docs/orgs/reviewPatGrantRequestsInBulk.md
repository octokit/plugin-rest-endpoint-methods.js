---
name: Review requests to access organization resources with fine-grained personal access tokens
example: octokit.rest.orgs.reviewPatGrantRequestsInBulk({ org, action })
route: POST /orgs/{org}/personal-access-token-requests
scope: orgs
type: API method
---

# Review requests to access organization resources with fine-grained personal access tokens

Approves or denies multiple pending requests to access organization resources via a fine-grained personal access token. Only GitHub Apps can call this API,
using the `organization_personal_access_token_requests: write` permission.

**Note**: Fine-grained PATs are in public beta. Related APIs, events, and functionality are subject to change.

```js
octokit.rest.orgs.reviewPatGrantRequestsInBulk({
  org,
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
<tr><td>pat_request_ids</td><td>no</td><td>

Unique identifiers of the requests for access via fine-grained personal access token. Must be formed of between 1 and 100 `pat_request_id` values.

</td></tr>
<tr><td>action</td><td>yes</td><td>

Action to apply to the requests.

</td></tr>
<tr><td>reason</td><td>no</td><td>

Reason for approving or denying the requests. Max 1024 characters.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/personal-access-tokens#review-requests-to-access-organization-resources-with-fine-grained-personal-access-tokens).
