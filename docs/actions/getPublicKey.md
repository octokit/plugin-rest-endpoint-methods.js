# Get your public key

Gets your public key, which you must store. You need your public key to use other secrets endpoints. Use the returned `key` to encrypt your secrets. Anyone with read access to the repository can use this endpoint. GitHub Apps must have the `secrets` permission to use this endpoint.

```js
octokit.actions.getPublicKey(owner, repo);
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
