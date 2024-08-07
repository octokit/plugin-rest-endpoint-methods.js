---
name: Get contextual information for a user
example: octokit.rest.users.getContextForUser({ username })
route: GET /users/{username}/hovercard
scope: users
type: API method
---

# Get contextual information for a user

Provides hovercard information. You can find out more about someone in relation to their pull requests, issues, repositories, and organizations.

The `subject_type` and `subject_id` parameters provide context for the person's hovercard, which returns more information than without the parameters. For example, if you wanted to find out more about `octocat` who owns the `Spoon-Knife` repository, you would use a `subject_type` value of `repository` and a `subject_id` value of `1300192` (the ID of the `Spoon-Knife` repository).

OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```js
octokit.rest.users.getContextForUser({
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
    <tr><td>username</td><td>yes</td><td>

The handle for the GitHub user account.

</td></tr>
<tr><td>subject_type</td><td>no</td><td>

Identifies which additional information you'd like to receive about the person's hovercard. Can be `organization`, `repository`, `issue`, `pull_request`. **Required** when using `subject_id`.

</td></tr>
<tr><td>subject_id</td><td>no</td><td>

Uses the ID for the `subject_type` you specified. **Required** when using `subject_type`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/users/users#get-contextual-information-for-a-user).
