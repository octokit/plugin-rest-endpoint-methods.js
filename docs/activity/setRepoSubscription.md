---
name: Set a repository subscription
example: octokit.activity.setRepoSubscription({ owner, repo })
route: PUT /repos/{owner}/{repo}/subscription
scope: activity
type: API method
---

# Set a repository subscription

If you would like to watch a repository, set `subscribed` to `true`. If you would like to ignore notifications made within a repository, set `ignored` to `true`. If you would like to stop watching a repository, [delete the repository's subscription](https://developer.github.com/v3/activity/watching/#delete-a-repository-subscription) completely.

```js
octokit.activity.setRepoSubscription({
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

owner parameter

</td></tr>
<tr><td>repo</td><td>yes</td><td>

repo parameter

</td></tr>
<tr><td>subscribed</td><td>no</td><td>

Determines if notifications should be received from this repository.

</td></tr>
<tr><td>ignored</td><td>no</td><td>

Determines if all notifications should be blocked from this repository.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/activity/watching/#set-a-repository-subscription).
