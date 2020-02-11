# Merge a pull request (Merge Button)

This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.

```js
octokit.pulls.merge({
  owner,
  repo,
  pull_number
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
    <tr><td>owner</td><td>yes</td><td>

owner parameter

</td></tr>
<tr><td>repo</td><td>yes</td><td>

repo parameter

</td></tr>
<tr><td>pull_number</td><td>yes</td><td>

pull_number parameter

</td></tr>
<tr><td>commit_title</td><td>no</td><td>

Title for the automatic commit message.

</td></tr>
<tr><td>commit_message</td><td>no</td><td>

Extra detail to append to automatic commit message.

</td></tr>
<tr><td>sha</td><td>no</td><td>

SHA that pull request head must match to allow merge.

</td></tr>
<tr><td>merge_method</td><td>no</td><td>

Merge method to use. Possible values are `merge`, `squash` or `rebase`. Default is `merge`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
