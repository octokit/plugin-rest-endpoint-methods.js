# Get a single user

Provides publicly available information about someone with a GitHub account.

GitHub Apps with the `Plan` user permission can use this endpoint to retrieve information about a user's GitHub plan. The GitHub App must be authenticated as a user. See "[Identifying and authorizing users for GitHub Apps](https://developer.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)" for details about authentication. For an example response, see "[Response with GitHub plan information](https://developer.github.com/v3/users/#response-with-github-plan-information)."

The `email` key in the following response is the publicly visible email address from your GitHub [profile page](https://github.com/settings/profile). When setting up your profile, you can select a primary email address to be “public” which provides an email entry for this endpoint. If you do not set a public email address for `email`, then it will have a value of `null`. You only see publicly visible email addresses when authenticated with GitHub. For more information, see [Authentication](https://developer.github.com/v3/#authentication).

The Emails API enables you to list all of your email addresses, and toggle a primary email to be visible publicly. For more information, see "[Emails API](https://developer.github.com/v3/users/emails/)".

```js
octokit.users.getByUsername({
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

username parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/users/#get-a-single-user).
