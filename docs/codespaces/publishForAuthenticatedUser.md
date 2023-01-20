---
name: Create a repository from an unpublished codespace
example: octokit.rest.codespaces.publishForAuthenticatedUser({ codespace_name })
route: POST /user/codespaces/{codespace_name}/publish
scope: codespaces
type: API method
---

# Create a repository from an unpublished codespace

Publishes an unpublished codespace, creating a new repository and assigning it to the codespace.

The codespace's token is granted write permissions to the repository, allowing the user to push their changes.

This will fail for a codespace that is already published, meaning it has an associated repository.

You must authenticate using a personal access token with the `codespace` scope to use this endpoint.

GitHub Apps must have write access to the `codespaces` repository permission to use this endpoint.

```js
octokit.rest.codespaces.publishForAuthenticatedUser({
  codespace_name,
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
    <tr><td>codespace_name</td><td>yes</td><td>

The name of the codespace.

</td></tr>
<tr><td>name</td><td>no</td><td>

A name for the new repository.

</td></tr>
<tr><td>private</td><td>no</td><td>

Whether the new repository should be private.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/codespaces/codespaces#create-a-repository-from-an-unpublished-codespace).
