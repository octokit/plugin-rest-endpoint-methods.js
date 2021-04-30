---
name: Create a team
example: octokit.rest.teams.create({ org, name })
route: POST /orgs/{org}/teams
scope: teams
type: API method
---

# Create a team

To create a team, the authenticated user must be a member or owner of `{org}`. By default, organization members can create teams. Organization owners can limit team creation to organization owners. For more information, see "[Setting team creation permissions](https://help.github.com/en/articles/setting-team-creation-permissions-in-your-organization)."

When you create a new team, you automatically become a team maintainer without explicitly adding yourself to the optional array of `maintainers`. For more information, see "[About teams](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/about-teams)".

```js
octokit.rest.teams.create({
  org,
  name,
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
<tr><td>name</td><td>yes</td><td>

The name of the team.

</td></tr>
<tr><td>description</td><td>no</td><td>

The description of the team.

</td></tr>
<tr><td>maintainers</td><td>no</td><td>

List GitHub IDs for organization members who will become team maintainers.

</td></tr>
<tr><td>repo_names</td><td>no</td><td>

The full name (e.g., "organization-name/repository-name") of repositories to add the team to.

</td></tr>
<tr><td>privacy</td><td>no</td><td>

The level of privacy this team should have. The options are:  
**For a non-nested team:**  
\* `secret` - only visible to organization owners and members of this team.  
\* `closed` - visible to all members of this organization.  
Default: `secret`  
**For a parent or child team:**  
\* `closed` - visible to all members of this organization.  
Default for child team: `closed`

</td></tr>
<tr><td>permission</td><td>no</td><td>

**Deprecated**. The permission that new repositories will be added to the team with when none is specified. Can be one of:  
\* `pull` - team members can pull, but not push to or administer newly-added repositories.  
\* `push` - team members can pull and push, but not administer newly-added repositories.  
\* `admin` - team members can pull, push and administer newly-added repositories.

</td></tr>
<tr><td>parent_team_id</td><td>no</td><td>

The ID of a team to set as the parent team.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/teams#create-a-team).
