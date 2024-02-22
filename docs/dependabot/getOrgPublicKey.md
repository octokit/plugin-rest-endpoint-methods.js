---
name: Get an organization public key
example: octokit.rest.dependabot.getOrgPublicKey({ org })
route: GET /orgs/{org}/dependabot/secrets/public-key
scope: dependabot
type: API method
---

# Get an organization public key

Gets your public key, which you need to encrypt secrets. You need to
encrypt a secret before you can create or update secrets.

OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```js
octokit.rest.dependabot.getOrgPublicKey({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/dependabot/secrets#get-an-organization-public-key).
