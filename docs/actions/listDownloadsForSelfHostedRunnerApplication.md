# List downloads for the self-hosted runner application

Lists binaries for the self-hosted runner application that you can download and run. Anyone with admin access to the repository can use this endpoint. GitHub Apps must have the `administration` permission to use this endpoint.

```js
octokit.actions.listDownloadsForSelfHostedRunnerApplication({
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

owner parameter

</td></tr>
<tr><td>repo</td><td>yes</td><td>

repo parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
