# Lock an issue

Users with push access can lock an issue or pull request's conversation.

Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://developer.github.com/v3/#http-verbs)."

```js
octokit.issues.lock(owner, repo, issue_number);
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
<tr><td>issue_number</td><td>yes</td><td>

issue_number parameter

</td></tr>
<tr><td>lock_reason</td><td>no</td><td>

The reason for locking the issue or pull request conversation. Lock will fail if you don't use one of these reasons:  
\* `off-topic`  
\* `too heated`  
\* `resolved`  
\* `spam`

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
