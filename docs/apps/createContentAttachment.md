# Create a content attachment

Creates an attachment under a content reference URL in the body or comment of an issue or pull request. Use the `id` of the content reference from the [`content_reference` event](https://developer.github.com/v3/activity/events/types/#contentreferenceevent) to create an attachment.

The app must create a content attachment within six hours of the content reference URL being posted. See "[Using content attachments](https://developer.github.com/apps/using-content-attachments/)" for details about content attachments.

You must use an [installation access token](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

This example creates a content attachment for the domain `https://errors.ai/`.

```js
octokit.apps.createContentAttachment({
  content_reference_id,
  title,
  body,
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
    <tr><td>content_reference_id</td><td>yes</td><td>

content_reference_id parameter

</td></tr>
<tr><td>title</td><td>yes</td><td>

The title of the content attachment displayed in the body or comment of an issue or pull request.

</td></tr>
<tr><td>body</td><td>yes</td><td>

The body text of the content attachment displayed in the body or comment of an issue or pull request. This parameter supports markdown.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/apps/installations/#create-a-content-attachment).
