---
name: Delete a repository subscription
example: octokit.rest.activity.deleteRepoSubscription({ owner, repo })
route: DELETE /repos/{owner}/{repo}/subscription
scope: activity
type: API method
---

# Delete a repository subscription

This endpoint should only be used to stop watching a repository. To control whether or not you wish to receive notifications from a repository, [set the repository's subscription manually](https://docs.github.com/enterprise-cloud@latest//rest/reference/activity#set-a-repository-subscription).

```js
octokit.rest.activity.deleteRepoSubscription({
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/activity#delete-a-repository-subscription).
