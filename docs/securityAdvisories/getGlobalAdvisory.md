---
name: Get a global security advisory
example: octokit.rest.securityAdvisories.getGlobalAdvisory({ ghsa_id })
route: GET /advisories/{ghsa_id}
scope: securityAdvisories
type: API method
---

# Get a global security advisory

Gets a global security advisory using its GitHub Security Advisory (GHSA) identifier.

```js
octokit.rest.securityAdvisories.getGlobalAdvisory({
  ghsa_id,
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
    <tr><td>ghsa_id</td><td>yes</td><td>

The GHSA (GitHub Security Advisory) identifier of the advisory.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/security-advisories/global-advisories#get-a-global-security-advisory).
