---

name: Get stargazer count
example: octokit.rest.activity.getStargazerCountForRepo({ owner, repo })
route: GET /repos/{owner}/{repo}/stargazers/count
scope: activity
type: API method
---

# Get stargazer count

Gets the current number of users who have starred the repository. Users who previously starred the repository but later removed their star are not included.

```js
octokit.rest.activity.getStargazerCountForRepo({
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

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/activity/starring#get-stargazer-count).
