---
name: Add a repository collaborator
example: octokit.repos.addCollaborator({ owner, repo, username })
route: PUT /repos/{owner}/{repo}/collaborators/{username}
scope: repos
type: API method
---

# Add a repository collaborator

This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.

For more information the permission levels, see "[Repository permission levels for an organization](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)".

Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."

The invitee will receive a notification that they have been invited to the repository, which they must accept or decline. They may do this via the notifications page, the email they receive, or by using the [repository invitations API endpoints](https://docs.github.com/rest/reference/repos#invitations).

**Rate limits**

To prevent abuse, you are limited to sending 50 invitations to a repository per 24 hour period. Note there is no limit if you are inviting organization members to an organization repository.

```js
octokit.repos.addCollaborator({
  owner,
  repo,
  username
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

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
<tr><td>username</td><td>yes</td><td>

</td></tr>
<tr><td>permission</td><td>no</td><td>

The permission to grant the collaborator. **Only valid on organization-owned repositories.** Can be one of:  
\* `pull` - can pull, but not push to or administer this repository.  
\* `push` - can pull and push, but not administer this repository.  
\* `admin` - can pull, push and administer this repository.  
\* `maintain` - Recommended for project managers who need to manage the repository without access to sensitive or destructive actions.  
\* `triage` - Recommended for contributors who need to proactively manage issues and pull requests without write access.

</td></tr>
<tr><td>permissions</td><td>no</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#add-a-repository-collaborator).
