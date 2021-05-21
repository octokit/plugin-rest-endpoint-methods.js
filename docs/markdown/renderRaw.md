---
name: Render a Markdown document in raw mode
example: octokit.rest.markdown.renderRaw({ data })
route: POST /markdown/raw
scope: markdown
type: API method
---

# Render a Markdown document in raw mode

You must send Markdown as plain text (using a `Content-Type` header of `text/plain` or `text/x-markdown`) to this endpoint, rather than using JSON format. In raw mode, [GitHub Flavored Markdown](https://github.github.com/gfm/) is not supported and Markdown will be rendered in plain format like a README.md file. Markdown content must be 400 KB or less.

```js
octokit.rest.markdown.renderRaw({
  data,
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
    <tr><td>data</td><td>yes</td><td>

raw markdown text

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/markdown#render-a-markdown-document-in-raw-mode).
