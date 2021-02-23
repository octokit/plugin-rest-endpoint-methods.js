---
name: Get all gitignore templates
example: octokit.gitignore.getAllTemplates()
route: GET /gitignore/templates
scope: gitignore
type: API method
---

# Get all gitignore templates

List all templates available to pass as an option when [creating a repository](https://docs.github.com/rest/reference/repos#create-a-repository-for-the-authenticated-user).

```js
octokit.gitignore.getAllTemplates();
```

## Parameters

This endpoint has no parameters

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/gitignore/#get-all-gitignore-templates).
