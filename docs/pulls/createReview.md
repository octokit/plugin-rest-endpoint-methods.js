---
name: Create a review for a pull request
example: octokit.rest.pulls.createReview({ owner, repo, pull_number, comments[].path, comments[].body })
route: POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews
scope: pulls
type: API method
---

# Create a review for a pull request

Creates a review on a specified pull request.

This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)" and "[Best practices for using the REST API](https://docs.github.com/rest/guides/best-practices-for-using-the-rest-api)."

Pull request reviews created in the `PENDING` state are not submitted and therefore do not include the `submitted_at` property in the response. To create a pending review for a pull request, leave the `event` parameter blank. For more information about submitting a `PENDING` review, see "[Submit a review for a pull request](https://docs.github.com/rest/pulls/reviews#submit-a-review-for-a-pull-request)."

> [!NOTE]
> To comment on a specific line in a file, you need to first determine the position of that line in the diff. To see a pull request diff, add the `application/vnd.github.v3.diff` media type to the `Accept` header of a call to the [Get a pull request](https://docs.github.com/rest/pulls/pulls#get-a-pull-request) endpoint.

The `position` value equals the number of lines down from the first "@@" hunk header in the file you want to add a comment. The line just below the "@@" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.

This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."

- **`application/vnd.github-commitcomment.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type.
- **`application/vnd.github-commitcomment.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`.
- **`application/vnd.github-commitcomment.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`.
- **`application/vnd.github-commitcomment.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.

```js
octokit.rest.pulls.createReview({
        owner,
repo,
pull_number,
comments[].path,
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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>pull_number</td><td>yes</td><td>

The number that identifies the pull request.

</td></tr>
<tr><td>commit_id</td><td>no</td><td>

The SHA of the commit that needs a review. Not using the latest commit SHA may render your review comment outdated if a subsequent commit modifies the line you specify as the `position`. Defaults to the most recent commit in the pull request when you do not specify a value.

</td></tr>
<tr><td>body</td><td>no</td><td>

**Required** when using `REQUEST_CHANGES` or `COMMENT` for the `event` parameter. The body text of the pull request review.

</td></tr>
<tr><td>event</td><td>no</td><td>

The review action you want to perform. The review actions include: `APPROVE`, `REQUEST_CHANGES`, or `COMMENT`. By leaving this blank, you set the review action state to `PENDING`, which means you will need to [submit the pull request review](https://docs.github.com/rest/pulls/reviews#submit-a-review-for-a-pull-request) when you are ready.

</td></tr>
<tr><td>comments</td><td>no</td><td>

Use the following table to specify the location, destination, and contents of the draft review comment.

</td></tr>
<tr><td>comments[].path</td><td>yes</td><td>

The relative path to the file that necessitates a review comment.

</td></tr>
<tr><td>comments[].position</td><td>no</td><td>

The position in the diff where you want to add a review comment. Note this value is not the same as the line number in the file. The `position` value equals the number of lines down from the first "@@" hunk header in the file you want to add a comment. The line just below the "@@" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.

</td></tr>
<tr><td>comments[].body</td><td>yes</td><td>

Text of the review comment.

</td></tr>
<tr><td>comments[].line</td><td>no</td><td>

</td></tr>
<tr><td>comments[].side</td><td>no</td><td>

</td></tr>
<tr><td>comments[].start_line</td><td>no</td><td>

</td></tr>
<tr><td>comments[].start_side</td><td>no</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/pulls/reviews#create-a-review-for-a-pull-request).
