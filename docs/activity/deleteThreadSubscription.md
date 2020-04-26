---
name: Delete a thread subscription
example: octokit.activity.deleteThreadSubscription({ thread_id })
route: DELETE /notifications/threads/{thread_id}/subscription
scope: activity
type: API method
---

# Delete a thread subscription

Mutes all future notifications for a conversation until you comment on the thread or get an **@mention**. If you are watching the repository of the thread, you will still receive notifications. To ignore future notifications for a repository you are watching, use the [Set a thread subscription](https://developer.github.com/v3/activity/notifications/#set-a-thread-subscription) endpoint and set `ignore` to `true`.

```js
octokit.activity.deleteThreadSubscription({
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

thread_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/activity/notifications/#delete-a-thread-subscription).
