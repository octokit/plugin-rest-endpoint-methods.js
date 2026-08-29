---

name: Merge a pull request asynchronously
example: octokit.rest.pulls.mergeAsync({ owner, repo, pull_number })
route: PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge-async
scope: pulls
type: API method
---

# Merge a pull request asynchronously

Merges a pull request into the base branch in the background. Merging in this way allows certain types of errors to be retried, and avoids the risk of timeouts for particularly complex merges.

This is the required method for merging stacked PRs, but also supports unstacked PRs. When using this endpoint to merge a stacked pull request, all pull requests in the stack up to and including the requested PR will be merged into the base branch.

The response includes a UUID that can be used to fetch the result of the merge. If another asynchronous merge request has already been made for this pull request, the UUID of that request will be returned instead with a 409 response status to indicate that the merge options may be different from those that were requested. If there isn't an existing asynchronous merge request, a 202 response status is used.

If the pull request is already merged, the merge commit OID will be returned immediately with a 200 status.

If the pull request cannot be merged (e.g. because it is closed, or still a draft) this result will be returned immediately with a 400 response status. Branch protection rules and repository rules are not run at this stage, only basic pull request state checks are performed.

```js
octokit.rest.pulls.mergeAsync({
  owner,
  repo,
  pull_number,
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
<tr><td>commit_title</td><td>no</td><td>

Title for the automatic commit message.

</td></tr>
<tr><td>commit_message</td><td>no</td><td>

Extra detail to append to automatic commit message.

</td></tr>
<tr><td>sha</td><td>no</td><td>

SHA that pull request head must match to allow merge. If not provided, the current head of the PR at the time of the request will be used; if the PR is pushed in between the merge being requested and being executed, the merge will be cancelled.

</td></tr>
<tr><td>merge_method</td><td>no</td><td>

The merge method to use.

</td></tr>
<tr><td>merge_action</td><td>no</td><td>

The action that will be taken to merge the pull request. `direct_merge` merges the pull request directly without using a merge queue; `merge_queue` adds the pull request to a merge queue; `default` selects the most appropriate option.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/pulls/pulls#merge-a-pull-request-asynchronously).
