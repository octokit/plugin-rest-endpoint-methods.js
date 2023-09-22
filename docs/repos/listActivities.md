---
name: List repository activities
example: octokit.rest.repos.listActivities({ owner, repo })
route: GET /repos/{owner}/{repo}/activity
scope: repos
type: API method
---

# List repository activities

Lists a detailed history of changes to a repository, such as pushes, merges, force pushes, and branch changes, and associates these changes with commits and users.

For more information about viewing repository activity,
see "[Viewing repository activity](https://docs.github.com/repositories/viewing-activity-and-data-for-your-repository/viewing-repository-activity)."

```js
octokit.rest.repos.listActivities({
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
<tr><td>direction</td><td>no</td><td>

The direction to sort the results by.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>before</td><td>no</td><td>

A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor.

</td></tr>
<tr><td>after</td><td>no</td><td>

A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor.

</td></tr>
<tr><td>ref</td><td>no</td><td>

The Git reference for the activities you want to list.

The `ref` for a branch can be formatted either as `refs/heads/BRANCH_NAME` or `BRANCH_NAME`, where `BRANCH_NAME` is the name of your branch.

</td></tr>
<tr><td>actor</td><td>no</td><td>

The GitHub username to use to filter by the actor who performed the activity.

</td></tr>
<tr><td>time_period</td><td>no</td><td>

The time period to filter by.

For example, `day` will filter for activity that occurred in the past 24 hours, and `week` will filter for activity that occurred in the past 7 days (168 hours).

</td></tr>
<tr><td>activity_type</td><td>no</td><td>

The activity type to filter by.

For example, you can choose to filter by "force_push", to see all force pushes to the repository.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/repos/repos#list-repository-activities).
