---
name: Search topics
example: octokit.search.topics({ q })
route: GET /search/topics
scope: search
type: API method
---

# Search topics

Find topics via various criteria. Results are sorted by best match. This method returns up to 100 results [per page](https://developer.github.com/v3/#pagination).

When searching for topics, you can get text match metadata for the topic's **short_description**, **description**, **name**, or **display_name** field when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://developer.github.com/v3/search/#text-match-metadata).

See "[Searching topics](https://help.github.com/articles/searching-topics/)" for a detailed list of qualifiers.

Suppose you want to search for topics related to Ruby that are featured on [https://github.com/topics](https://github.com/topics). Your query might look like this:

In this request, we're searching for topics with the keyword `ruby`, and we're limiting the results to find only topics that are featured. The topics that are the best match for the query appear first in the search results.

**Note:** A search for featured Ruby topics only has 6 total results, so a [Link header](https://developer.github.com/v3/#link-header) indicating pagination is not included in the response.

```js
octokit.search.topics({
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
    <tr><td>q</td><td>yes</td><td>

The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](https://developer.github.com/v3/search/#constructing-a-search-query).

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/search/#search-topics).
