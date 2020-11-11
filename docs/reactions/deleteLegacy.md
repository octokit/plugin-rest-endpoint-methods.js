---
name: Delete a reaction (Legacy)
example: octokit.reactions.deleteLegacy({ reaction_id })
route: DELETE /reactions/{reaction_id}
scope: reactions
type: API method
---

# Delete a reaction (Legacy)

**This method is deprecated.**

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Reactions API. We recommend migrating your existing code to use the new delete reactions endpoints. For more information, see this [blog post](https://developer.github.com/changes/2020-02-26-new-delete-reactions-endpoints/).

OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), when deleting a [team discussion](https://docs.github.com/rest/reference/teams#discussions) or [team discussion comment](https://docs.github.com/rest/reference/teams#discussion-comments).

```js
octokit.reactions.deleteLegacy({
  reaction_id,
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
    <tr><td>reaction_id</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/reactions/#delete-a-reaction-legacy).
