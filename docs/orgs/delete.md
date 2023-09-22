---
name: Delete an organization
example: octokit.rest.orgs.delete({ org })
route: DELETE /orgs/{org}
scope: orgs
type: API method
---

# Delete an organization

Deletes an organization and all its repositories.

The organization login will be unavailable for 90 days after deletion.

Please review the Terms of Service regarding account deletion before using this endpoint:

https://docs.github.com/site-policy/github-terms/github-terms-of-service

```js
octokit.rest.orgs.delete({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/orgs#delete-an-organization).
