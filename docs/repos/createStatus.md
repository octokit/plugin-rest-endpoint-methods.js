# Create a status

Users with push access in a repository can create commit statuses for a given SHA.

Note: there is a limit of 1000 statuses per `sha` and `context` within a repository. Attempts to create more than 1000 statuses will result in a validation error.

```js
octokit.repos.createStatus({
  owner,
  repo,
  sha,
  state
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
<tr><td>sha</td><td>yes</td><td>

sha parameter

</td></tr>
<tr><td>state</td><td>yes</td><td>

The state of the status. Can be one of `error`, `failure`, `pending`, or `success`.

</td></tr>
<tr><td>target_url</td><td>no</td><td>

The target URL to associate with this status. This URL will be linked from the GitHub UI to allow users to easily see the source of the status.  
For example, if your continuous integration system is posting build status, you would want to provide the deep link for the build output for this specific SHA:  
`http://ci.example.com/user/repo/build/sha`

</td></tr>
<tr><td>description</td><td>no</td><td>

A short description of the status.

</td></tr>
<tr><td>context</td><td>no</td><td>

A string label to differentiate this status from the status of other systems.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
