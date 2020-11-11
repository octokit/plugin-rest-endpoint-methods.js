---
name: Mark notifications as read
example: octokit.activity.markNotificationsAsRead()
route: PUT /notifications
scope: activity
type: API method
---

# Mark notifications as read

Marks all notifications as "read" removes it from the [default view on GitHub](https://github.com/notifications). If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub will run an asynchronous process to mark notifications as "read." To check whether any "unread" notifications remain, you can use the [List notifications for the authenticated user](https://docs.github.com/rest/reference/activity#list-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.

```js
octokit.activity.markNotificationsAsRead();
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
    <tr><td>last_read_at</td><td>no</td><td>

Describes the last point that notifications were checked.

</td></tr>
<tr><td>read</td><td>no</td><td>

Whether the notification has been read.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/activity#mark-notifications-as-read).
