---
name: Create an installation access token for an app
example: octokit.rest.apps.createInstallationAccessToken({ installation_id })
route: POST /app/installations/{installation_id}/access_tokens
scope: apps
type: API method
---

# Create an installation access token for an app

Creates an installation access token that enables a GitHub App to make authenticated API requests for the app's installation on an organization or individual account. Installation tokens expire one hour from the time you create them. Using an expired token produces a status code of `401 - Unauthorized`, and requires creating a new installation token. By default the installation token has access to all repositories that the installation can access. To restrict the access to specific repositories, you can provide the `repository_ids` when creating the token. When you omit `repository_ids`, the response does not contain the `repositories` key.

You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

```js
octokit.rest.apps.createInstallationAccessToken({
  installation_id,
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
    <tr><td>installation_id</td><td>yes</td><td>

installation_id parameter

</td></tr>
<tr><td>repositories</td><td>no</td><td>

List of repository names that the token should have access to

</td></tr>
<tr><td>repository_ids</td><td>no</td><td>

List of repository IDs that the token should have access to

</td></tr>
<tr><td>permissions</td><td>no</td><td>

The permissions granted to the user-to-server access token.

</td></tr>
<tr><td>permissions.actions</td><td>no</td><td>

The level of permission to grant the access token for GitHub Actions workflows, workflow runs, and artifacts. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.administration</td><td>no</td><td>

The level of permission to grant the access token for repository creation, deletion, settings, teams, and collaborators creation. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.checks</td><td>no</td><td>

The level of permission to grant the access token for checks on code. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.content_references</td><td>no</td><td>

The level of permission to grant the access token for notification of content references and creation content attachments. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.contents</td><td>no</td><td>

The level of permission to grant the access token for repository contents, commits, branches, downloads, releases, and merges. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.deployments</td><td>no</td><td>

The level of permission to grant the access token for deployments and deployment statuses. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.environments</td><td>no</td><td>

The level of permission to grant the access token for managing repository environments. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.issues</td><td>no</td><td>

The level of permission to grant the access token for issues and related comments, assignees, labels, and milestones. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.metadata</td><td>no</td><td>

The level of permission to grant the access token to search repositories, list collaborators, and access repository metadata. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.packages</td><td>no</td><td>

The level of permission to grant the access token for packages published to GitHub Packages. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.pages</td><td>no</td><td>

The level of permission to grant the access token to retrieve Pages statuses, configuration, and builds, as well as create new builds. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.pull_requests</td><td>no</td><td>

The level of permission to grant the access token for pull requests and related comments, assignees, labels, milestones, and merges. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.repository_hooks</td><td>no</td><td>

The level of permission to grant the access token to manage the post-receive hooks for a repository. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.repository_projects</td><td>no</td><td>

The level of permission to grant the access token to manage repository projects, columns, and cards. Can be one of: `read`, `write`, or `admin`.

</td></tr>
<tr><td>permissions.secret_scanning_alerts</td><td>no</td><td>

The level of permission to grant the access token to view and manage secret scanning alerts. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.secrets</td><td>no</td><td>

The level of permission to grant the access token to manage repository secrets. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.security_events</td><td>no</td><td>

The level of permission to grant the access token to view and manage security events like code scanning alerts. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.single_file</td><td>no</td><td>

The level of permission to grant the access token to manage just a single file. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.statuses</td><td>no</td><td>

The level of permission to grant the access token for commit statuses. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.vulnerability_alerts</td><td>no</td><td>

The level of permission to grant the access token to retrieve Dependabot alerts. Can be one of: `read`.

</td></tr>
<tr><td>permissions.workflows</td><td>no</td><td>

The level of permission to grant the access token to update GitHub Actions workflow files. Can be one of: `write`.

</td></tr>
<tr><td>permissions.members</td><td>no</td><td>

The level of permission to grant the access token for organization teams and members. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.organization_administration</td><td>no</td><td>

The level of permission to grant the access token to manage access to an organization. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.organization_hooks</td><td>no</td><td>

The level of permission to grant the access token to manage the post-receive hooks for an organization. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.organization_plan</td><td>no</td><td>

The level of permission to grant the access token for viewing an organization's plan. Can be one of: `read`.

</td></tr>
<tr><td>permissions.organization_projects</td><td>no</td><td>

The level of permission to grant the access token to manage organization projects, columns, and cards. Can be one of: `read`, `write`, or `admin`.

</td></tr>
<tr><td>permissions.organization_packages</td><td>no</td><td>

The level of permission to grant the access token for organization packages published to GitHub Packages. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.organization_secrets</td><td>no</td><td>

The level of permission to grant the access token to manage organization secrets. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.organization_self_hosted_runners</td><td>no</td><td>

The level of permission to grant the access token to view and manage GitHub Actions self-hosted runners available to an organization. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.organization_user_blocking</td><td>no</td><td>

The level of permission to grant the access token to view and manage users blocked by the organization. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.team_discussions</td><td>no</td><td>

The level of permission to grant the access token to manage team discussions and related comments. Can be one of: `read` or `write`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/apps/#create-an-installation-access-token-for-an-app).
