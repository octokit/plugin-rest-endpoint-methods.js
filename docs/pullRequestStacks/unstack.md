---

name: Remove pull requests from a pull request stack
example: octokit.rest.pullRequestStacks.unstack({ owner, repo, stack_number })
route: POST /repos/{owner}/{repo}/stacks/{stack_number}/unstack
scope: pullRequestStacks
type: API method
---

# Remove pull requests from a pull request stack

Removes the unmerged pull requests from a stack. Pull requests that cannot be
unstacked (for example, those that are queued for merge) are left in place. When pull requests remain in the stack, the updated
stack is returned with a `200`. When no pull requests remain, the stack is
dissolved and a `204` is returned.

```js
octokit.rest.pullRequestStacks.unstack({
  owner,
  repo,
  stack_number,
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
<tr><td>stack_number</td><td>yes</td><td>

The number that identifies the pull request stack.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/pulls/stacks#remove-pull-requests-from-a-pull-request-stack).
