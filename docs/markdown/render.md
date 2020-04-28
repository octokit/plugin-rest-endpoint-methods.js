---
name: Render an arbitrary Markdown document
example: octokit.markdown.render({ text })
route: POST /markdown
scope: markdown
type: API method
---

# Render an arbitrary Markdown document

```js
octokit.markdown.render({
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

The Markdown text to render in HTML. Markdown content must be 400 KB or less.

</td></tr>
<tr><td>mode</td><td>no</td><td>

The rendering mode. Can be either:  
\* `markdown` to render a document in plain Markdown, just like README.md files are rendered.  
\* `gfm` to render a document in [GitHub Flavored Markdown](https://github.github.com/gfm/), which creates links for user mentions as well as references to SHA-1 hashes, issues, and pull requests.

</td></tr>
<tr><td>context</td><td>no</td><td>

The repository context to use when creating references in `gfm` mode. Omit this parameter when using `markdown` mode.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/markdown/#render-an-arbitrary-markdown-document).
