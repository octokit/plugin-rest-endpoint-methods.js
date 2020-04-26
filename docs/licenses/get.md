---
name: Get an individual license
example: octokit.licenses.get({ license })
route: GET /licenses/{license}
scope: licenses
type: API method
---

# Get an individual license

```js
octokit.licenses.get({
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

license parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/licenses/#get-an-individual-license).
