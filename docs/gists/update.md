---
name: Update a gist
example: octokit.gists.update({ gist_id })
route: PATCH /gists/{gist_id}
scope: gists
type: API method
---

# Update a gist

Allows you to update or delete a gist file and rename gist files. Files from the previous version of the gist that aren't explicitly changed during an edit are unchanged.

```js
octokit.gists.update({
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

</td></tr>
<tr><td>description</td><td>no</td><td>

A descriptive name for this gist.

</td></tr>
<tr><td>files</td><td>no</td><td>

The filenames and content that make up this gist.

</td></tr>
<tr><td>files.*</td><td>no</td><td>

</td></tr>
<tr><td>files.*.content</td><td>no</td><td>

The updated content of the file.

</td></tr>
<tr><td>files.*.filename</td><td>no</td><td>

The new name for this file. To delete a file, set the value of the filename to `null`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/gists/#update-a-gist).
