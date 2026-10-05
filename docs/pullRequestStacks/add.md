---

name: Add pull requests to a pull request stack
example: octokit.rest.pullRequestStacks.add({ owner, repo, stack_number, pull_requests })
route: POST /repos/{owner}/{repo}/stacks/{stack_number}/add
scope: pullRequestStacks
type: API method
---

# Add pull requests to a pull request stack

Appends an ordered list of pull request numbers onto the top of an existing
stack. Provide only the pull requests you want to add, from the current top of
the stack upward. The first new pull request's base ref must match the current
top pull request's head ref.

```js
octokit.rest.pullRequestStacks.add({
  owner,
  repo,
  stack_number,
  pull_requests,
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
<tr><td>pull_requests</td><td>yes</td><td>

An ordered list of pull request numbers to append to the stack, from the current top upward.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/pulls/stacks#add-pull-requests-to-a-pull-request-stack).
