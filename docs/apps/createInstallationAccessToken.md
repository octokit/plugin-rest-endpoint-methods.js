---
name: Create an installation access token for an app
example: octokit.rest.apps.createInstallationAccessToken({ installation_id })
route: POST /app/installations/{installation_id}/access_tokens
scope: apps
type: API method
---

# Create an installation access token for an app

Creates an installation access token that enables a GitHub App to make authenticated API requests for the app's installation on an organization or individual account. Installation tokens expire one hour from the time you create them. Using an expired token produces a status code of `401 - Unauthorized`, and requires creating a new installation token. By default the installation token has access to all repositories that the installation can access.

Optionally, you can use the `repositories` or `repository_ids` body parameters to specify individual repositories that the installation access token can access. If you don't use `repositories` or `repository_ids` to grant access to specific repositories, the installation access token will have access to all repositories that the installation was granted access to. The installation access token cannot be granted access to repositories that the installation was not granted access to. Up to 500 repositories can be listed in this manner.

Optionally, use the `permissions` body parameter to specify the permissions that the installation access token should have. If `permissions` is not specified, the installation access token will have all of the permissions that were granted to the app. The installation access token cannot be granted permissions that the app was not granted.

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

The unique identifier of the installation.

</td></tr>
<tr><td>repositories</td><td>no</td><td>

List of repository names that the token should have access to

</td></tr>
<tr><td>repository_ids</td><td>no</td><td>

List of repository IDs that the token should have access to

</td></tr>
<tr><td>permissions</td><td>no</td><td>

The permissions granted to the user access token.

</td></tr>
<tr><td>permissions.actions</td><td>no</td><td>

The level of permission to grant the access token for GitHub Actions workflows, workflow runs, and artifacts.

</td></tr>
<tr><td>permissions.administration</td><td>no</td><td>

The level of permission to grant the access token for repository creation, deletion, settings, teams, and collaborators creation.

</td></tr>
<tr><td>permissions.checks</td><td>no</td><td>

The level of permission to grant the access token for checks on code.

</td></tr>
<tr><td>permissions.codespaces</td><td>no</td><td>

The level of permission to grant the access token to create, edit, delete, and list Codespaces.

</td></tr>
<tr><td>permissions.contents</td><td>no</td><td>

The level of permission to grant the access token for repository contents, commits, branches, downloads, releases, and merges.

</td></tr>
<tr><td>permissions.dependabot_secrets</td><td>no</td><td>

The leve of permission to grant the access token to manage Dependabot secrets.

</td></tr>
<tr><td>permissions.deployments</td><td>no</td><td>

The level of permission to grant the access token for deployments and deployment statuses.

</td></tr>
<tr><td>permissions.environments</td><td>no</td><td>

The level of permission to grant the access token for managing repository environments.

</td></tr>
<tr><td>permissions.issues</td><td>no</td><td>

The level of permission to grant the access token for issues and related comments, assignees, labels, and milestones.

</td></tr>
<tr><td>permissions.metadata</td><td>no</td><td>

The level of permission to grant the access token to search repositories, list collaborators, and access repository metadata.

</td></tr>
<tr><td>permissions.packages</td><td>no</td><td>

The level of permission to grant the access token for packages published to GitHub Packages.

</td></tr>
<tr><td>permissions.pages</td><td>no</td><td>

The level of permission to grant the access token to retrieve Pages statuses, configuration, and builds, as well as create new builds.

</td></tr>
<tr><td>permissions.pull_requests</td><td>no</td><td>

The level of permission to grant the access token for pull requests and related comments, assignees, labels, milestones, and merges.

</td></tr>
<tr><td>permissions.repository_custom_properties</td><td>no</td><td>

The level of permission to grant the access token to view and edit custom properties for a repository, when allowed by the property.

</td></tr>
<tr><td>permissions.repository_hooks</td><td>no</td><td>

The level of permission to grant the access token to manage the post-receive hooks for a repository.

</td></tr>
<tr><td>permissions.repository_projects</td><td>no</td><td>

The level of permission to grant the access token to manage repository projects, columns, and cards.

</td></tr>
<tr><td>permissions.secret_scanning_alerts</td><td>no</td><td>

The level of permission to grant the access token to view and manage secret scanning alerts.

</td></tr>
<tr><td>permissions.secrets</td><td>no</td><td>

The level of permission to grant the access token to manage repository secrets.

</td></tr>
<tr><td>permissions.security_events</td><td>no</td><td>

The level of permission to grant the access token to view and manage security events like code scanning alerts.

