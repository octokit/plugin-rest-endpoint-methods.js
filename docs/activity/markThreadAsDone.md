---
name: Mark a thread as done
example: octokit.rest.activity.markThreadAsDone({ thread_id })
route: DELETE /notifications/threads/{thread_id}
scope: activity
type: API method
---

# Mark a thread as done

Marks a thread as "done." Marking a thread as "done" is equivalent to marking a notification in your notification inbox on GitHub as done: https://github.com/notifications.

```js
octokit.rest.activity.markThreadAsDone({
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

The unique identifier of the notification thread. This corresponds to the value returned in the `id` field when you retrieve notifications (for example with the [`GET /notifications` operation](https://docs.github.com/rest/activity/notifications#list-notifications-for-the-authenticated-user)).

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/activity/notifications#mark-a-thread-as-done).
