---
name: Get a thread subscription for the authenticated user
example: octokit.rest.activity.getThreadSubscriptionForAuthenticatedUser({ thread_id })
route: GET /notifications/threads/{thread_id}/subscription
scope: activity
type: API method
---

# Get a thread subscription for the authenticated user

This checks to see if the current user is subscribed to a thread. You can also [get a repository subscription](https://docs.github.com/enterprise-cloud@latest//rest/reference/activity#get-a-repository-subscription).

Note that subscriptions are only generated if a user is participating in a conversation--for example, they've replied to the thread, were **@mentioned**, or manually subscribe to a thread.

```js
octokit.rest.activity.getThreadSubscriptionForAuthenticatedUser({
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

The unique identifier of the pull request thread.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/activity#get-a-thread-subscription-for-the-authenticated-user).
