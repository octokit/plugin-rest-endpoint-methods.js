---
name: Get a gitignore template
example: octokit.rest.gitignore.getTemplate({ name })
route: GET /gitignore/templates/{name}
scope: gitignore
type: API method
---

# Get a gitignore template

Get the content of a gitignore template.

This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."

- **`application/vnd.github.raw+json`**: Returns the raw .gitignore contents.

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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/gitignore/gitignore#get-a-gitignore-template).
