---
name: Delete email address(es)
example: octokit.users.deleteEmails({ emails })
route: DELETE /user/emails
scope: users
type: API method
---

# Delete email address(es)

This endpoint is accessible with the `user` scope.

```js
octokit.users.deleteEmails({
  emails,
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
    <tr><td>emails</td><td>yes</td><td>

Deletes one or more email addresses from your GitHub account. Must contain at least one email address. **Note:** Alternatively, you can pass a single email address or an `array` of emails addresses directly, but we recommend that you pass an object using the `emails` key.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/users/emails/#delete-email-addresses).
