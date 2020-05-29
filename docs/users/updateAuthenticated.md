---
name: Update the authenticated user
example: octokit.users.updateAuthenticated()
route: PATCH /user
scope: users
type: API method
---

# Update the authenticated user

**Note:** If your email is set to private and you send an `email` parameter as part of this request to update your profile, your privacy settings are still enforced: the email address will not be displayed on your public profile or via the API.

```js
octokit.users.updateAuthenticated();
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
    <tr><td>name</td><td>no</td><td>

The new name of the user.

</td></tr>
<tr><td>email</td><td>no</td><td>

The publicly visible email address of the user.

</td></tr>
<tr><td>blog</td><td>no</td><td>

The new blog URL of the user.

</td></tr>
<tr><td>company</td><td>no</td><td>

The new company of the user.

</td></tr>
<tr><td>location</td><td>no</td><td>

The new location of the user.

</td></tr>
<tr><td>hireable</td><td>no</td><td>

The new hiring availability of the user.

</td></tr>
<tr><td>bio</td><td>no</td><td>

The new short biography of the user.

</td></tr>
<tr><td>twitter_username</td><td>no</td><td>

The new Twitter username of the user.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/users/#update-the-authenticated-user).
