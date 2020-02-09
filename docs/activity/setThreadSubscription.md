# Set a thread subscription

This lets you subscribe or unsubscribe from a conversation.

```js
octokit.activity.setThreadSubscription(thread_id);
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
<tr><td>ignored</td><td>no</td><td>

Unsubscribes and subscribes you to a conversation. Set `ignored` to `true` to block all notifications from this thread.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
