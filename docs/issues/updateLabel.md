---
name: Update a label
example: octokit.rest.issues.updateLabel({ owner, repo, name })
route: PATCH /repos/{owner}/{repo}/labels/{name}
scope: issues
type: API method
---

# Update a label

Updates a label using the given label name.

```js
octokit.rest.issues.updateLabel({
  owner,
  repo,
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
    <tr><td>owner</td><td>yes</td><td>

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>name</td><td>yes</td><td>

</td></tr>
<tr><td>new_name</td><td>no</td><td>

The new name of the label. Emoji can be added to label names, using either native emoji or colon-style markup. For example, typing `:strawberry:` will render the emoji ![:strawberry:](https://github.githubassets.com/images/icons/emoji/unicode/1f353.png ":strawberry:"). For a full list of available emoji and codes, see "[Emoji cheat sheet](https://github.com/ikatyang/emoji-cheat-sheet)."

</td></tr>
<tr><td>color</td><td>no</td><td>

The [hexadecimal color code](http://www.color-hex.com/) for the label, without the leading `#`.

</td></tr>
<tr><td>description</td><td>no</td><td>

A short description of the label. Must be 100 characters or fewer.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/issues#update-a-label).
