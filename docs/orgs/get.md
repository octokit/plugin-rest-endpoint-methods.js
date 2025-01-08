---
name: Get an organization
example: octokit.rest.orgs.get({ org })
route: GET /orgs/{org}
scope: orgs
type: API method
---

# Get an organization

Gets information about an organization.

When the value of `two_factor_requirement_enabled` is `true`, the organization requires all members, billing managers, and outside collaborators to enable [two-factor authentication](https://docs.github.com/articles/securing-your-account-with-two-factor-authentication-2fa/).

To see the full details about an organization, the authenticated user must be an organization owner.

OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to see the full details about an organization.

To see information about an organization's GitHub plan, GitHub Apps need the `Organization plan` permission.

```js
octokit.rest.orgs.get({
  org,
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/orgs#get-an-organization).
