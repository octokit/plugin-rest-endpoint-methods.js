---
name: List public organization events
example: octokit.rest.activity.listPublicOrgEvents({ org })
route: GET /orgs/{org}/events
scope: activity
type: API method
---

# List public organization events

> [!NOTE]
> This API is not built to serve real-time use cases. Depending on the time of day, event latency can be anywhere from 30s to 6h.

```js
octokit.rest.activity.listPublicOrgEvents({
  org,
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
    <tr><td>org</td><td>yes</td><td>

The organization name. The name is not case sensitive.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>page</td><td>no</td><td>

The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/activity/events#list-public-organization-events).
