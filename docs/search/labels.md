---
name: Search labels
example: octokit.rest.search.labels({ repository_id, q })
route: GET /search/labels
scope: search
type: API method
---

# Search labels

Find labels in a repository with names or descriptions that match search keywords. Returns up to 100 results [per page](https://docs.github.com/rest/overview/resources-in-the-rest-api#pagination).

When searching for labels, you can get text match metadata for the label **name** and **description** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/rest/reference/search#text-match-metadata).

For example, if you want to find labels in the `linguist` repository that match `bug`, `defect`, or `enhancement`. Your query might look like this:

`q=bug+defect+enhancement&repository_id=64778136`

The labels that best match the query appear first in the search results.

```js
octokit.rest.search.labels({
  repository_id,
  q,
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
    <tr><td>repository_id</td><td>yes</td><td>

The id of the repository.

</td></tr>
<tr><td>q</td><td>yes</td><td>

The search keywords. This endpoint does not accept qualifiers in the query. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/rest/reference/search#constructing-a-search-query).

</td></tr>
<tr><td>sort</td><td>no</td><td>

Sorts the results of your query by when the label was `created` or `updated`. Default: [best match](https://docs.github.com/rest/reference/search#ranking-search-results)

</td></tr>
<tr><td>order</td><td>no</td><td>

Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/search#search-labels).
