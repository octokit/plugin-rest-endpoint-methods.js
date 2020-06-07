---
name: List organizations
example: octokit.orgs.list()
route: GET /organizations
scope: orgs
type: API method
---

# List organizations

Lists all organizations, in the order that they were created on GitHub.

**Note:** Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://developer.github.com/v3/#link-header) to get the URL for the next page of organizations.

```js
octokit.orgs.list();
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
    <tr><td>since</td><td>no</td><td>

The integer ID of the last organization that you've seen.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/orgs/#list-organizations).
