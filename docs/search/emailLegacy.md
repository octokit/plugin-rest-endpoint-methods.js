# Email search

**This method is deprecated.**

This API call is added for compatibility reasons only. There's no guarantee that full email searches will always be available. The `@` character in the address must be left unencoded. Searches only against public email addresses (as configured on the user's GitHub profile).

```js
octokit.search.emailLegacy({
  email
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
    <tr><td>email</td><td>yes</td><td>

The email address.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
