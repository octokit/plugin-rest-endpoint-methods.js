---
name: Get a license
example: octokit.rest.licenses.get({ license })
route: GET /licenses/{license}
scope: licenses
type: API method
---

# Get a license

Gets information about a specific license. For more information, see "[Licensing a repository ](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)."

```js
octokit.rest.licenses.get({
  license,
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
    <tr><td>license</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/licenses/licenses#get-a-license).
