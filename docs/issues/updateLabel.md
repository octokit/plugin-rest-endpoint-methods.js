# Update a label

```js
octokit.issues.updateLabel({
  owner,
  repo,
  current_name
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

owner parameter

</td></tr>
<tr><td>repo</td><td>yes</td><td>

repo parameter

</td></tr>
<tr><td>current_name</td><td>yes</td><td>

current_name parameter

</td></tr>
<tr><td>color</td><td>no</td><td>

The [hexadecimal color code](http://www.color-hex.com/) for the label, without the leading `#`.

</td></tr>
<tr><td>name</td><td>no</td><td>

</td></tr>
<tr><td>description</td><td>no</td><td>

A short description of the label.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
