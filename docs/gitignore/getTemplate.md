---
name: Get a gitignore template
example: octokit.rest.gitignore.getTemplate({ name })
route: GET /gitignore/templates/{name}
scope: gitignore
type: API method
---

# Get a gitignore template

The API also allows fetching the source of a single template.
Use the raw [media type](https://docs.github.com/rest/overview/media-types/) to get the raw contents.

```js
octokit.rest.gitignore.getTemplate({
  name,
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
    <tr><td>name</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/gitignore#get-a-gitignore-template).
