---
name: Update an organization
example: octokit.rest.orgs.update({ org })
route: PATCH /orgs/{org}
scope: orgs
type: API method
---

# Update an organization

> [!WARNING]
> **Closing down notice:** GitHub will replace and discontinue `members_allowed_repository_creation_type` in favor of more granular permissions. The new input parameters are `members_can_create_public_repositories`, `members_can_create_private_repositories` for all organizations and `members_can_create_internal_repositories` for organizations associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+. For more information, see the [blog post](https://developer.github.com/changes/2019-12-03-internal-visibility-changes).

> [!WARNING]
> **Closing down notice:** Code security product enablement for new repositories through the organization API is closing down. Please use [code security configurations](https://docs.github.com/rest/code-security/configurations#set-a-code-security-configuration-as-a-default-for-an-organization) to set defaults instead. For more information on setting a default security configuration, see the [changelog](https://github.blog/changelog/2024-07-09-sunsetting-security-settings-defaults-parameters-in-the-organizations-rest-api/).

Updates the organization's profile and member privileges.

The authenticated user must be an organization owner to use this endpoint.

OAuth app tokens and personal access tokens (classic) need the `admin:org` or `repo` scope to use this endpoint.

```js
octokit.rest.orgs.update({
  org,
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
<tr><td>billing_email</td><td>no</td><td>

Billing email address. This address is not publicized.

</td></tr>
<tr><td>company</td><td>no</td><td>

The company name.

</td></tr>
<tr><td>email</td><td>no</td><td>

The publicly visible email address.

</td></tr>
<tr><td>twitter_username</td><td>no</td><td>

The Twitter username of the company.

</td></tr>
<tr><td>location</td><td>no</td><td>

The location.

</td></tr>
<tr><td>name</td><td>no</td><td>

The shorthand name of the company.

</td></tr>
<tr><td>description</td><td>no</td><td>

The description of the company. The maximum size is 160 characters.

</td></tr>
<tr><td>has_organization_projects</td><td>no</td><td>

Whether an organization can use organization projects.

</td></tr>
<tr><td>has_repository_projects</td><td>no</td><td>

Whether repositories that belong to the organization can use repository projects.

</td></tr>
<tr><td>default_repository_permission</td><td>no</td><td>

Default permission level members have for organization repositories.

</td></tr>
<tr><td>members_can_create_repositories</td><td>no</td><td>

Whether of non-admin organization members can create repositories. **Note:** A parameter can override this parameter. See `members_allowed_repository_creation_type` in this table for details.

</td></tr>
<tr><td>members_can_create_internal_repositories</td><td>no</td><td>

Whether organization members can create internal repositories, which are visible to all enterprise members. You can only allow members to create internal repositories if your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+. For more information, see "[Restricting repository creation in your organization](https://docs.github.com/github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization)" in the GitHub Help documentation.

</td></tr>
<tr><td>members_can_create_private_repositories</td><td>no</td><td>

Whether organization members can create private repositories, which are visible to organization members with permission. For more information, see "[Restricting repository creation in your organization](https://docs.github.com/github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization)" in the GitHub Help documentation.

</td></tr>
<tr><td>members_can_create_public_repositories</td><td>no</td><td>

Whether organization members can create public repositories, which are visible to anyone. For more information, see "[Restricting repository creation in your organization](https://docs.github.com/github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization)" in the GitHub Help documentation.

</td></tr>
<tr><td>members_allowed_repository_creation_type</td><td>no</td><td>

Specifies which types of repositories non-admin organization members can create. `private` is only available to repositories that are part of an organization on GitHub Enterprise Cloud.
**Note:** This parameter is closing down and will be removed in the future. Its return value ignores internal repositories. Using this parameter overrides values set in `members_can_create_repositories`. See the parameter deprecation notice in the operation description for details.

</td></tr>
<tr><td>members_can_create_pages</td><td>no</td><td>

Whether organization members can create GitHub Pages sites. Existing published sites will not be impacted.

</td></tr>
<tr><td>members_can_create_public_pages</td><td>no</td><td>

Whether organization members can create public GitHub Pages sites. Existing published sites will not be impacted.

</td></tr>
<tr><td>members_can_create_private_pages</td><td>no</td><td>

Whether organization members can create private GitHub Pages sites. Existing published sites will not be impacted.

</td></tr>
<tr><td>members_can_fork_private_repositories</td><td>no</td><td>

Whether organization members can fork private organization repositories.

</td></tr>
<tr><td>web_commit_signoff_required</td><td>no</td><td>

Whether contributors to organization repositories are required to sign off on commits they make through GitHub's web interface.

</td></tr>
<tr><td>blog</td><td>no</td><td>

</td></tr>
<tr><td>advanced_security_enabled_for_new_repositories</td><td>no</td><td>

**Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead.

Whether GitHub Advanced Security is automatically enabled for new repositories and repositories transferred to this organization.

To use this parameter, you must have admin permissions for the repository or be an owner or security manager for the organization that owns the repository. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."

You can check which security and analysis features are currently enabled by using a `GET /orgs/{org}` request.

</td></tr>
<tr><td>dependabot_alerts_enabled_for_new_repositories</td><td>no</td><td>

**Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead.

Whether Dependabot alerts are automatically enabled for new repositories and repositories transferred to this organization.

To use this parameter, you must have admin permissions for the repository or be an owner or security manager for the organization that owns the repository. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."

You can check which security and analysis features are currently enabled by using a `GET /orgs/{org}` request.

</td></tr>
<tr><td>dependabot_security_updates_enabled_for_new_repositories</td><td>no</td><td>

**Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead.

Whether Dependabot security updates are automatically enabled for new repositories and repositories transferred to this organization.

To use this parameter, you must have admin permissions for the repository or be an owner or security manager for the organization that owns the repository. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."

You can check which security and analysis features are currently enabled by using a `GET /orgs/{org}` request.

</td></tr>
<tr><td>dependency_graph_enabled_for_new_repositories</td><td>no</td><td>

**Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead.

Whether dependency graph is automatically enabled for new repositories and repositories transferred to this organization.

To use this parameter, you must have admin permissions for the repository or be an owner or security manager for the organization that owns the repository. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."

You can check which security and analysis features are currently enabled by using a `GET /orgs/{org}` request.

</td></tr>
<tr><td>secret_scanning_enabled_for_new_repositories</td><td>no</td><td>

**Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead.

Whether secret scanning is automatically enabled for new repositories and repositories transferred to this organization.

To use this parameter, you must have admin permissions for the repository or be an owner or security manager for the organization that owns the repository. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."

You can check which security and analysis features are currently enabled by using a `GET /orgs/{org}` request.

</td></tr>
<tr><td>secret_scanning_push_protection_enabled_for_new_repositories</td><td>no</td><td>

**Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead.

Whether secret scanning push protection is automatically enabled for new repositories and repositories transferred to this organization.

To use this parameter, you must have admin permissions for the repository or be an owner or security manager for the organization that owns the repository. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."

You can check which security and analysis features are currently enabled by using a `GET /orgs/{org}` request.

</td></tr>
<tr><td>secret_scanning_push_protection_custom_link_enabled</td><td>no</td><td>

Whether a custom link is shown to contributors who are blocked from pushing a secret by push protection.

</td></tr>
<tr><td>secret_scanning_push_protection_custom_link</td><td>no</td><td>

If `secret_scanning_push_protection_custom_link_enabled` is true, the URL that will be displayed to contributors who are blocked from pushing a secret.

</td></tr>
<tr><td>deploy_keys_enabled_for_repositories</td><td>no</td><td>

Controls whether or not deploy keys may be added and used for repositories in the organization.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/orgs#update-an-organization).
