# Create a pull request review

This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.

**Note:** To comment on a specific line in a file, you need to first determine the _position_ of that line in the diff. The GitHub REST API v3 offers the `application/vnd.github.v3.diff` [media type](https://developer.github.com/v3/media/#commits-commit-comparison-and-pull-requests). To see a pull request diff, add this media type to the `Accept` header of a call to the [single pull request](https://developer.github.com/v3/pulls/#get-a-single-pull-request) endpoint.

The `position` value equals the number of lines down from the first "@@" hunk header in the file you want to add a comment. The line just below the "@@" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.

```js
octokit.pulls.createReview({
        owner,
repo,
pull_number,
comments[].path,
comments[].position,
comments[].body
      })
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
<tr><td>commit_id</td><td>no</td><td>

The SHA of the commit that needs a review. Not using the latest commit SHA may render your review comment outdated if a subsequent commit modifies the line you specify as the `position`. Defaults to the most recent commit in the pull request when you do not specify a value.

</td></tr>
<tr><td>body</td><td>no</td><td>

**Required** when using `REQUEST_CHANGES` or `COMMENT` for the `event` parameter. The body text of the pull request review.

</td></tr>
<tr><td>event</td><td>no</td><td>

The review action you want to perform. The review actions include: `APPROVE`, `REQUEST_CHANGES`, or `COMMENT`. By leaving this blank, you set the review action state to `PENDING`, which means you will need to [submit the pull request review](https://developer.github.com/v3/pulls/reviews/#submit-a-pull-request-review) when you are ready.

</td></tr>
<tr><td>comments</td><td>no</td><td>

Use the following table to specify the location, destination, and contents of the draft review comment.

</td></tr>
<tr><td>comments[].path</td><td>yes</td><td>

The relative path to the file that necessitates a review comment.

</td></tr>
<tr><td>comments[].position</td><td>yes</td><td>

The position in the diff where you want to add a review comment. Note this value is not the same as the line number in the file. For help finding the position value, read the note below.

</td></tr>
<tr><td>comments[].body</td><td>yes</td><td>

Text of the review comment.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/pulls/reviews/#create-a-pull-request-review).
