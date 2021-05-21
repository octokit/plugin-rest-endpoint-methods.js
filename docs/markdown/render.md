---
name: Render a Markdown document
example: octokit.rest.markdown.render({ text })
route: POST /markdown
scope: markdown
type: API method
---

# Render a Markdown document

```js
octokit.rest.markdown.render({
  text,
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
    <tr><td>text</td><td>yes</td><td>

The Markdown text to render in HTML.

</td></tr>
<tr><td>mode</td><td>no</td><td>

The rendering mode.

</td></tr>
<tr><td>context</td><td>no</td><td>

The repository context to use when creating references in `gfm` mode.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/markdown#render-a-markdown-document).
