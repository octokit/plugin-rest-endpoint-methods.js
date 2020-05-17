---
name: Block a user
example: octokit.orgs.blockUser({ org, username })
route: PUT /orgs/{org}/blocks/{username}
scope: orgs
type: API method
---

# Block a user

```js
octokit.orgs.blockUser({
  org,
  username,
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

</td></tr>
<tr><td>username</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/orgs/blocking/#block-a-user).
