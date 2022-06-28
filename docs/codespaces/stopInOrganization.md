---
name: Stop a codespace for an organization user
example: octokit.rest.codespaces.stopInOrganization({ org, username, codespace_name })
route: POST /orgs/{org}/members/{username}/codespaces/{codespace_name}/stop
scope: codespaces
type: API method
---

# Stop a codespace for an organization user

Stops a user's codespace.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

```js
octokit.rest.codespaces.stopInOrganization({
  org,
  username,
  codespace_name,
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
<tr><td>username</td><td>yes</td><td>

The handle for the GitHub user account.

</td></tr>
<tr><td>codespace_name</td><td>yes</td><td>

The name of the codespace.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/codespaces).
