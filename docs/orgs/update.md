---
name: Update an organization
example: octokit.orgs.update({ org })
route: PATCH /orgs/{org}
scope: orgs
type: API method
---

# Update an organization

**Parameter Deprecation Notice:** GitHub will replace and discontinue `members_allowed_repository_creation_type` in favor of more granular permissions. The new input parameters are `members_can_create_public_repositories`, `members_can_create_private_repositories` for all organizations and `members_can_create_internal_repositories` for organizations associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+. For more information, see the [blog post](https://developer.github.com/changes/2019-12-03-internal-visibility-changes).

Enables an authenticated organization owner with the `admin:org` scope to update the organization's profile and member privileges.

```js
octokit.orgs.update({
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

The description of the company.

</td></tr>
<tr><td>has_organization_projects</td><td>no</td><td>

Toggles whether an organization can use organization projects.

</td></tr>
<tr><td>has_repository_projects</td><td>no</td><td>

Toggles whether repositories that belong to the organization can use repository projects.

</td></tr>
<tr><td>default_repository_permission</td><td>no</td><td>

Default permission level members have for organization repositories:  
\* `read` - can pull, but not push to or administer this repository.  
\* `write` - can pull and push, but not administer this repository.  
\* `admin` - can pull, push, and administer this repository.  
\* `none` - no permissions granted by default.

</td></tr>
<tr><td>members_can_create_repositories</td><td>no</td><td>

Toggles the ability of non-admin organization members to create repositories. Can be one of:  
\* `true` - all organization members can create repositories.  
\* `false` - only organization owners can create repositories.  
Default: `true`  
**Note:** A parameter can override this parameter. See `members_allowed_repository_creation_type` in this table for details. **Note:** A parameter can override this parameter. See `members_allowed_repository_creation_type` in this table for details.

</td></tr>
<tr><td>members_can_create_internal_repositories</td><td>no</td><td>

Toggles whether organization members can create internal repositories, which are visible to all enterprise members. You can only allow members to create internal repositories if your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+. Can be one of:  
\* `true` - all organization members can create internal repositories.  
\* `false` - only organization owners can create internal repositories.  
Default: `true`. For more information, see "[Restricting repository creation in your organization](https://help.github.com/github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization)" in the GitHub Help documentation.

</td></tr>
<tr><td>members_can_create_private_repositories</td><td>no</td><td>

Toggles whether organization members can create private repositories, which are visible to organization members with permission. Can be one of:  
\* `true` - all organization members can create private repositories.  
\* `false` - only organization owners can create private repositories.  
Default: `true`. For more information, see "[Restricting repository creation in your organization](https://help.github.com/github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization)" in the GitHub Help documentation.

</td></tr>
<tr><td>members_can_create_public_repositories</td><td>no</td><td>

Toggles whether organization members can create public repositories, which are visible to anyone. Can be one of:  
\* `true` - all organization members can create public repositories.  
\* `false` - only organization owners can create public repositories.  
Default: `true`. For more information, see "[Restricting repository creation in your organization](https://help.github.com/github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization)" in the GitHub Help documentation.

</td></tr>
<tr><td>members_allowed_repository_creation_type</td><td>no</td><td>

Specifies which types of repositories non-admin organization members can create. Can be one of:  
\* `all` - all organization members can create public and private repositories.  
\* `private` - members can create private repositories. This option is only available to repositories that are part of an organization on GitHub Enterprise Cloud.  
\* `none` - only admin members can create repositories.  
**Note:** This parameter is deprecated and will be removed in the future. Its return value ignores internal repositories. Using this parameter overrides values set in `members_can_create_repositories`. See [this note](https://developer.github.com/v3/orgs/#members_can_create_repositories) for details.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/orgs/#update-an-organization).
