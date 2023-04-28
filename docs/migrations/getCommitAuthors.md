---
name: Get commit authors
example: octokit.rest.migrations.getCommitAuthors({ owner, repo })
route: GET /repos/{owner}/{repo}/import/authors
scope: migrations
type: API method
---

# Get commit authors

Each type of source control system represents authors in a different way. For example, a Git commit author has a display name and an email address, but a Subversion commit author just has a username. The GitHub Importer will make the author information valid, but the author might not be correct. For example, it will change the bare Subversion username `hubot` into something like `hubot <hubot@12341234-abab-fefe-8787-fedcba987654>`.

This endpoint and the [Map a commit author](https://docs.github.com/rest/migrations/source-imports#map-a-commit-author) endpoint allow you to provide correct Git author information.

**Warning:** Support for importing Mercurial, Subversion and Team Foundation Version Control repositories will end
on October 17, 2023. For more details, see [changelog](https://gh.io/github-importer-non-git-eol). In the coming weeks, we will update
these docs to reflect relevant changes to the API and will contact all integrators using the "Source imports" API.

```js
octokit.rest.migrations.getCommitAuthors({
  owner,
  repo,
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

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>since</td><td>no</td><td>

A user ID. Only return users with an ID greater than this ID.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/migrations/source-imports#get-commit-authors).
