---
name: Get a thread
example: octokit.rest.activity.getThread({ thread_id })
route: GET /notifications/threads/{thread_id}
scope: activity
type: API method
---

# Get a thread

```js
octokit.rest.activity.getThread({
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

The unique identifier of the thread.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/activity#get-a-thread).
