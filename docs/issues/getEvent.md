---
name: Get an issue event
example: octokit.rest.issues.getEvent({ owner, repo, event_id })
route: GET /repos/{owner}/{repo}/issues/events/{event_id}
scope: issues
type: API method
---

# Get an issue event

```js
octokit.rest.issues.getEvent({
  owner,
  repo,
  event_id,
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
<tr><td>event_id</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/issues#get-an-issue-event).
