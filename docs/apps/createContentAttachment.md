---
name: Create a content attachment
example: octokit.rest.apps.createContentAttachment({ content_reference_id, title, body })
route: POST /content_references/{content_reference_id}/attachments
scope: apps
type: API method
---

# Create a content attachment

Creates an attachment under a content reference URL in the body or comment of an issue or pull request. Use the `id` of the content reference from the [`content_reference` event](https://docs.github.com/webhooks/event-payloads/#content_reference) to create an attachment.

The app must create a content attachment within six hours of the content reference URL being posted. See "[Using content attachments](https://docs.github.com/apps/using-content-attachments/)" for details about content attachments.

You must use an [installation access token](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

```js
octokit.rest.apps.createContentAttachment({
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

</td></tr>
<tr><td>title</td><td>yes</td><td>

The title of the attachment

</td></tr>
<tr><td>body</td><td>yes</td><td>

The body of the attachment

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/apps#create-a-content-attachment).
