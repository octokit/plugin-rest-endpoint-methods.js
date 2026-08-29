---

name: Create a pull request stack
example: octokit.rest.pullRequestStacks.create({ owner, repo, pull_requests })
route: POST /repos/{owner}/{repo}/stacks
scope: pullRequestStacks
type: API method
---

# Create a pull request stack

Creates a stack from an ordered list of pull request numbers. Provide the pull
request numbers from the bottom of the stack to the top. Each pull request's
base ref must match the previous pull request's head ref.

```js
octokit.rest.pullRequestStacks.create({
  owner,
  repo,
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
<tr><td>pull_requests</td><td>yes</td><td>

An ordered list of pull request numbers forming the stack from bottom to top.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/pulls/stacks#create-a-pull-request-stack).
