---
name: Get all custom properties for an organization
example: octokit.rest.orgs.getAllCustomProperties({ org })
route: GET /orgs/{org}/properties/schema
scope: orgs
type: API method
---

# Get all custom properties for an organization

Gets all custom properties defined for an organization.
You must be an organization owner to use this endpoint.

```js
octokit.rest.orgs.getAllCustomProperties({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/properties#get-all-custom-properties-for-an-organization).
