# Search repositories

**This method is deprecated.**

Find repositories by keyword. Note, this legacy method does not follow the v3 pagination pattern. This method returns up to 100 results per page and pages can be fetched using the `start_page` parameter.

```js
octokit.search.reposLegacy(keyword);
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
    <tr><td>keyword</td><td>yes</td><td>

The search term.

</td></tr>
<tr><td>language</td><td>no</td><td>

Filter results by language.

</td></tr>
<tr><td>start_page</td><td>no</td><td>

The page number to fetch.

</td></tr>
<tr><td>sort</td><td>no</td><td>

The sort field. One of `stars`, `forks`, or `updated`. Default: results are sorted by best match.

</td></tr>
<tr><td>order</td><td>no</td><td>

The sort field. if `sort` param is provided. Can be either `asc` or `desc`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
