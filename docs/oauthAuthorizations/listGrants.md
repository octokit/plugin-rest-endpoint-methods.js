# List your grants

**This method is deprecated.**

**Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). For more information, see the [blog post](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api).

You can use this API to list the set of OAuth applications that have been granted access to your account. Unlike the [list your authorizations](https://developer.github.com/v3/oauth_authorizations/#list-your-authorizations) API, this API does not manage individual tokens. This API will return one entry for each OAuth application that has been granted access to your account, regardless of the number of tokens an application has generated for your user. The list of OAuth applications returned matches what is shown on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized). The `scopes` returned are the union of scopes authorized for the application. For example, if an application has one token with `repo` scope and another token with `user` scope, the grant will return `["repo", "user"]`.

```js
octokit.oauthAuthorizations.listGrants();
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
    <tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
