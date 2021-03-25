---
name: Update a webhook configuration for a repository
example: octokit.rest.repos.updateWebhookConfigForRepo({ owner, repo, hook_id })
route: PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config
scope: repos
type: API method
---

# Update a webhook configuration for a repository

Updates the webhook configuration for a repository. To update more information about the webhook, including the `active` state and `events`, use "[Update a repository webhook](/rest/reference/orgs#update-a-repository-webhook)."

Access tokens must have the `write:repo_hook` or `repo` scope, and GitHub Apps must have the `repository_hooks:write` permission.

```js
octokit.rest.repos.updateWebhookConfigForRepo({
  owner,
  repo,
  hook_id,
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

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
<tr><td>hook_id</td><td>yes</td><td>

</td></tr>
<tr><td>url</td><td>no</td><td>

The URL to which the payloads will be delivered.

</td></tr>
<tr><td>content_type</td><td>no</td><td>

The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.

</td></tr>
<tr><td>secret</td><td>no</td><td>

If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/webhooks/event-payloads/#delivery-headers).

</td></tr>
<tr><td>insecure_ssl</td><td>no</td><td>

Determines whether the SSL certificate of the host for `url` will be verified when delivering payloads. Supported values include `0` (verification is performed) and `1` (verification is not performed). The default is `0`. **We strongly recommend not setting this to `1` as you are subject to man-in-the-middle and other attacks.**

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#update-a-webhook-configuration-for-a-repository).
