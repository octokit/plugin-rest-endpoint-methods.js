# Search issues and pull requests

**Deprecated:** This method has been renamed to search.issuesAndPullRequests

Find issues by state and keyword. This method returns up to 100 results [per page](https://developer.github.com/v3/#pagination).

When searching for issues, you can get text match metadata for the issue **title**, issue **body**, and issue **comment body** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://developer.github.com/v3/search/#text-match-metadata).

Let's say you want to find the oldest unresolved Python bugs on Windows. Your query might look something like this.

In this query, we're searching for the keyword `windows`, within any open issue that's labeled as `bug`. The search runs across repositories whose primary language is Python. We’re sorting by creation date in ascending order, so that the oldest issues appear first in the search results.

```js
octokit.search.issues({
  q
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

The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](https://developer.github.com/v3/search/#constructing-a-search-query). See "[Searching issues and pull requests](https://help.github.com/articles/searching-issues-and-pull-requests/)" for a detailed list of qualifiers.

</td></tr>
<tr><td>sort</td><td>no</td><td>

Sorts the results of your query by the number of `comments`, `reactions`, `reactions-+1`, `reactions--1`, `reactions-smile`, `reactions-thinking_face`, `reactions-heart`, `reactions-tada`, or `interactions`. You can also sort results by how recently the items were `created` or `updated`, Default: [best match](https://developer.github.com/v3/search/#ranking-search-results)

</td></tr>
<tr><td>order</td><td>no</td><td>

Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
