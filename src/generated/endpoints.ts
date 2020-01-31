import { EndpointsDefaultsAndDecorations } from "../types";
const Endpoints: EndpointsDefaultsAndDecorations = {
  actions: {
    cancelWorkflowRun: [
      "POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel"
    ],
    createOrUpdateSecretForRepo: [
      "PUT /repos/{owner}/{repo}/actions/secrets/{name}"
    ],
    createRegistrationToken: [
      "POST /repos/{owner}/{repo}/actions/runners/registration-token"
    ],
    createRemoveToken: [
      "POST /repos/{owner}/{repo}/actions/runners/remove-token"
    ],
    deleteArtifact: [
      "DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"
    ],
    deleteSecretFromRepo: [
      "DELETE /repos/{owner}/{repo}/actions/secrets/{name}"
    ],
    downloadArtifact: [
      "GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}"
    ],
    getArtifact: ["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"],
    getPublicKey: ["GET /repos/{owner}/{repo}/actions/secrets/public-key"],
    getSecret: ["GET /repos/{owner}/{repo}/actions/secrets/{name}"],
    getSelfHostedRunner: [
      "GET /repos/{owner}/{repo}/actions/runners/{runner_id}"
    ],
    getWorkflow: ["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}"],
    getWorkflowJob: ["GET /repos/{owner}/{repo}/actions/jobs/{job_id}"],
    getWorkflowRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}"],
    listJobsForWorkflowRun: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs"
    ],
    listRepoWorkflowRuns: ["GET /repos/{owner}/{repo}/actions/runs"],
    listRepoWorkflows: ["GET /repos/{owner}/{repo}/actions/workflows"],
    listSecretsForRepo: ["GET /repos/{owner}/{repo}/actions/secrets"],
    listSelfHostedRunnersForRepo: ["GET /repos/{owner}/{repo}/actions/runners"],
    listWorkflowJobLogs: [
      "GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs"
    ],
    listWorkflowRunArtifacts: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts"
    ],
    listWorkflowRunLogs: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs"
    ],
    listWorkflowRuns: [
      "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs"
    ],
    reRunWorkflow: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun"],
    removeSelfHostedRunner: [
      "DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}"
    ]
  },
  activity: {
    checkStarringRepo: ["GET /user/starred/{owner}/{repo}"],
    deleteRepoSubscription: ["DELETE /repos/{owner}/{repo}/subscription"],
    deleteThreadSubscription: [
      "DELETE /notifications/threads/{thread_id}/subscription"
    ],
    getRepoSubscription: ["GET /repos/{owner}/{repo}/subscription"],
    getThread: ["GET /notifications/threads/{thread_id}"],
    getThreadSubscription: [
      "GET /notifications/threads/{thread_id}/subscription"
    ],
    listEventsForOrg: ["GET /users/{username}/events/orgs/{org}"],
    listEventsForUser: ["GET /users/{username}/events"],
    listFeeds: ["GET /feeds"],
    listNotifications: ["GET /notifications"],
    listNotificationsForRepo: ["GET /repos/{owner}/{repo}/notifications"],
    listPublicEvents: ["GET /events"],
    listPublicEventsForOrg: ["GET /orgs/{org}/events"],
    listPublicEventsForRepoNetwork: ["GET /networks/{owner}/{repo}/events"],
    listPublicEventsForUser: ["GET /users/{username}/events/public"],
    listReceivedEventsForUser: ["GET /users/{username}/received_events"],
    listReceivedPublicEventsForUser: [
      "GET /users/{username}/received_events/public"
    ],
    listRepoEvents: ["GET /repos/{owner}/{repo}/events"],
    listReposStarredByAuthenticatedUser: ["GET /user/starred"],
    listReposStarredByUser: ["GET /users/{username}/starred"],
    listReposWatchedByUser: ["GET /users/{username}/subscriptions"],
    listStargazersForRepo: ["GET /repos/{owner}/{repo}/stargazers"],
    listWatchedReposForAuthenticatedUser: ["GET /user/subscriptions"],
    listWatchersForRepo: ["GET /repos/{owner}/{repo}/subscribers"],
    markAsRead: ["PUT /notifications"],
    markNotificationsAsReadForRepo: ["PUT /repos/{owner}/{repo}/notifications"],
    markThreadAsRead: ["PATCH /notifications/threads/{thread_id}"],
    setRepoSubscription: ["PUT /repos/{owner}/{repo}/subscription"],
    setThreadSubscription: [
      "PUT /notifications/threads/{thread_id}/subscription"
    ],
    starRepo: ["PUT /user/starred/{owner}/{repo}"],
    unstarRepo: ["DELETE /user/starred/{owner}/{repo}"]
  },
  apps: {
    addRepoToInstallation: [
      "PUT /user/installations/{installation_id}/repositories/{repository_id}",
      { mediaType: { previews: ["machine-man"] } }
    ],
    checkAccountIsAssociatedWithAny: [
      "GET /marketplace_listing/accounts/{account_id}"
    ],
    checkAccountIsAssociatedWithAnyStubbed: [
      "GET /marketplace_listing/stubbed/accounts/{account_id}"
    ],
    checkAuthorization: [
      "GET /applications/{client_id}/tokens/{access_token}",
      {},
      {
        deprecated:
          "octokit.apps.checkAuthorization() is deprecated, see https://developer.github.com/v3/apps/oauth_applications/#check-an-authorization"
      }
    ],
    checkToken: [
      "POST /applications/{client_id}/token",
      { mediaType: { previews: ["doctor-strange"] } }
    ],
    createContentAttachment: [
      "POST /content_references/{content_reference_id}/attachments",
      { mediaType: { previews: ["corsair"] } }
    ],
    createFromManifest: [
      "POST /app-manifests/{code}/conversions",
      { mediaType: { previews: ["fury"] } }
    ],
    createInstallationToken: [
      "POST /app/installations/{installation_id}/access_tokens",
      { mediaType: { previews: ["machine-man"] } }
    ],
    deleteAuthorization: [
      "DELETE /applications/{client_id}/grant",
      { mediaType: { previews: ["doctor-strange"] } }
    ],
    deleteInstallation: [
      "DELETE /app/installations/{installation_id}",
      { mediaType: { previews: ["gambit", "machine-man"] } }
    ],
    deleteToken: [
      "DELETE /applications/{client_id}/token",
      { mediaType: { previews: ["doctor-strange"] } }
    ],
    getAuthenticated: [
      "GET /app",
      { mediaType: { previews: ["machine-man"] } }
    ],
    getBySlug: [
      "GET /apps/{app_slug}",
      { mediaType: { previews: ["machine-man"] } }
    ],
    getInstallation: [
      "GET /app/installations/{installation_id}",
      { mediaType: { previews: ["machine-man"] } }
    ],
    getOrgInstallation: [
      "GET /orgs/{org}/installation",
      { mediaType: { previews: ["machine-man"] } }
    ],
    getRepoInstallation: [
      "GET /repos/{owner}/{repo}/installation",
      { mediaType: { previews: ["machine-man"] } }
    ],
    getUserInstallation: [
      "GET /users/{username}/installation",
      { mediaType: { previews: ["machine-man"] } }
    ],
    listAccountsUserOrOrgOnPlan: [
      "GET /marketplace_listing/plans/{plan_id}/accounts"
    ],
    listAccountsUserOrOrgOnPlanStubbed: [
      "GET /marketplace_listing/stubbed/plans/{plan_id}/accounts"
    ],
    listInstallationReposForAuthenticatedUser: [
      "GET /user/installations/{installation_id}/repositories",
      { mediaType: { previews: ["machine-man"] } }
    ],
    listInstallations: [
      "GET /app/installations",
      { mediaType: { previews: ["machine-man"] } }
    ],
    listInstallationsForAuthenticatedUser: [
      "GET /user/installations",
      { mediaType: { previews: ["machine-man"] } }
    ],
    listMarketplacePurchasesForAuthenticatedUser: [
      "GET /user/marketplace_purchases"
    ],
    listMarketplacePurchasesForAuthenticatedUserStubbed: [
      "GET /user/marketplace_purchases/stubbed"
    ],
    listPlans: ["GET /marketplace_listing/plans"],
    listPlansStubbed: ["GET /marketplace_listing/stubbed/plans"],
    listRepos: [
      "GET /installation/repositories",
      { mediaType: { previews: ["machine-man"] } }
    ],
    removeRepoFromInstallation: [
      "DELETE /user/installations/{installation_id}/repositories/{repository_id}",
      { mediaType: { previews: ["machine-man"] } }
    ],
    resetAuthorization: [
      "POST /applications/{client_id}/tokens/{access_token}",
      {},
      {
        deprecated:
          "octokit.apps.resetAuthorization() is deprecated, see https://developer.github.com/v3/apps/oauth_applications/#reset-an-authorization"
      }
    ],
    resetToken: [
      "PATCH /applications/{client_id}/token",
      { mediaType: { previews: ["doctor-strange"] } }
    ],
    revokeAuthorizationForApplication: [
      "DELETE /applications/{client_id}/tokens/{access_token}",
      {},
      {
        deprecated:
          "octokit.apps.revokeAuthorizationForApplication() is deprecated, see https://developer.github.com/v3/apps/oauth_applications/#revoke-an-authorization-for-an-application"
      }
    ],
    revokeGrantForApplication: [
      "DELETE /applications/{client_id}/grants/{access_token}",
      {},
      {
        deprecated:
          "octokit.apps.revokeGrantForApplication() is deprecated, see https://developer.github.com/v3/apps/oauth_applications/#revoke-a-grant-for-an-application"
      }
    ],
    revokeInstallationToken: [
      "DELETE /installation/token",
      { mediaType: { previews: ["gambit"] } }
    ]
  },
  checks: {
    create: [
      "POST /repos/{owner}/{repo}/check-runs",
      { mediaType: { previews: ["antiope"] } }
    ],
    createSuite: [
      "POST /repos/{owner}/{repo}/check-suites",
      { mediaType: { previews: ["antiope"] } }
    ],
    get: [
      "GET /repos/{owner}/{repo}/check-runs/{check_run_id}",
      { mediaType: { previews: ["antiope"] } }
    ],
    getSuite: [
      "GET /repos/{owner}/{repo}/check-suites/{check_suite_id}",
      { mediaType: { previews: ["antiope"] } }
    ],
    listAnnotations: [
      "GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations",
      { mediaType: { previews: ["antiope"] } }
    ],
    listForRef: [
      "GET /repos/{owner}/{repo}/commits/{ref}/check-runs",
      { mediaType: { previews: ["antiope"] } }
    ],
    listForSuite: [
      "GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs",
      { mediaType: { previews: ["antiope"] } }
    ],
    listSuitesForRef: [
      "GET /repos/{owner}/{repo}/commits/{ref}/check-suites",
      { mediaType: { previews: ["antiope"] } }
    ],
    rerequestSuite: [
      "POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest",
      { mediaType: { previews: ["antiope"] } }
    ],
    setSuitesPreferences: [
      "PATCH /repos/{owner}/{repo}/check-suites/preferences",
      { mediaType: { previews: ["antiope"] } }
    ],
    update: [
      "PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}",
      { mediaType: { previews: ["antiope"] } }
    ]
  },
  codesOfConduct: {
    getConductCode: [
      "GET /codes_of_conduct/{key}",
      { mediaType: { previews: ["scarlet-witch"] } }
    ],
    getForRepo: [
      "GET /repos/{owner}/{repo}/community/code_of_conduct",
      { mediaType: { previews: ["scarlet-witch"] } }
    ],
    listConductCodes: [
      "GET /codes_of_conduct",
      { mediaType: { previews: ["scarlet-witch"] } }
    ]
  },
  emojis: { get: ["GET /emojis"] },
  gists: {
    checkIsStarred: ["GET /gists/{gist_id}/star"],
    create: ["POST /gists"],
    createComment: ["POST /gists/{gist_id}/comments"],
    delete: ["DELETE /gists/{gist_id}"],
    deleteComment: ["DELETE /gists/{gist_id}/comments/{comment_id}"],
    fork: ["POST /gists/{gist_id}/forks"],
    get: ["GET /gists/{gist_id}"],
    getComment: ["GET /gists/{gist_id}/comments/{comment_id}"],
    getRevision: ["GET /gists/{gist_id}/{sha}"],
    list: ["GET /gists"],
    listComments: ["GET /gists/{gist_id}/comments"],
    listCommits: ["GET /gists/{gist_id}/commits"],
    listForks: ["GET /gists/{gist_id}/forks"],
    listPublic: ["GET /gists/public"],
    listPublicForUser: ["GET /users/{username}/gists"],
    listStarred: ["GET /gists/starred"],
    star: ["PUT /gists/{gist_id}/star"],
    unstar: ["DELETE /gists/{gist_id}/star"],
    update: ["PATCH /gists/{gist_id}"],
    updateComment: ["PATCH /gists/{gist_id}/comments/{comment_id}"]
  },
  git: {
    createBlob: ["POST /repos/{owner}/{repo}/git/blobs"],
    createCommit: ["POST /repos/{owner}/{repo}/git/commits"],
    createRef: ["POST /repos/{owner}/{repo}/git/refs"],
    createTag: ["POST /repos/{owner}/{repo}/git/tags"],
    createTree: ["POST /repos/{owner}/{repo}/git/trees"],
    deleteRef: ["DELETE /repos/{owner}/{repo}/git/refs/{ref}"],
    getBlob: ["GET /repos/{owner}/{repo}/git/blobs/{file_sha}"],
    getCommit: ["GET /repos/{owner}/{repo}/git/commits/{commit_sha}"],
    getRef: ["GET /repos/{owner}/{repo}/git/ref/{ref}"],
    getTag: ["GET /repos/{owner}/{repo}/git/tags/{tag_sha}"],
    getTree: ["GET /repos/{owner}/{repo}/git/trees/{tree_sha}"],
    listMatchingRefs: ["GET /repos/{owner}/{repo}/git/matching-refs/{ref}"],
    updateRef: ["PATCH /repos/{owner}/{repo}/git/refs/{ref}"]
  },
  gitignore: {
    getTemplate: ["GET /gitignore/templates/{name}"],
    listTemplates: ["GET /gitignore/templates"]
  },
  interactions: {
    addOrUpdateRestrictionsForOrg: [
      "PUT /orgs/{org}/interaction-limits",
      { mediaType: { previews: ["sombra"] } }
    ],
    addOrUpdateRestrictionsForRepo: [
      "PUT /repos/{owner}/{repo}/interaction-limits",
      { mediaType: { previews: ["sombra"] } }
    ],
    getRestrictionsForOrg: [
      "GET /orgs/{org}/interaction-limits",
      { mediaType: { previews: ["sombra"] } }
    ],
    getRestrictionsForRepo: [
      "GET /repos/{owner}/{repo}/interaction-limits",
      { mediaType: { previews: ["sombra"] } }
    ],
    removeRestrictionsForOrg: [
      "DELETE /orgs/{org}/interaction-limits",
      { mediaType: { previews: ["sombra"] } }
    ],
    removeRestrictionsForRepo: [
      "DELETE /repos/{owner}/{repo}/interaction-limits",
      { mediaType: { previews: ["sombra"] } }
    ]
  },
  issues: {
    addAssignees: [
      "POST /repos/{owner}/{repo}/issues/{issue_number}/assignees"
    ],
    addLabels: ["POST /repos/{owner}/{repo}/issues/{issue_number}/labels"],
    checkAssignee: ["GET /repos/{owner}/{repo}/assignees/{assignee}"],
    create: ["POST /repos/{owner}/{repo}/issues"],
    createComment: [
      "POST /repos/{owner}/{repo}/issues/{issue_number}/comments"
    ],
    createLabel: ["POST /repos/{owner}/{repo}/labels"],
    createMilestone: ["POST /repos/{owner}/{repo}/milestones"],
    deleteComment: [
      "DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}"
    ],
    deleteLabel: ["DELETE /repos/{owner}/{repo}/labels/{name}"],
    deleteMilestone: [
      "DELETE /repos/{owner}/{repo}/milestones/{milestone_number}"
    ],
    get: ["GET /repos/{owner}/{repo}/issues/{issue_number}"],
    getComment: ["GET /repos/{owner}/{repo}/issues/comments/{comment_id}"],
    getEvent: ["GET /repos/{owner}/{repo}/issues/events/{event_id}"],
    getLabel: ["GET /repos/{owner}/{repo}/labels/{name}"],
    getMilestone: ["GET /repos/{owner}/{repo}/milestones/{milestone_number}"],
    list: ["GET /issues"],
    listAssignees: ["GET /repos/{owner}/{repo}/assignees"],
    listComments: ["GET /repos/{owner}/{repo}/issues/{issue_number}/comments"],
    listCommentsForRepo: ["GET /repos/{owner}/{repo}/issues/comments"],
    listEvents: ["GET /repos/{owner}/{repo}/issues/{issue_number}/events"],
    listEventsForRepo: ["GET /repos/{owner}/{repo}/issues/events"],
    listEventsForTimeline: [
      "GET /repos/{owner}/{repo}/issues/{issue_number}/timeline",
      { mediaType: { previews: ["mockingbird"] } }
    ],
    listForAuthenticatedUser: ["GET /user/issues"],
    listForOrg: ["GET /orgs/{org}/issues"],
    listForRepo: ["GET /repos/{owner}/{repo}/issues"],
    listLabelsForMilestone: [
      "GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels"
    ],
    listLabelsForRepo: ["GET /repos/{owner}/{repo}/labels"],
    listLabelsOnIssue: [
      "GET /repos/{owner}/{repo}/issues/{issue_number}/labels"
    ],
    listMilestonesForRepo: ["GET /repos/{owner}/{repo}/milestones"],
    lock: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/lock"],
    removeAssignees: [
      "DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees"
    ],
    removeLabel: [
      "DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}"
    ],
    removeLabels: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels"],
    replaceLabels: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/labels"],
    unlock: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock"],
    update: ["PATCH /repos/{owner}/{repo}/issues/{issue_number}"],
    updateComment: ["PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}"],
    updateLabel: ["PATCH /repos/{owner}/{repo}/labels/{name}"],
    updateMilestone: [
      "PATCH /repos/{owner}/{repo}/milestones/{milestone_number}"
    ]
  },
  licenses: {
    get: ["GET /licenses/{license}"],
    getForRepo: ["GET /repos/{owner}/{repo}/license"],
    listCommonlyUsed: ["GET /licenses"]
  },
  markdown: {
    render: ["POST /markdown"],
    renderRaw: [
      "POST /markdown/raw",
      { headers: { "content-type": "text/plain; charset=utf-8" } }
    ]
  },
  meta: { get: ["GET /meta"] },
  migrations: {
    cancelImport: ["DELETE /repos/{owner}/{repo}/import"],
    deleteArchiveForAuthenticatedUser: [
      "DELETE /user/migrations/{migration_id}/archive",
      { mediaType: { previews: ["wyandotte"] } }
    ],
    deleteArchiveForOrg: [
      "DELETE /orgs/{org}/migrations/{migration_id}/archive",
      { mediaType: { previews: ["wyandotte"] } }
    ],
    downloadArchiveForOrg: [
      "GET /orgs/{org}/migrations/{migration_id}/archive",
      { mediaType: { previews: ["wyandotte"] } }
    ],
    getArchiveForAuthenticatedUser: [
      "GET /user/migrations/{migration_id}/archive",
      { mediaType: { previews: ["wyandotte"] } }
    ],
    getCommitAuthors: ["GET /repos/{owner}/{repo}/import/authors"],
    getImportProgress: ["GET /repos/{owner}/{repo}/import"],
    getLargeFiles: ["GET /repos/{owner}/{repo}/import/large_files"],
    getStatusForAuthenticatedUser: [
      "GET /user/migrations/{migration_id}",
      { mediaType: { previews: ["wyandotte"] } }
    ],
    getStatusForOrg: [
      "GET /orgs/{org}/migrations/{migration_id}",
      { mediaType: { previews: ["wyandotte"] } }
    ],
    listForAuthenticatedUser: [
      "GET /user/migrations",
      { mediaType: { previews: ["wyandotte"] } }
    ],
    listForOrg: [
      "GET /orgs/{org}/migrations",
      { mediaType: { previews: ["wyandotte"] } }
    ],
    listReposForOrg: [
      "GET /orgs/{org}/migrations/{migration_id}/repositories",
      { mediaType: { previews: ["wyandotte"] } }
    ],
    listReposForUser: [
      "GET /user/{migration_id}/repositories",
      { mediaType: { previews: ["wyandotte"] } }
    ],
    mapCommitAuthor: ["PATCH /repos/{owner}/{repo}/import/authors/{author_id}"],
    setLfsPreference: ["PATCH /repos/{owner}/{repo}/import/lfs"],
    startForAuthenticatedUser: ["POST /user/migrations"],
    startForOrg: ["POST /orgs/{org}/migrations"],
    startImport: ["PUT /repos/{owner}/{repo}/import"],
    unlockRepoForAuthenticatedUser: [
      "DELETE /user/migrations/{migration_id}/repos/{repo_name}/lock",
      { mediaType: { previews: ["wyandotte"] } }
    ],
    unlockRepoForOrg: [
      "DELETE /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock",
      { mediaType: { previews: ["wyandotte"] } }
    ],
    updateImport: ["PATCH /repos/{owner}/{repo}/import"]
  },
  oauthAuthorizations: {
    createAuthorization: [
      "POST /authorizations",
      {},
      {
        deprecated:
          "octokit.oauthAuthorizations.createAuthorization() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#create-a-new-authorization"
      }
    ],
    deleteAuthorization: [
      "DELETE /authorizations/{authorization_id}",
      {},
      {
        deprecated:
          "octokit.oauthAuthorizations.deleteAuthorization() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#delete-an-authorization"
      }
    ],
    deleteGrant: [
      "DELETE /applications/grants/{grant_id}",
      {},
      {
        deprecated:
          "octokit.oauthAuthorizations.deleteGrant() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#delete-a-grant"
      }
    ],
    getAuthorization: [
      "GET /authorizations/{authorization_id}",
      {},
      {
        deprecated:
          "octokit.oauthAuthorizations.getAuthorization() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#get-a-single-authorization"
      }
    ],
    getGrant: [
      "GET /applications/grants/{grant_id}",
      {},
      {
        deprecated:
          "octokit.oauthAuthorizations.getGrant() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#get-a-single-grant"
      }
    ],
    getOrCreateAuthorizationForApp: [
      "PUT /authorizations/clients/{client_id}",
      {},
      {
        deprecated:
          "octokit.oauthAuthorizations.getOrCreateAuthorizationForApp() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#get-or-create-an-authorization-for-a-specific-app"
      }
    ],
    getOrCreateAuthorizationForAppAndFingerprint: [
      "PUT /authorizations/clients/{client_id}/{fingerprint}",
      {},
      {
        deprecated:
          "octokit.oauthAuthorizations.getOrCreateAuthorizationForAppAndFingerprint() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#get-or-create-an-authorization-for-a-specific-app-and-fingerprint"
      }
    ],
    listAuthorizations: [
      "GET /authorizations",
      {},
      {
        deprecated:
          "octokit.oauthAuthorizations.listAuthorizations() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#list-your-authorizations"
      }
    ],
    listGrants: [
      "GET /applications/grants",
      {},
      {
        deprecated:
          "octokit.oauthAuthorizations.listGrants() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#list-your-grants"
      }
    ],
    updateAuthorization: [
      "PATCH /authorizations/{authorization_id}",
      {},
      {
        deprecated:
          "octokit.oauthAuthorizations.updateAuthorization() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#update-an-existing-authorization"
      }
    ]
  },
  orgs: {
    addOrUpdateMembership: ["PUT /orgs/{org}/memberships/{username}"],
    blockUser: ["PUT /orgs/{org}/blocks/{username}"],
    checkBlockedUser: ["GET /orgs/{org}/blocks/{username}"],
    checkMembership: ["GET /orgs/{org}/members/{username}"],
    checkPublicMembership: ["GET /orgs/{org}/public_members/{username}"],
    concealMembership: ["DELETE /orgs/{org}/public_members/{username}"],
    convertMemberToOutsideCollaborator: [
      "PUT /orgs/{org}/outside_collaborators/{username}"
    ],
    createHook: ["POST /orgs/{org}/hooks"],
    createInvitation: ["POST /orgs/{org}/invitations"],
    deleteHook: ["DELETE /orgs/{org}/hooks/{hook_id}"],
    get: ["GET /orgs/{org}"],
    getHook: ["GET /orgs/{org}/hooks/{hook_id}"],
    getMembership: ["GET /orgs/{org}/memberships/{username}"],
    getMembershipForAuthenticatedUser: ["GET /user/memberships/orgs/{org}"],
    list: ["GET /organizations"],
    listBlockedUsers: ["GET /orgs/{org}/blocks"],
    listForAuthenticatedUser: ["GET /user/orgs"],
    listForUser: ["GET /users/{username}/orgs"],
    listHooks: ["GET /orgs/{org}/hooks"],
    listInstallations: [
      "GET /orgs/{org}/installations",
      { mediaType: { previews: ["machine-man"] } }
    ],
    listInvitationTeams: ["GET /orgs/{org}/invitations/{invitation_id}/teams"],
    listMembers: ["GET /orgs/{org}/members"],
    listMemberships: ["GET /user/memberships/orgs"],
    listOutsideCollaborators: ["GET /orgs/{org}/outside_collaborators"],
    listPendingInvitations: ["GET /orgs/{org}/invitations"],
    listPublicMembers: ["GET /orgs/{org}/public_members"],
    pingHook: ["POST /orgs/{org}/hooks/{hook_id}/pings"],
    publicizeMembership: ["PUT /orgs/{org}/public_members/{username}"],
    removeMember: ["DELETE /orgs/{org}/members/{username}"],
    removeMembership: ["DELETE /orgs/{org}/memberships/{username}"],
    removeOutsideCollaborator: [
      "DELETE /orgs/{org}/outside_collaborators/{username}"
    ],
    unblockUser: ["DELETE /orgs/{org}/blocks/{username}"],
    update: ["PATCH /orgs/{org}"],
    updateHook: ["PATCH /orgs/{org}/hooks/{hook_id}"],
    updateMembership: ["PATCH /user/memberships/orgs/{org}"]
  },
  projects: {
    addCollaborator: [
      "PUT /projects/{project_id}/collaborators/{username}",
      { mediaType: { previews: ["inertia"] } }
    ],
    createCard: [
      "POST /projects/columns/{column_id}/cards",
      { mediaType: { previews: ["inertia"] } }
    ],
    createColumn: [
      "POST /projects/{project_id}/columns",
      { mediaType: { previews: ["inertia"] } }
    ],
    createForAuthenticatedUser: [
      "POST /user/projects",
      { mediaType: { previews: ["inertia"] } }
    ],
    createForOrg: [
      "POST /orgs/{org}/projects",
      { mediaType: { previews: ["inertia"] } }
    ],
    createForRepo: [
      "POST /repos/{owner}/{repo}/projects",
      { mediaType: { previews: ["inertia"] } }
    ],
    delete: [
      "DELETE /projects/{project_id}",
      { mediaType: { previews: ["inertia"] } }
    ],
    deleteCard: [
      "DELETE /projects/columns/cards/{card_id}",
      { mediaType: { previews: ["inertia"] } }
    ],
    deleteColumn: [
      "DELETE /projects/columns/{column_id}",
      { mediaType: { previews: ["inertia"] } }
    ],
    get: [
      "GET /projects/{project_id}",
      { mediaType: { previews: ["inertia"] } }
    ],
    getCard: [
      "GET /projects/columns/cards/{card_id}",
      { mediaType: { previews: ["inertia"] } }
    ],
    getColumn: [
      "GET /projects/columns/{column_id}",
      { mediaType: { previews: ["inertia"] } }
    ],
    listCards: [
      "GET /projects/columns/{column_id}/cards",
      { mediaType: { previews: ["inertia"] } }
    ],
    listCollaborators: [
      "GET /projects/{project_id}/collaborators",
      { mediaType: { previews: ["inertia"] } }
    ],
    listColumns: [
      "GET /projects/{project_id}/columns",
      { mediaType: { previews: ["inertia"] } }
    ],
    listForOrg: [
      "GET /orgs/{org}/projects",
      { mediaType: { previews: ["inertia"] } }
    ],
    listForRepo: [
      "GET /repos/{owner}/{repo}/projects",
      { mediaType: { previews: ["inertia"] } }
    ],
    listForUser: [
      "GET /users/{username}/projects",
      { mediaType: { previews: ["inertia"] } }
    ],
    moveCard: [
      "POST /projects/columns/cards/{card_id}/moves",
      { mediaType: { previews: ["inertia"] } }
    ],
    moveColumn: [
      "POST /projects/columns/{column_id}/moves",
      { mediaType: { previews: ["inertia"] } }
    ],
    removeCollaborator: [
      "DELETE /projects/{project_id}/collaborators/{username}",
      { mediaType: { previews: ["inertia"] } }
    ],
    reviewUserPermissionLevel: [
      "GET /projects/{project_id}/collaborators/{username}/permission",
      { mediaType: { previews: ["inertia"] } }
    ],
    update: [
      "PATCH /projects/{project_id}",
      { mediaType: { previews: ["inertia"] } }
    ],
    updateCard: [
      "PATCH /projects/columns/cards/{card_id}",
      { mediaType: { previews: ["inertia"] } }
    ],
    updateColumn: [
      "PATCH /projects/columns/{column_id}",
      { mediaType: { previews: ["inertia"] } }
    ]
  },
  pulls: {
    checkIfMerged: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/merge"],
    create: ["POST /repos/{owner}/{repo}/pulls"],
    createComment: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/comments"],
    createReview: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],
    createReviewCommentReply: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies"
    ],
    createReviewRequest: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"
    ],
    deleteComment: ["DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}"],
    deletePendingReview: [
      "DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"
    ],
    deleteReviewRequest: [
      "DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"
    ],
    dismissReview: [
      "PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals"
    ],
    get: ["GET /repos/{owner}/{repo}/pulls/{pull_number}"],
    getComment: ["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}"],
    getCommentsForReview: [
      "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments"
    ],
    getReview: [
      "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"
    ],
    list: ["GET /repos/{owner}/{repo}/pulls"],
    listComments: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/comments"],
    listCommentsForRepo: ["GET /repos/{owner}/{repo}/pulls/comments"],
    listCommits: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/commits"],
    listFiles: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/files"],
    listReviewRequests: [
      "GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"
    ],
    listReviews: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],
    merge: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge"],
    submitReview: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events"
    ],
    update: ["PATCH /repos/{owner}/{repo}/pulls/{pull_number}"],
    updateBranch: [
      "PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch",
      { mediaType: { previews: ["lydian"] } }
    ],
    updateComment: ["PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}"],
    updateReview: [
      "PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"
    ]
  },
  rateLimit: { get: ["GET /rate_limit"] },
  reactions: {
    createForCommitComment: [
      "POST /repos/{owner}/{repo}/comments/{comment_id}/reactions",
      { mediaType: { previews: ["squirrel-girl"] } }
    ],
    createForIssue: [
      "POST /repos/{owner}/{repo}/issues/{issue_number}/reactions",
      { mediaType: { previews: ["squirrel-girl"] } }
    ],
    createForIssueComment: [
      "POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions",
      { mediaType: { previews: ["squirrel-girl"] } }
    ],
    createForPullRequestReviewComment: [
      "POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions",
      { mediaType: { previews: ["squirrel-girl"] } }
    ],
    createForTeamDiscussionCommentInOrg: [
      "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions",
      { mediaType: { previews: ["squirrel-girl"] } }
    ],
    createForTeamDiscussionCommentLegacy: [
      "POST /teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions",
      { mediaType: { previews: ["squirrel-girl"] } },
      {
        deprecated:
          "octokit.reactions.createForTeamDiscussionCommentLegacy() is deprecated, see https://developer.github.com/v3/reactions/#create-reaction-for-a-team-discussion-comment-legacy"
      }
    ],
    createForTeamDiscussionInOrg: [
      "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions",
      { mediaType: { previews: ["squirrel-girl"] } }
    ],
    createForTeamDiscussionLegacy: [
      "POST /teams/{team_id}/discussions/{discussion_number}/reactions",
      { mediaType: { previews: ["squirrel-girl"] } },
      {
        deprecated:
          "octokit.reactions.createForTeamDiscussionLegacy() is deprecated, see https://developer.github.com/v3/reactions/#create-reaction-for-a-team-discussion-legacy"
      }
    ],
    delete: [
      "DELETE /reactions/{reaction_id}",
      { mediaType: { previews: ["squirrel-girl"] } }
    ],
    listForCommitComment: [
      "GET /repos/{owner}/{repo}/comments/{comment_id}/reactions",
      { mediaType: { previews: ["squirrel-girl"] } }
    ],
    listForIssue: [
      "GET /repos/{owner}/{repo}/issues/{issue_number}/reactions",
      { mediaType: { previews: ["squirrel-girl"] } }
    ],
    listForIssueComment: [
      "GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions",
      { mediaType: { previews: ["squirrel-girl"] } }
    ],
    listForPullRequestReviewComment: [
      "GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions",
      { mediaType: { previews: ["squirrel-girl"] } }
    ],
    listForTeamDiscussionCommentInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions",
      { mediaType: { previews: ["squirrel-girl"] } }
    ],
    listForTeamDiscussionCommentLegacy: [
      "GET /teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions",
      { mediaType: { previews: ["squirrel-girl"] } },
      {
        deprecated:
          "octokit.reactions.listForTeamDiscussionCommentLegacy() is deprecated, see https://developer.github.com/v3/reactions/#list-reactions-for-a-team-discussion-comment-legacy"
      }
    ],
    listForTeamDiscussionInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions",
      { mediaType: { previews: ["squirrel-girl"] } }
    ],
    listForTeamDiscussionLegacy: [
      "GET /teams/{team_id}/discussions/{discussion_number}/reactions",
      { mediaType: { previews: ["squirrel-girl"] } },
      {
        deprecated:
          "octokit.reactions.listForTeamDiscussionLegacy() is deprecated, see https://developer.github.com/v3/reactions/#list-reactions-for-a-team-discussion-legacy"
      }
    ]
  },
  repos: {
    acceptInvitation: ["PATCH /user/repository_invitations/{invitation_id}"],
    addCollaborator: ["PUT /repos/{owner}/{repo}/collaborators/{username}"],
    addDeployKey: ["POST /repos/{owner}/{repo}/keys"],
    addProtectedBranchAdminEnforcement: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"
    ],
    addProtectedBranchAppRestrictions: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps"
    ],
    addProtectedBranchRequiredSignatures: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
      { mediaType: { previews: ["zzzax"] } }
    ],
    addProtectedBranchRequiredStatusChecksContexts: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts"
    ],
    addProtectedBranchTeamRestrictions: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams"
    ],
    addProtectedBranchUserRestrictions: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users"
    ],
    checkCollaborator: ["GET /repos/{owner}/{repo}/collaborators/{username}"],
    checkVulnerabilityAlerts: [
      "GET /repos/{owner}/{repo}/vulnerability-alerts",
      { mediaType: { previews: ["dorian"] } }
    ],
    compareCommits: ["GET /repos/{owner}/{repo}/compare/{base}...{head}"],
    createCommitComment: [
      "POST /repos/{owner}/{repo}/commits/{commit_sha}/comments"
    ],
    createDeployment: ["POST /repos/{owner}/{repo}/deployments"],
    createDeploymentStatus: [
      "POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"
    ],
    createDispatchEvent: ["POST /repos/{owner}/{repo}/dispatches"],
    createForAuthenticatedUser: ["POST /user/repos"],
    createFork: ["POST /repos/{owner}/{repo}/forks"],
    createHook: ["POST /repos/{owner}/{repo}/hooks"],
    createInOrg: ["POST /orgs/{org}/repos"],
    createOrUpdateFile: ["PUT /repos/{owner}/{repo}/contents/{path}"],
    createRelease: ["POST /repos/{owner}/{repo}/releases"],
    createStatus: ["POST /repos/{owner}/{repo}/statuses/{sha}"],
    createUsingTemplate: [
      "POST /repos/{template_owner}/{template_repo}/generate",
      { mediaType: { previews: ["baptiste"] } }
    ],
    declineInvitation: ["DELETE /user/repository_invitations/{invitation_id}"],
    delete: ["DELETE /repos/{owner}/{repo}"],
    deleteCommitComment: ["DELETE /repos/{owner}/{repo}/comments/{comment_id}"],
    deleteDownload: ["DELETE /repos/{owner}/{repo}/downloads/{download_id}"],
    deleteFile: ["DELETE /repos/{owner}/{repo}/contents/{path}"],
    deleteHook: ["DELETE /repos/{owner}/{repo}/hooks/{hook_id}"],
    deleteInvitation: [
      "DELETE /repos/{owner}/{repo}/invitations/{invitation_id}"
    ],
    deleteRelease: ["DELETE /repos/{owner}/{repo}/releases/{release_id}"],
    deleteReleaseAsset: [
      "DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}"
    ],
    disableAutomatedSecurityFixes: [
      "DELETE /repos/{owner}/{repo}/automated-security-fixes",
      { mediaType: { previews: ["london"] } }
    ],
    disablePagesSite: [
      "DELETE /repos/{owner}/{repo}/pages",
      { mediaType: { previews: ["switcheroo"] } }
    ],
    disableVulnerabilityAlerts: [
      "DELETE /repos/{owner}/{repo}/vulnerability-alerts",
      { mediaType: { previews: ["dorian"] } }
    ],
    enableAutomatedSecurityFixes: [
      "PUT /repos/{owner}/{repo}/automated-security-fixes",
      { mediaType: { previews: ["london"] } }
    ],
    enablePagesSite: [
      "POST /repos/{owner}/{repo}/pages",
      { mediaType: { previews: ["switcheroo"] } }
    ],
    enableVulnerabilityAlerts: [
      "PUT /repos/{owner}/{repo}/vulnerability-alerts",
      { mediaType: { previews: ["dorian"] } }
    ],
    get: ["GET /repos/{owner}/{repo}"],
    getAppsWithAccessToProtectedBranch: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps"
    ],
    getArchiveLink: ["GET /repos/{owner}/{repo}/{archive_format}/{ref}"],
    getBranch: ["GET /repos/{owner}/{repo}/branches/{branch}"],
    getBranchProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection"
    ],
    getClones: ["GET /repos/{owner}/{repo}/traffic/clones"],
    getCodeFrequencyStats: ["GET /repos/{owner}/{repo}/stats/code_frequency"],
    getCollaboratorPermissionLevel: [
      "GET /repos/{owner}/{repo}/collaborators/{username}/permission"
    ],
    getCombinedStatusForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/status"],
    getCommit: ["GET /repos/{owner}/{repo}/commits/{ref}"],
    getCommitActivityStats: ["GET /repos/{owner}/{repo}/stats/commit_activity"],
    getCommitComment: ["GET /repos/{owner}/{repo}/comments/{comment_id}"],
    getContents: ["GET /repos/{owner}/{repo}/contents/{path}"],
    getContributorsStats: ["GET /repos/{owner}/{repo}/stats/contributors"],
    getDeployKey: ["GET /repos/{owner}/{repo}/keys/{key_id}"],
    getDeployment: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}"],
    getDeploymentStatus: [
      "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}"
    ],
    getDownload: ["GET /repos/{owner}/{repo}/downloads/{download_id}"],
    getHook: ["GET /repos/{owner}/{repo}/hooks/{hook_id}"],
    getLatestPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/latest"],
    getLatestRelease: ["GET /repos/{owner}/{repo}/releases/latest"],
    getPages: ["GET /repos/{owner}/{repo}/pages"],
    getPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/{build_id}"],
    getParticipationStats: ["GET /repos/{owner}/{repo}/stats/participation"],
    getProtectedBranchAdminEnforcement: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"
    ],
    getProtectedBranchPullRequestReviewEnforcement: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"
    ],
    getProtectedBranchRequiredSignatures: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
      { mediaType: { previews: ["zzzax"] } }
    ],
    getProtectedBranchRequiredStatusChecks: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"
    ],
    getProtectedBranchRestrictions: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"
    ],
    getPunchCardStats: ["GET /repos/{owner}/{repo}/stats/punch_card"],
    getReadme: ["GET /repos/{owner}/{repo}/readme"],
    getRelease: ["GET /repos/{owner}/{repo}/releases/{release_id}"],
    getReleaseAsset: ["GET /repos/{owner}/{repo}/releases/assets/{asset_id}"],
    getReleaseByTag: ["GET /repos/{owner}/{repo}/releases/tags/{tag}"],
    getTeamsWithAccessToProtectedBranch: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams"
    ],
    getTopPaths: ["GET /repos/{owner}/{repo}/traffic/popular/paths"],
    getTopReferrers: ["GET /repos/{owner}/{repo}/traffic/popular/referrers"],
    getUsersWithAccessToProtectedBranch: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users"
    ],
    getViews: ["GET /repos/{owner}/{repo}/traffic/views"],
    list: ["GET /user/repos"],
    listAssetsForRelease: [
      "GET /repos/{owner}/{repo}/releases/{release_id}/assets"
    ],
    listBranches: ["GET /repos/{owner}/{repo}/branches"],
    listBranchesForHeadCommit: [
      "GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head",
      { mediaType: { previews: ["groot"] } }
    ],
    listCollaborators: ["GET /repos/{owner}/{repo}/collaborators"],
    listCommentsForCommit: [
      "GET /repos/{owner}/{repo}/commits/{commit_sha}/comments"
    ],
    listCommitComments: ["GET /repos/{owner}/{repo}/comments"],
    listCommits: ["GET /repos/{owner}/{repo}/commits"],
    listContributors: ["GET /repos/{owner}/{repo}/contributors"],
    listDeployKeys: ["GET /repos/{owner}/{repo}/keys"],
    listDeploymentStatuses: [
      "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"
    ],
    listDeployments: ["GET /repos/{owner}/{repo}/deployments"],
    listDownloads: ["GET /repos/{owner}/{repo}/downloads"],
    listForOrg: ["GET /orgs/{org}/repos"],
    listForUser: ["GET /users/{username}/repos"],
    listForks: ["GET /repos/{owner}/{repo}/forks"],
    listHooks: ["GET /repos/{owner}/{repo}/hooks"],
    listInvitations: ["GET /repos/{owner}/{repo}/invitations"],
    listInvitationsForAuthenticatedUser: ["GET /user/repository_invitations"],
    listLanguages: ["GET /repos/{owner}/{repo}/languages"],
    listPagesBuilds: ["GET /repos/{owner}/{repo}/pages/builds"],
    listProtectedBranchRequiredStatusChecksContexts: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts"
    ],
    listPublic: ["GET /repositories"],
    listPullRequestsAssociatedWithCommit: [
      "GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls",
      { mediaType: { previews: ["groot"] } }
    ],
    listReleases: ["GET /repos/{owner}/{repo}/releases"],
    listStatusesForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/statuses"],
    listTags: ["GET /repos/{owner}/{repo}/tags"],
    listTeams: ["GET /repos/{owner}/{repo}/teams"],
    listTopics: [
      "GET /repos/{owner}/{repo}/topics",
      { mediaType: { previews: ["mercy"] } }
    ],
    merge: ["POST /repos/{owner}/{repo}/merges"],
    pingHook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/pings"],
    removeBranchProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection"
    ],
    removeCollaborator: [
      "DELETE /repos/{owner}/{repo}/collaborators/{username}"
    ],
    removeDeployKey: ["DELETE /repos/{owner}/{repo}/keys/{key_id}"],
    removeProtectedBranchAdminEnforcement: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"
    ],
    removeProtectedBranchAppRestrictions: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps"
    ],
    removeProtectedBranchPullRequestReviewEnforcement: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"
    ],
    removeProtectedBranchRequiredSignatures: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
      { mediaType: { previews: ["zzzax"] } }
    ],
    removeProtectedBranchRequiredStatusChecks: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"
    ],
    removeProtectedBranchRequiredStatusChecksContexts: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts"
    ],
    removeProtectedBranchRestrictions: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"
    ],
    removeProtectedBranchTeamRestrictions: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams"
    ],
    removeProtectedBranchUserRestrictions: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users"
    ],
    replaceProtectedBranchAppRestrictions: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps"
    ],
    replaceProtectedBranchRequiredStatusChecksContexts: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts"
    ],
    replaceProtectedBranchTeamRestrictions: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams"
    ],
    replaceProtectedBranchUserRestrictions: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users"
    ],
    replaceTopics: [
      "PUT /repos/{owner}/{repo}/topics",
      { mediaType: { previews: ["mercy"] } }
    ],
    requestPageBuild: ["POST /repos/{owner}/{repo}/pages/builds"],
    retrieveCommunityProfileMetrics: [
      "GET /repos/{owner}/{repo}/community/profile"
    ],
    testPushHook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/tests"],
    transfer: ["POST /repos/{owner}/{repo}/transfer"],
    update: ["PATCH /repos/{owner}/{repo}"],
    updateBranchProtection: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection"
    ],
    updateCommitComment: ["PATCH /repos/{owner}/{repo}/comments/{comment_id}"],
    updateHook: ["PATCH /repos/{owner}/{repo}/hooks/{hook_id}"],
    updateInformationAboutPagesSite: ["PUT /repos/{owner}/{repo}/pages"],
    updateInvitation: [
      "PATCH /repos/{owner}/{repo}/invitations/{invitation_id}"
    ],
    updateProtectedBranchPullRequestReviewEnforcement: [
      "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"
    ],
    updateProtectedBranchRequiredStatusChecks: [
      "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"
    ],
    updateRelease: ["PATCH /repos/{owner}/{repo}/releases/{release_id}"],
    updateReleaseAsset: [
      "PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}"
    ],
    uploadReleaseAsset: [
      "POST /repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}",
      { baseUrl: "https://uploads.github.com" }
    ]
  },
  search: {
    code: ["GET /search/code"],
    commits: ["GET /search/commits", { mediaType: { previews: ["cloak"] } }],
    issuesAndPullRequests: ["GET /search/issues"],
    labels: ["GET /search/labels"],
    repos: ["GET /search/repositories"],
    topics: ["GET /search/topics"],
    users: ["GET /search/users"]
  },
  teams: {
    addMemberLegacy: [
      "PUT /teams/{team_id}/members/{username}",
      {},
      {
        deprecated:
          "octokit.teams.addMemberLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#add-team-member-legacy"
      }
    ],
    addOrUpdateMembershipInOrg: [
      "PUT /orgs/{org}/teams/{team_slug}/memberships/{username}"
    ],
    addOrUpdateMembershipLegacy: [
      "PUT /teams/{team_id}/memberships/{username}",
      {},
      {
        deprecated:
          "octokit.teams.addOrUpdateMembershipLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#add-or-update-team-membership-legacy"
      }
    ],
    addOrUpdateProjectInOrg: [
      "PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}",
      { mediaType: { previews: ["inertia"] } }
    ],
    addOrUpdateProjectLegacy: [
      "PUT /teams/{team_id}/projects/{project_id}",
      { mediaType: { previews: ["inertia"] } },
      {
        deprecated:
          "octokit.teams.addOrUpdateProjectLegacy() is deprecated, see https://developer.github.com/v3/teams/#add-or-update-team-project-legacy"
      }
    ],
    addOrUpdateRepoInOrg: [
      "PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"
    ],
    addOrUpdateRepoLegacy: [
      "PUT /teams/{team_id}/repos/{owner}/{repo}",
      {},
      {
        deprecated:
          "octokit.teams.addOrUpdateRepoLegacy() is deprecated, see https://developer.github.com/v3/teams/#add-or-update-team-repository-legacy"
      }
    ],
    checkManagesRepoInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"
    ],
    checkManagesRepoLegacy: [
      "GET /teams/{team_id}/repos/{owner}/{repo}",
      {},
      {
        deprecated:
          "octokit.teams.checkManagesRepoLegacy() is deprecated, see https://developer.github.com/v3/teams/#check-if-a-team-manages-a-repository-legacy"
      }
    ],
    create: ["POST /orgs/{org}/teams"],
    createDiscussionCommentInOrg: [
      "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"
    ],
    createDiscussionCommentLegacy: [
      "POST /teams/{team_id}/discussions/{discussion_number}/comments",
      {},
      {
        deprecated:
          "octokit.teams.createDiscussionCommentLegacy() is deprecated, see https://developer.github.com/v3/teams/discussion_comments/#create-a-comment-legacy"
      }
    ],
    createDiscussionInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions"],
    createDiscussionLegacy: [
      "POST /teams/{team_id}/discussions",
      {},
      {
        deprecated:
          "octokit.teams.createDiscussionLegacy() is deprecated, see https://developer.github.com/v3/teams/discussions/#create-a-discussion-legacy"
      }
    ],
    deleteDiscussionCommentInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"
    ],
    deleteDiscussionCommentLegacy: [
      "DELETE /teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}",
      {},
      {
        deprecated:
          "octokit.teams.deleteDiscussionCommentLegacy() is deprecated, see https://developer.github.com/v3/teams/discussion_comments/#delete-a-comment-legacy"
      }
    ],
    deleteDiscussionInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"
    ],
    deleteDiscussionLegacy: [
      "DELETE /teams/{team_id}/discussions/{discussion_number}",
      {},
      {
        deprecated:
          "octokit.teams.deleteDiscussionLegacy() is deprecated, see https://developer.github.com/v3/teams/discussions/#delete-a-discussion-legacy"
      }
    ],
    deleteInOrg: ["DELETE /orgs/{org}/teams/{team_slug}"],
    deleteLegacy: [
      "DELETE /teams/{team_id}",
      {},
      {
        deprecated:
          "octokit.teams.deleteLegacy() is deprecated, see https://developer.github.com/v3/teams/#delete-team-legacy"
      }
    ],
    getByName: ["GET /orgs/{org}/teams/{team_slug}"],
    getDiscussionCommentInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"
    ],
    getDiscussionCommentLegacy: [
      "GET /teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}",
      {},
      {
        deprecated:
          "octokit.teams.getDiscussionCommentLegacy() is deprecated, see https://developer.github.com/v3/teams/discussion_comments/#get-a-single-comment-legacy"
      }
    ],
    getDiscussionInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"
    ],
    getDiscussionLegacy: [
      "GET /teams/{team_id}/discussions/{discussion_number}",
      {},
      {
        deprecated:
          "octokit.teams.getDiscussionLegacy() is deprecated, see https://developer.github.com/v3/teams/discussions/#get-a-single-discussion-legacy"
      }
    ],
    getLegacy: [
      "GET /teams/{team_id}",
      {},
      {
        deprecated:
          "octokit.teams.getLegacy() is deprecated, see https://developer.github.com/v3/teams/#get-team-legacy"
      }
    ],
    getMemberLegacy: [
      "GET /teams/{team_id}/members/{username}",
      {},
      {
        deprecated:
          "octokit.teams.getMemberLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#get-team-member-legacy"
      }
    ],
    getMembershipInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/memberships/{username}"
    ],
    getMembershipLegacy: [
      "GET /teams/{team_id}/memberships/{username}",
      {},
      {
        deprecated:
          "octokit.teams.getMembershipLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#get-team-membership-legacy"
      }
    ],
    list: ["GET /orgs/{org}/teams"],
    listChildInOrg: ["GET /orgs/{org}/teams/{team_slug}/teams"],
    listChildLegacy: [
      "GET /teams/{team_id}/teams",
      {},
      {
        deprecated:
          "octokit.teams.listChildLegacy() is deprecated, see https://developer.github.com/v3/teams/#list-child-teams-legacy"
      }
    ],
    listDiscussionCommentsInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"
    ],
    listDiscussionCommentsLegacy: [
      "GET /teams/{team_id}/discussions/{discussion_number}/comments",
      {},
      {
        deprecated:
          "octokit.teams.listDiscussionCommentsLegacy() is deprecated, see https://developer.github.com/v3/teams/discussion_comments/#list-comments-legacy"
      }
    ],
    listDiscussionsInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions"],
    listDiscussionsLegacy: [
      "GET /teams/{team_id}/discussions",
      {},
      {
        deprecated:
          "octokit.teams.listDiscussionsLegacy() is deprecated, see https://developer.github.com/v3/teams/discussions/#list-discussions-legacy"
      }
    ],
    listForAuthenticatedUser: ["GET /user/teams"],
    listMembersInOrg: ["GET /orgs/{org}/teams/{team_slug}/members"],
    listMembersLegacy: [
      "GET /teams/{team_id}/members",
      {},
      {
        deprecated:
          "octokit.teams.listMembersLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#list-team-members-legacy"
      }
    ],
    listPendingInvitationsInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/invitations"
    ],
    listPendingInvitationsLegacy: [
      "GET /teams/{team_id}/invitations",
      {},
      {
        deprecated:
          "octokit.teams.listPendingInvitationsLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#list-pending-team-invitations-legacy"
      }
    ],
    listProjectsInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/projects",
      { mediaType: { previews: ["inertia"] } }
    ],
    listProjectsLegacy: [
      "GET /teams/{team_id}/projects",
      { mediaType: { previews: ["inertia"] } },
      {
        deprecated:
          "octokit.teams.listProjectsLegacy() is deprecated, see https://developer.github.com/v3/teams/#list-team-projects-legacy"
      }
    ],
    listReposInOrg: ["GET /orgs/{org}/teams/{team_slug}/repos"],
    listReposLegacy: [
      "GET /teams/{team_id}/repos",
      {},
      {
        deprecated:
          "octokit.teams.listReposLegacy() is deprecated, see https://developer.github.com/v3/teams/#list-team-repos-legacy"
      }
    ],
    removeMemberLegacy: [
      "DELETE /teams/{team_id}/members/{username}",
      {},
      {
        deprecated:
          "octokit.teams.removeMemberLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#remove-team-member-legacy"
      }
    ],
    removeMembershipInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}"
    ],
    removeMembershipLegacy: [
      "DELETE /teams/{team_id}/memberships/{username}",
      {},
      {
        deprecated:
          "octokit.teams.removeMembershipLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#remove-team-membership-legacy"
      }
    ],
    removeProjectInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}"
    ],
    removeProjectLegacy: [
      "DELETE /teams/{team_id}/projects/{project_id}",
      {},
      {
        deprecated:
          "octokit.teams.removeProjectLegacy() is deprecated, see https://developer.github.com/v3/teams/#remove-team-project-legacy"
      }
    ],
    removeRepoInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"
    ],
    removeRepoLegacy: [
      "DELETE /teams/{team_id}/repos/{owner}/{repo}",
      {},
      {
        deprecated:
          "octokit.teams.removeRepoLegacy() is deprecated, see https://developer.github.com/v3/teams/#remove-team-repository-legacy"
      }
    ],
    reviewProjectInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/projects/{project_id}",
      { mediaType: { previews: ["inertia"] } }
    ],
    reviewProjectLegacy: [
      "GET /teams/{team_id}/projects/{project_id}",
      { mediaType: { previews: ["inertia"] } },
      {
        deprecated:
          "octokit.teams.reviewProjectLegacy() is deprecated, see https://developer.github.com/v3/teams/#review-a-team-project-legacy"
      }
    ],
    updateDiscussionCommentInOrg: [
      "PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"
    ],
    updateDiscussionCommentLegacy: [
      "PATCH /teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}",
      {},
      {
        deprecated:
          "octokit.teams.updateDiscussionCommentLegacy() is deprecated, see https://developer.github.com/v3/teams/discussion_comments/#edit-a-comment-legacy"
      }
    ],
    updateDiscussionInOrg: [
      "PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"
    ],
    updateDiscussionLegacy: [
      "PATCH /teams/{team_id}/discussions/{discussion_number}",
      {},
      {
        deprecated:
          "octokit.teams.updateDiscussionLegacy() is deprecated, see https://developer.github.com/v3/teams/discussions/#edit-a-discussion-legacy"
      }
    ],
    updateInOrg: ["PATCH /orgs/{org}/teams/{team_slug}"],
    updateLegacy: [
      "PATCH /teams/{team_id}",
      {},
      {
        deprecated:
          "octokit.teams.updateLegacy() is deprecated, see https://developer.github.com/v3/teams/#edit-team-legacy"
      }
    ]
  },
  users: {
    addEmails: ["POST /user/emails"],
    block: ["PUT /user/blocks/{username}"],
    checkBlocked: ["GET /user/blocks/{username}"],
    checkFollowing: ["GET /user/following/{username}"],
    checkFollowingForUser: ["GET /users/{username}/following/{target_user}"],
    createGpgKey: ["POST /user/gpg_keys"],
    createPublicKey: ["POST /user/keys"],
    deleteEmails: ["DELETE /user/emails"],
    deleteGpgKey: ["DELETE /user/gpg_keys/{gpg_key_id}"],
    deletePublicKey: ["DELETE /user/keys/{key_id}"],
    follow: ["PUT /user/following/{username}"],
    getAuthenticated: ["GET /user"],
    getByUsername: ["GET /users/{username}"],
    getContextForUser: ["GET /users/{username}/hovercard"],
    getGpgKey: ["GET /user/gpg_keys/{gpg_key_id}"],
    getPublicKey: ["GET /user/keys/{key_id}"],
    list: ["GET /users"],
    listBlocked: ["GET /user/blocks"],
    listEmails: ["GET /user/emails"],
    listFollowersForAuthenticatedUser: ["GET /user/followers"],
    listFollowersForUser: ["GET /users/{username}/followers"],
    listFollowingForAuthenticatedUser: ["GET /user/following"],
    listFollowingForUser: ["GET /users/{username}/following"],
    listGpgKeys: ["GET /user/gpg_keys"],
    listGpgKeysForUser: ["GET /users/{username}/gpg_keys"],
    listPublicEmails: ["GET /user/public_emails"],
    listPublicKeys: ["GET /user/keys"],
    listPublicKeysForUser: ["GET /users/{username}/keys"],
    togglePrimaryEmailVisibility: ["PATCH /user/email/visibility"],
    unblock: ["DELETE /user/blocks/{username}"],
    unfollow: ["DELETE /user/following/{username}"],
    updateAuthenticated: ["PATCH /user"]
  }
};

export default Endpoints;
