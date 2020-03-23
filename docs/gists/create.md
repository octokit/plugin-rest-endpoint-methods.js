# Create a gist

Allows you to add a new gist with one or more files.

**Note:** Don't name your files "gistfile" with a numerical suffix. This is the format of the automatic naming scheme that Gist uses internally.

```js
octokit.gists.create({
  files,
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
    <tr><td>files</td><td>yes</td><td>

The filenames and content of each file in the gist. The keys in the `files` object represent the filename and have the type `string`.

</td></tr>
<tr><td>files.content</td><td>no</td><td>

The content of the file.

</td></tr>
<tr><td>description</td><td>no</td><td>

A descriptive name for this gist.

</td></tr>
<tr><td>public</td><td>no</td><td>

When `true`, the gist will be public and available for anyone to see.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
