---
name: Update a gist
example: octokit.rest.gists.update({ gist_id })
route: PATCH /gists/{gist_id}
scope: gists
type: API method
---

# Update a gist

Allows you to update or delete a gist file and rename gist files. Files from the previous version of the gist that aren't explicitly changed during an edit are unchanged.

```js
octokit.rest.gists.update({
  gist_id,
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
    <tr><td>gist_id</td><td>yes</td><td>

The unique identifier of the gist.

</td></tr>
<tr><td>description</td><td>no</td><td>

Description of the gist

</td></tr>
<tr><td>files</td><td>no</td><td>

Names of files to be updated

</td></tr>
<tr><td>files.*</td><td>no</td><td>

</td></tr>
<tr><td>files.*.content</td><td>no</td><td>

The new content of the file

</td></tr>
<tr><td>files.*.filename</td><td>no</td><td>

The new filename for the file

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/gists/#update-a-gist).
