---
name: Create a label
example: octokit.issues.createLabel({ owner, repo, name, color })
route: POST /repos/{owner}/{repo}/labels
scope: issues
type: API method
---

# Create a label

```js
octokit.issues.createLabel({
  owner,
  repo,
  name,
  color,
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

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
<tr><td>name</td><td>yes</td><td>

The name of the label. Emoji can be added to label names, using either native emoji or colon-style markup. For example, typing `:strawberry:` will render the emoji ![:strawberry:](https://github.githubassets.com/images/icons/emoji/unicode/1f353.png ":strawberry:"). For a full list of available emoji and codes, see [emoji-cheat-sheet.com](http://emoji-cheat-sheet.com/).

</td></tr>
<tr><td>color</td><td>yes</td><td>

The [hexadecimal color code](http://www.color-hex.com/) for the label, without the leading `#`.

</td></tr>
<tr><td>description</td><td>no</td><td>

A short description of the label.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/issues/labels/#create-a-label).
