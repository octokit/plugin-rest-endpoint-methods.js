---
name: Create a GPG key for the authenticated user
example: octokit.users.createGpgKeyForAuthenticated()
route: POST /user/gpg_keys
scope: users
type: API method
---

# Create a GPG key for the authenticated user

Adds a GPG key to the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth, or OAuth with at least `write:gpg_key` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

```js
octokit.users.createGpgKeyForAuthenticated();
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
    <tr><td>armored_public_key</td><td>no</td><td>

Your GPG key, generated in ASCII-armored format. See "[Generating a new GPG key](https://help.github.com/articles/generating-a-new-gpg-key/)" for help creating a GPG key.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/users/gpg_keys/#create-a-gpg-key-for-the-authenticated-user).
