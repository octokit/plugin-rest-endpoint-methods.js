---
name: Create a pull request
example: octokit.rest.pulls.create({ owner, repo, head, base })
route: POST /repos/{owner}/{repo}/pulls
scope: pulls
type: API method
---

# Create a pull request

Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

To open or update a pull request in a public repository, you must have write access to the head or the source branch. For organization-owned repositories, you must be a member of the organization that owns the repository to open or update a pull request.

This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-cloud@latest//rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.

```js
octokit.rest.pulls.create({
  owner,
  repo,
  head,
  base,
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
<tr><td>title</td><td>no</td><td>

The title of the new pull request. Required unless `issue` is specified.

</td></tr>
<tr><td>head</td><td>yes</td><td>

The name of the branch where your changes are implemented. For cross-repository pull requests in the same network, namespace `head` with a user like this: `username:branch`.

</td></tr>
<tr><td>base</td><td>yes</td><td>

The name of the branch you want the changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repository that requests a merge to a base of another repository.

</td></tr>
<tr><td>body</td><td>no</td><td>

The contents of the pull request.

</td></tr>
<tr><td>maintainer_can_modify</td><td>no</td><td>

Indicates whether [maintainers can modify](https://docs.github.com/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork/) the pull request.

</td></tr>
<tr><td>draft</td><td>no</td><td>

Indicates whether the pull request is a draft. See "[Draft Pull Requests](https://docs.github.com/en/articles/about-pull-requests#draft-pull-requests)" in the GitHub Help documentation to learn more.

</td></tr>
<tr><td>issue</td><td>no</td><td>

An issue in the repository to convert to a pull request. The issue title, body, and comments will become the title, body, and comments on the new pull request. Required unless `title` is specified.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/pulls#create-a-pull-request).
