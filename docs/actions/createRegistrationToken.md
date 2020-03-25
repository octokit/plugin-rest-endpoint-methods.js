# Create a registration token

Returns a token that you can pass to the `config` script. The token expires after one hour. Anyone with admin access to the repository can use this endpoint. GitHub Apps must have the `administration` permission to use this endpoint.

Configure your self-hosted runner, replacing TOKEN with the registration token provided by this endpoint.

```js
octokit.actions.createRegistrationToken({
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

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/actions/self_hosted_runners/#create-a-registration-token).
