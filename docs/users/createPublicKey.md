# Create a public key

Adds a public SSH key to the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth, or OAuth with at least `write:public_key` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

```js
octokit.users.createPublicKey();
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
    <tr><td>title</td><td>no</td><td>

A descriptive name for the new key. Use a name that will help you recognize this key in your GitHub account. For example, if you're using a personal Mac, you might call this key "Personal MacBook Air".

</td></tr>
<tr><td>key</td><td>no</td><td>

The public SSH key to add to your GitHub account. See "[Generating a new SSH key](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)" for guidance on how to create a public SSH key.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/users/keys/#create-a-public-key).
