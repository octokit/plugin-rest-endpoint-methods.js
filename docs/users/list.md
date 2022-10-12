---
name: List users
example: octokit.rest.users.list()
route: GET /users
scope: users
type: API method
---

# List users

Lists all users, in the order that they signed up on GitHub Enterprise Cloud. This list includes personal user accounts and organization accounts.

Note: Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of users.

```js
octokit.rest.users.list();
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
    <tr><td>since</td><td>no</td><td>

A user ID. Only return users with an ID greater than this ID.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/users#list-users).
