---
name: Review a request to access organization resources with a fine-grained personal access token
example: octokit.rest.orgs.reviewPatGrantRequest({ org, pat_request_id, action })
route: POST /orgs/{org}/personal-access-token-requests/{pat_request_id}
scope: orgs
type: API method
---

# Review a request to access organization resources with a fine-grained personal access token

Approves or denies a pending request to access organization resources via a fine-grained personal access token. Only GitHub Apps can call this API,
using the `organization_personal_access_token_requests: write` permission.

**Note**: Fine-grained PATs are in public beta. Related APIs, events, and functionality are subject to change.

```js
octokit.rest.orgs.reviewPatGrantRequest({
  org,
  pat_request_id,
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
<tr><td>pat_request_id</td><td>yes</td><td>

Unique identifier of the request for access via fine-grained personal access token.

</td></tr>
<tr><td>action</td><td>yes</td><td>

Action to apply to the request.

</td></tr>
<tr><td>reason</td><td>no</td><td>

Reason for approving or denying the request. Max 1024 characters.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/personal-access-tokens#review-a-request-to-access-organization-resources-with-a-fine-grained-personal-access-token).
