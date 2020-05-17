---
name: Mark a thread as read
example: octokit.activity.markThreadAsRead({ thread_id })
route: PATCH /notifications/threads/{thread_id}
scope: activity
type: API method
---

# Mark a thread as read

```js
octokit.activity.markThreadAsRead({
  thread_id,
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
    <tr><td>thread_id</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/activity/notifications/#mark-a-thread-as-read).
