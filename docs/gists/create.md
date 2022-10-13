---
name: Create a gist
example: octokit.rest.gists.create({ files, files.*.content })
route: POST /gists
scope: gists
type: API method
---

# Create a gist

Allows you to add a new gist with one or more files.

**Note:** Don't name your files "gistfile" with a numerical suffix. This is the format of the automatic naming scheme that Gist uses internally.

```js
octokit.rest.gists.create({
        files,
files.*.content
      })
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
    <tr><td>description</td><td>no</td><td>

Description of the gist

</td></tr>
<tr><td>files</td><td>yes</td><td>

Names and content for the files that make up the gist

</td></tr>
<tr><td>files.*</td><td>no</td><td>

</td></tr>
<tr><td>files.*.content</td><td>yes</td><td>

Content of the file

</td></tr>
<tr><td>public</td><td>no</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/gists#create-a-gist).
