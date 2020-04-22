# List runner applications for an organization

**Warning:** The self-hosted runners API for organizations is currently in public beta and subject to change.

Lists binaries for the runner application that you can download and run. Anyone with admin access to the organization can use this endpoint. GitHub Apps must have the `self-hosted runners:read` organization permission to use this endpoint.

```js
octokit.actions.listRunnerApplicationsForOrg({
  org,
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
    <tr><td>org</td><td>yes</td><td>

org parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/actions/self-hosted-runners/#list-runner-applications-for-an-organization).
