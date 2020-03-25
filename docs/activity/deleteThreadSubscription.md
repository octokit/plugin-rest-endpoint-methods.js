# Delete a thread subscription

Mutes all future notifications for a conversation until you comment on the thread or get **@mention**ed.

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
