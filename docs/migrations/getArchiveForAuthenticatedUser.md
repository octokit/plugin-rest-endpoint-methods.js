---
name: Download a user migration archive
example: octokit.migrations.getArchiveForAuthenticatedUser({ migration_id })
route: GET /user/migrations/{migration_id}/archive
scope: migrations
type: API method
---

# Download a user migration archive

Fetches the URL to download the migration archive as a `tar.gz` file. Depending on the resources your repository uses, the migration archive can contain JSON files with data for these objects:

- attachments
- bases
- commit_comments
- issue_comments
- issue_events
- issues
- milestones
- organizations
- projects
- protected_branches
- pull_request_reviews
- pull_requests
- releases
- repositories
- review_comments
- schema
- users

The archive will also contain an `attachments` directory that includes all attachment files uploaded to GitHub.com and a `repositories` directory that contains the repository's Git data.

```js
octokit.migrations.getArchiveForAuthenticatedUser({
  migration_id
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
    <tr><td>migration_id</td><td>yes</td><td>

migration_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/migrations#download-a-user-migration-archive).
