---
name: Create a GitHub-hosted runner for an organization
example: octokit.rest.actions.createHostedRunnerForOrg({ org, name, image, size, runner_group_id })
route: POST /orgs/{org}/actions/hosted-runners
scope: actions
type: API method
---

# Create a GitHub-hosted runner for an organization

Creates a GitHub-hosted runner for an organization.
OAuth tokens and personal access tokens (classic) need the `manage_runners:org` scope to use this endpoint.

```js
octokit.rest.actions.createHostedRunnerForOrg({
  org,
  name,
  image,
  size,
  runner_group_id,
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
    <tr><td>org</td><td>yes</td><td>

The organization name. The name is not case sensitive.

</td></tr>
<tr><td>name</td><td>yes</td><td>

Name of the runner. Must be between 1 and 64 characters and may only contain upper and lowercase letters a-z, numbers 0-9, '.', '-', and '\_'.

</td></tr>
<tr><td>image</td><td>yes</td><td>

The image of runner. To list all available images, use `GET /actions/hosted-runners/images/github-owned` or `GET /actions/hosted-runners/images/partner`.

</td></tr>
<tr><td>image.id</td><td>no</td><td>

The unique identifier of the runner image.

</td></tr>
<tr><td>image.source</td><td>no</td><td>

The source of the runner image.

</td></tr>
<tr><td>image.version</td><td>no</td><td>

The version of the runner image to deploy. This is relevant only for runners using custom images.

</td></tr>
<tr><td>size</td><td>yes</td><td>

The machine size of the runner. To list available sizes, use `GET actions/hosted-runners/machine-sizes`

</td></tr>
<tr><td>runner_group_id</td><td>yes</td><td>

The existing runner group to add this runner to.

</td></tr>
<tr><td>maximum_runners</td><td>no</td><td>

The maximum amount of runners to scale up to. Runners will not auto-scale above this number. Use this setting to limit your cost.

</td></tr>
<tr><td>enable_static_ip</td><td>no</td><td>

Whether this runner should be created with a static public IP. Note limit on account. To list limits on account, use `GET actions/hosted-runners/limits`

</td></tr>
<tr><td>image_gen</td><td>no</td><td>

Whether this runner should be used to generate custom images.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/hosted-runners#create-a-github-hosted-runner-for-an-organization).
