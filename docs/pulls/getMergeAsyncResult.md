---

name: Get the result of an asynchronous merge
example: octokit.rest.pulls.getMergeAsyncResult({ owner, repo, pull_number, uuid })
route: GET /repos/{owner}/{repo}/pulls/{pull_number}/merge-async/{uuid}
scope: pulls
type: API method
---

# Get the result of an asynchronous merge

Fetches the current result of an asynchronous merge request, identified by the UUID that was returned when the merge was requested.

While the merge is still queued, the response includes the UUID, merge method, and expected head SHA of the request. Once the merge has completed, the response reports whether it was merged, including the merge commit OID on success or a message describing why it could not be merged on failure.

The result of an asynchronous merge request is retained for 24 hours after its most recent update. After this window the request expires and this endpoint returns a `404` response for its UUID.

```js
octokit.rest.pulls.getMergeAsyncResult({
  owner,
  repo,
  pull_number,
  uuid,
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
<tr><td>pull_number</td><td>yes</td><td>

The number that identifies the pull request.

</td></tr>
<tr><td>uuid</td><td>yes</td><td>

The UUID of the asynchronous merge request, as returned when the merge was requested.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/pulls/pulls#get-the-result-of-an-asynchronous-merge).
