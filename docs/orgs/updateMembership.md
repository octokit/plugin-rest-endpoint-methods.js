---
name: Edit your organization membership
example: octokit.orgs.updateMembership({ org, state })
route: PATCH /user/memberships/orgs/{org}
scope: orgs
type: API method
---

# Edit your organization membership

```js
octokit.orgs.updateMembership({
  org,
  state,
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

org parameter

</td></tr>
<tr><td>state</td><td>yes</td><td>

The state that the membership should be in. Only `"active"` will be accepted.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/orgs/members/#edit-your-organization-membership).