</td></tr>
<tr><td>permissions.single_file</td><td>no</td><td>

The level of permission to grant the access token to manage just a single file.

</td></tr>
<tr><td>permissions.statuses</td><td>no</td><td>

The level of permission to grant the access token for commit statuses.

</td></tr>
<tr><td>permissions.vulnerability_alerts</td><td>no</td><td>

The level of permission to grant the access token to manage Dependabot alerts.

</td></tr>
<tr><td>permissions.workflows</td><td>no</td><td>

The level of permission to grant the access token to update GitHub Actions workflow files.

</td></tr>
<tr><td>permissions.members</td><td>no</td><td>

The level of permission to grant the access token for organization teams and members.

</td></tr>
<tr><td>permissions.organization_administration</td><td>no</td><td>

The level of permission to grant the access token to manage access to an organization.

</td></tr>
<tr><td>permissions.organization_custom_roles</td><td>no</td><td>

The level of permission to grant the access token for custom repository roles management.

</td></tr>
<tr><td>permissions.organization_custom_org_roles</td><td>no</td><td>

The level of permission to grant the access token for custom organization roles management.

</td></tr>
<tr><td>permissions.organization_custom_properties</td><td>no</td><td>

The level of permission to grant the access token for custom property management.

</td></tr>
<tr><td>permissions.organization_copilot_seat_management</td><td>no</td><td>

The level of permission to grant the access token for managing access to GitHub Copilot for members of an organization with a Copilot Business subscription. This property is in public preview and is subject to change.

</td></tr>
<tr><td>permissions.organization_announcement_banners</td><td>no</td><td>

The level of permission to grant the access token to view and manage announcement banners for an organization.

</td></tr>
<tr><td>permissions.organization_events</td><td>no</td><td>

The level of permission to grant the access token to view events triggered by an activity in an organization.

</td></tr>
<tr><td>permissions.organization_hooks</td><td>no</td><td>

The level of permission to grant the access token to manage the post-receive hooks for an organization.

</td></tr>
<tr><td>permissions.organization_personal_access_tokens</td><td>no</td><td>

The level of permission to grant the access token for viewing and managing fine-grained personal access token requests to an organization.

</td></tr>
<tr><td>permissions.organization_personal_access_token_requests</td><td>no</td><td>

The level of permission to grant the access token for viewing and managing fine-grained personal access tokens that have been approved by an organization.

</td></tr>
<tr><td>permissions.organization_plan</td><td>no</td><td>

The level of permission to grant the access token for viewing an organization's plan.

</td></tr>
<tr><td>permissions.organization_projects</td><td>no</td><td>

The level of permission to grant the access token to manage organization projects and projects public preview (where available).

</td></tr>
<tr><td>permissions.organization_packages</td><td>no</td><td>

The level of permission to grant the access token for organization packages published to GitHub Packages.

</td></tr>
<tr><td>permissions.organization_secrets</td><td>no</td><td>

The level of permission to grant the access token to manage organization secrets.

</td></tr>
<tr><td>permissions.organization_self_hosted_runners</td><td>no</td><td>

The level of permission to grant the access token to view and manage GitHub Actions self-hosted runners available to an organization.

</td></tr>
<tr><td>permissions.organization_user_blocking</td><td>no</td><td>

The level of permission to grant the access token to view and manage users blocked by the organization.

</td></tr>
<tr><td>permissions.team_discussions</td><td>no</td><td>

The level of permission to grant the access token to manage team discussions and related comments.

</td></tr>
<tr><td>permissions.email_addresses</td><td>no</td><td>

The level of permission to grant the access token to manage the email addresses belonging to a user.

</td></tr>
<tr><td>permissions.followers</td><td>no</td><td>

The level of permission to grant the access token to manage the followers belonging to a user.

</td></tr>
<tr><td>permissions.git_ssh_keys</td><td>no</td><td>

The level of permission to grant the access token to manage git SSH keys.

</td></tr>
<tr><td>permissions.gpg_keys</td><td>no</td><td>

The level of permission to grant the access token to view and manage GPG keys belonging to a user.

</td></tr>
<tr><td>permissions.interaction_limits</td><td>no</td><td>

The level of permission to grant the access token to view and manage interaction limits on a repository.

</td></tr>
<tr><td>permissions.profile</td><td>no</td><td>

The level of permission to grant the access token to manage the profile settings belonging to a user.

</td></tr>
<tr><td>permissions.starring</td><td>no</td><td>

The level of permission to grant the access token to list and manage repositories a user is starring.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/apps/apps#create-an-installation-access-token-for-an-app).
